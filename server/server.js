import express from "express";

const app = express();
app.use(express.static("../client/dist"));

const server = app.listen(process.env.PORT || 3000, ()=> {
    console.log(`Server starting at http://localhost:${server.address().port}`);
});
