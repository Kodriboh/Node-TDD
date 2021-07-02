const mongooes = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = Schema({

    title: {
        type: String, 
        require: true, 
    },

    body: {
        type: String, 
        required: true, 
    },

    article_image: {
        type: String, 
        required: false, 
    },

    data: {
        type: Date, 
        default: Date.now(),
    }
});

module.exports = Article = mongoose.model("Article", articleSchema);