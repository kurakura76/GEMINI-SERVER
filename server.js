process.noDeprecation = true;

const express = require("express");
const path = require("path");

const app = express();
const API_KEY = "AIzaSyCJdXqCBXrmJZRMbwlB1dqCbesl34x8fuA";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/generate", async (req, res) => {
    const prompt = req.body.prompt || "Write a story about a magical bag.";

    if (!API_KEY) {
        return res.status(400).json({ error: "API Key not found!" });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
            }),
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            const generatedText = data.candidates[0].content.parts[0].text;
            res.json({ response: generatedText });
        } else {
            res.status(400).json({ error: "No results found." });
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Server error occurred." });
    }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const initializeServer = async () => {
    console.clear();

    app.listen(3000, () => {
        console.log("=======================================");
        console.log("            GEMINI AI TOOLS            ");
        console.log("=======================================");
        console.log("Server is running at: http://localhost:3000");
        console.log("Use this tool to generate AI content.\n");
    });
};

initializeServer();
process.noDeprecation = true;

const express = require("express");
const path = require("path");

const app = express();
const API_KEY = "AIzaSyCJdXqCBXrmJZRMbwlB1dqCbesl34x8fuA";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/generate", async (req, res) => {
    const prompt = req.body.prompt || "Write a story about a magical bag.";

    if (!API_KEY) {
        return res.status(400).json({ error: "API Key not found!" });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
            }),
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            const generatedText = data.candidates[0].content.parts[0].text;
            res.json({ response: generatedText });
        } else {
            res.status(400).json({ error: "No results found." });
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Server error occurred." });
    }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const initializeServer = async () => {
    console.clear();

    app.listen(3000, () => {
        console.log("=======================================");
        console.log("            GEMINI AI TOOLS            ");
        console.log("=======================================");
        console.log("Server is running at: http://localhost:3000");
        console.log("Use this tool to generate AI content.\n");
    });
};

initializeServer();
                
