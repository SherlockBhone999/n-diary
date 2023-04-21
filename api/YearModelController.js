

const { YearModel } = require('./models')


const createYear = (req, res) => {
  const { year, days_of_the_year , months } = req.body
  YearModel.create({year, days_of_the_year, months})
  .then(data => {
    console.log('created year', data )
  })
}

const getYear = (req, res) => {
  YearModel.find()
  .then(data => res.json(data))
}


const  updateYear = (req, res) => {
  const { _id, year, days_of_the_year , months } = req.body
  YearModel.findByIdAndUpdate(_id, { year, days_of_the_year, months })
  .then(()=>'updatedYear')
}


const deleteYear = (req, res) => {
  console.log('  deleteYear  ')
}


module.exports = { createYear , updateYear, getYear , deleteYear }