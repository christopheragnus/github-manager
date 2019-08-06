import axios from "axios";

const requestGithubToken = credentials =>
  axios
    .post("https://github.com/login/oauth/access_token", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(res => console.log(res.data))
    .catch(err => {
      throw new Error(JSON.stringify(err));
    });

const requestGithubUserAccount = token =>
  axios
    .get(
      `https://api.github.com/user?access_token=${token}&token_type=bearer
  `
    )
    .then(res => console.log(res))
    .catch(err => {
      throw new Error(JSON.stringify(err));
    });

async function authorizeWithGithub(credentials) {
  const requestToken = await requestGithubToken(credentials);
  const { access_token } = requestToken;
  const githubUser = await requestGithubUserAccount(access_token);
  return { ...githubUser, access_token };
}

export default authorizeWithGithub;
