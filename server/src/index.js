require("dotenv").config();
const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const { authorizeWithGithub } = require("./lib.js");

const resolvers = {
  Query: {
    feed: (parent, args, context) => {
      return context.prisma.posts({ where: { published: true } });
    },
    drafts: (parent, args, context) => {
      return context.prisma.posts({ where: { published: false } });
    },
    post: (parent, { id }, context) => {
      return context.prisma.post({ id });
    }
  },
  Mutation: {
    async githubAuth(parent, { code }, context) {
      let {
        message,
        access_token,
        avatar_url,
        login,
        name
      } = await authorizeWithGithub({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code
      });

      if (message) {
        throw new Error(message);
      }

      let latestUserInfo = {
        name,
        githubLogin: login,
        githubToken: access_token,
        avatar: avatar_url
      };

      console.log(latestUserInfo);

      const user = await context.prisma.upsertUser({
        where: {
          githubLogin: login
        },
        update: {
          name,
          githubToken: access_token,
          avatar: avatar_url
        },
        create: {
          ...latestUserInfo
        }
      });
      return { user, token: access_token };
    },
    createDraft(parent, { title, content }, context) {
      return context.prisma.createPost({
        title,
        content
      });
    },
    deletePost(parent, { id }, context) {
      return context.prisma.deletePost({ id });
    },
    publish(parent, { id }, context) {
      return context.prisma.updatePost({
        where: { id },
        data: { published: true }
      });
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    prisma
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
