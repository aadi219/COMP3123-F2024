import express from "express";

const app = express();
const PORT = 8081;

app.get("/hello", (req, res) => {
    res.send("Hello Express JS");
});

app.get("/user", (req, res) => {
    let {firstname, lastname} = req.query;
    firstname = firstname ?? "Pritesh";
    lastname = lastname ?? "Patel";
    res.json({firstname, lastname});
});

app.post("/user/:firstname/:lastname", (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.json({firstname, lastname});
});

app.listen(PORT, () => {
    console.log("Server running on PORT: " + PORT);
})