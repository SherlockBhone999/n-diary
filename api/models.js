const mongoose = require('mongoose')


const tagSchema = new mongoose.Schema({
  tag : { type : String , required : true }
})


const dayToBeRememberedSchema = new mongoose.Schema({
  day : { type : String , required : true },
  reason : { type : String },
  delta_data : { type : Object }
})


const quoteSchema = new mongoose.Schema({
  text : { type : String , required : true },
  by_who : { type : String }
})


const currentMonthSchema = new mongoose.Schema({
  month : { type : String , required : true },
  resolution : { type : String , required : true },
  days : { type : Array , default : [] }
})


const yearSchema = new mongoose.Schema({
  year : { type : String , required : true },
  days_of_the_year : { type : Array , default : []},
  months : { type : Array , default : []}
})



const TagModel = mongoose.model('tags', tagSchema )
const QuoteModel = mongoose.model('quotes', quoteSchema )
const DayToBeRememberedModel = mongoose.model('days_to_be_remembered', dayToBeRememberedSchema )
const CurrentMonthModel = mongoose.model('current_month', currentMonthSchema )
const YearModel = mongoose.model('years', yearSchema )


module.exports = { TagModel , QuoteModel , DayToBeRememberedModel , CurrentMonthModel, YearModel }