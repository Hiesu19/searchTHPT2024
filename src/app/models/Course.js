const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Course = new Schema({
    title: { type: String },
    author: { type: String },
    description: { type: String },
    price: { type: String },
    img_thumbnail: { type: String },
    slug: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
