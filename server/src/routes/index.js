const { GraphQLServer } = require("graphql-yoga");
const server = new GraphQLServer();
const router = server.express;

const passportGithub = require("../auth/github");

router.get("/login", function(req, res, next) {
  res.send("Go back and register!");
});

router.get(
  "/auth/github",
  passportGithub.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/auth/github/callback",
  passportGithub.authenticate("github", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
  }
);

module.exports = router;
