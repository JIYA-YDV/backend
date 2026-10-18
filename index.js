require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const githubData =  {
  "login": "JIYA-YDV",
  "id": 84891123,
  "node_id": "MDQ6VXNlcjg0ODkxMTIz",
  "avatar_url": "https://avatars.githubusercontent.com/u/84891123?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/JIYA-YDV",
  "html_url": "https://github.com/JIYA-YDV",
  "followers_url": "https://api.github.com/users/JIYA-YDV/followers",
  "following_url": "https://api.github.com/users/JIYA-YDV/following{/other_user}",
  "gists_url": "https://api.github.com/users/JIYA-YDV/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/JIYA-YDV/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/JIYA-YDV/subscriptions",
  "organizations_url": "https://api.github.com/users/JIYA-YDV/orgs",
  "repos_url": "https://api.github.com/users/JIYA-YDV/repos",
  "events_url": "https://api.github.com/users/JIYA-YDV/events{/privacy}",
  "received_events_url": "https://api.github.com/users/JIYA-YDV/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Jiya Yadav",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "MSc IT (AI) | Aspiring AI/ML Engineer   \r\nFocused on ML algorithms, Explainable AI, and practical, real-world systems. ",
  "twitter_username": null,
  "public_repos": 33,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2021-05-27T04:13:19Z",
  "updated_at": "2026-10-17T14:17:12Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
    res.send('jiyayadav2002');  
})

app.get('/login', (req, res) => {
    res.send('<h1>please login to continue</h1>');  
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>');  
})

app.get('/github', (req, res) => {
    res.json(githubData);  
})
app.listen(process.env.PORT,() => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 