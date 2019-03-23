# watson-chatbot-node
A Chatbot made in NodeJS and using Watson Assistant

# What do I need to run this application?
You need to create a [IBM Cloud Account](https://cloud.ibm.com/), then you make a `.env` file containing:
```
WORKSPACE_ID=<workspace_id>
ASSISTANT_USERNAME=<username>
ASSISTANT_PASSWORD=<password>
```
Finally, run:
```
yarn
yarn start
```
The application runs on `http://localhost:3000/`

If you didn't create a chatbot yet, read this [article](https://medium.com/botsbrasil/desenvolvendo-chatbots-com-watson-conversation-64a3b2cdbb30) about it.
