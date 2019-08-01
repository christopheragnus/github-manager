const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: async ({ req }) => {
    const githubToken = req.headers.authorization;
    const currentUser = await db.collection("users").findOne({ githubToken });
    return { db, currentUser };
  }
});

server.express.use(passport.initialize());
server.express.use(passport.session());

mongoose.connect("mongodb://localhost:27017/graphdb", {
  useNewUrlParser: true
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
});

server.start(() => console.log("Server is running on http://localhost:4000"));
