const { findMany } = require("../models/user");

const getCollection = async (req, res) => {
    const rawData = await findMany();
    console.log("2: ", rawData);
    res.json(rawData);
};

module.exports = { getCollection };
