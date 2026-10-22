import express from "express";
import { createClient } from "redis";


const app = express();
const client = createClient();
client.connect()

app.use(express.json());


app.post("/submit", async (req, res) => {
    const {problemId, userId, code, language} = req.body;

    // push the submission to DB

    try {
        await client.lPush("submissions", JSON.stringify({problemId, userId, code, language}));
    res.json({
        message: "Submission received successfully!"
    });
    } catch (error) {
        res.status(500).json({
            message: "Error while submitting the code",
            error: error
        });
    }
});

app.listen(3000);