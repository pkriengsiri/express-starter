const express = require("express");

const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:"+PORT);
});

