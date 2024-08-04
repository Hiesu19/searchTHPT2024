const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        title: { type: String },
        author: { type: String },
        description: { type: String },
        price: { type: String },
        img_thumbnail: { type: String },
        slug: { type: String, slug: "title", unique: true },
        videoID: { type: String },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Course", Course);
