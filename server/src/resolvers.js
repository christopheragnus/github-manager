const { authorizeWithGithub } = require("./lib.js");
const User = require("./models/user");

const resolvers = {
  Query: {
    resumes() {
      return {};
    }
  },
  Mutation: {
    async githubAuth(parent, { code }, { db }) {
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

      const user = new User({ githubLogin: login }, latestUserInfo);
      user.save(err => {
        if (err) {
          return console.log(`Error has occured: ${err}`);
        }

        console.log("Document is successfully saved.");
      });

      let userData = User.find({ githubLogin: login }, function(
        err,
        documents
      ) {
        console.log(documents);
        return documents;
      });

      // const {
      //   ops: [user]
      // } = await User
      //   .collection("users")
      //   .replaceOne({ githubLogin: login }, latestUserInfo, { upsert: true });

      return { userData, token: access_token };
    }
  }
};

module.export = resolvers;
