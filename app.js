require("dotenv").config();
const AssistantV1 = require("watson-developer-cloud/assistant/v1");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.static("./public"));

const port = 3000;

const assistant = new AssistantV1({
  username: process.env.ASSISTANT_USERNAME,
  password: process.env.ASSISTANT_PASSWORD,
  url: "https://gateway-wdc.watsonplatform.net/assistant/api",
  version: "2019-02-23"
});

app.post("/conversation/", (req, res) => {
  const { text, context = {} } = req.body;
  const params = {
    input: { text },
    workspace_id: process.env.WORKSPACE_ID,
    context
  };

  assistant.message(params, (err, response) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  });
});

app.listen(port, () => console.log(`Running on port ${port}`));
