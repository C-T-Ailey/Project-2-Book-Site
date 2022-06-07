const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    nationality: String,
    birthYear: Number,
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }]
},{
    timestamps: true
})

const Author = mongoose.model("Author", authorSchema)

module.exports = {Author}