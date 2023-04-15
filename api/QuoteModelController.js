
const { QuoteModel } = require('./models')

const createQuote = (req,res) => {
  const { text , by_who } = req.body
  QuoteModel.create({text, by_who})
  .then(data => {
    console.log(data)
  })
}

const getQuote = (req, res) => {
  QuoteModel.find()
  .then(data => res.json(data))
}


const updateQuote = (req, res) => {
  const { _id, text, by_who } = req.body
  QuoteModel.findByIdAndUpdate(_id, {text , by_who })
  .then(()=>{
    console.log('updated')
  })
}

const deleteQuote = (req, res) => {
  const { id } = req.body
  QuoteModel.findByIdAndDelete(id)
  .then(()=>console.log('deleted'))
}

module.exports = { createQuote , updateQuote, getQuote , deleteQuote }