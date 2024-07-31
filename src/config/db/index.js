const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/f8_dev");
        console.log("Connect OK");
    } catch (error) {
        console.log("False");
    }
}

module.exports = { connect };
