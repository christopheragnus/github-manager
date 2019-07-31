const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const resolvers = {
  Query: {
    resumes: async (parent, args, context) => {
      const list = await context.prisma.resumes();
      return list;
    },
    resume: async (parent, args, context) => {
      const list = await context.prisma.resumes();
      return list.find(item => item.id === args.id);
    },
    positions: async (parent, args, context) => {
      const list = await context.prisma.positions();
      return list;
    }
  },
  Mutation: {
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
    },
    createResume(parent, args, context) {
      return context.prisma.createResume({
        name: args.name,
        address: args.address,
        email: args.email
      });
    },
    upsertResume(parent, args, context) {
      return context.prisma.upsertResume({
        where: {
          id: args.id
        },
        update: {
          name: args.name,
          address: args.address,
          email: args.email
        },
        create: {
          name: args.name,
          address: args.address,
          email: args.email
        }
      });
    },
    updateResume(parent, args, context) {
      return context.prisma.updateResume({
        data: {
          name: args.name,
          address: args.address,
          email: args.email
        },
        where: {
          id: args.id
        }
      });
    },
    createPosition(parent, args, context) {
      return context.prisma.createPosition({
        title: args.title,
        description: args.description,
        year: args.year
      });
    },
    deletePosition(parents, args, context) {
      return context.prisma.deletePosition({
        id: args.id
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
