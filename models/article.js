const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    url: {
        work: mongoose.SchemaTypes.Url,
        profile: mongoose.SchemaTypes.Url
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;