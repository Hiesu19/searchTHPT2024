const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        title: { type: String },
        author: { type: String },
        description: { type: String },
        price: { type: String },
        img_thumbnail: { type: String },
        slug: { type: String },
        videoID: { type: String },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Course", Course);
