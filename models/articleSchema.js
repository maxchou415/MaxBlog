const mongoose = require('mongoose')
const shortId = require('shortid')
const moment = require('moment')

mongoose.connect('mongodb://localhost/MaxBlog')

var Schema = mongoose.Schema

var Time = moment().format('LL')

var articleSchema = new Schema({

    articleTitle: { type: String },
    articleContent: { type: String },
    articleFeaturePhoto: { type: String },
    articleCategory: { type: String },

    articleURL: { type: String, default: shortId.generate },
    articleCreator: { type: String },

    _id: { type: String, default: shortId.generate },

    created_at: { type: Date, default: Time }
})


module.exports = mongoose.model('article', articleSchema)
