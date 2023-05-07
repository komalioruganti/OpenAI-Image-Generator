const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } =  require("openai") ;
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(cors());


const configuration = new Configuration({
    organization: "org-roE3qdF4THZPZsempqeydBDs",
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

app.post('/art',async (req,res)=>{
const query = req.body;
const response = await openai.createImage({
    prompt: "A cute dog",
    n:1,
    size:"512x512"
})
console.log(response.data.data[0].url)
res.send(response.data.data[0].url)

})
app.use('/',(req,res)=>{
    res.send("Hei [dddjckc")
})
const port = 8080;
app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})
