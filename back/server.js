require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PORT, CLIENT_URL } = process.env;
const router = require("./routes");
// const connection = require("./db-connection");

// connection.connect((err) => {
//     if (err) {
//         console.error("Error to connect to DB: ", err.message);
//     } else {
//         console.log("Connected to DB");
//     }
// });

const app = express();

const corsOptions = {
    origin: CLIENT_URL,
    optionsSuccessStatus: 200,
    methods: "GET, POST, PUT, DELETE, OPTIONS",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello my amazon api");
});

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
