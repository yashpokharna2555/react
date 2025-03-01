const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running...");
});

app.get("/users", async (req, res) => {
    try {
        const users = await fetch('https://randomuser.me/api/0.8/?results=10');
        const data = await users.json();
        res.json({ success: true, data: data.results });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching users.' });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
