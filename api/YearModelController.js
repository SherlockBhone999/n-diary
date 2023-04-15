

const { YearModel } = require('./models')


const createYear = (req, res) => {
  console.log('    ')
}

const getYear = (req, res) => {
  console.log('  getYear  ')
}


const  updateYear = (req, res) => {
  console.log('  updateYear  ')
}


const deleteYear = (req, res) => {
  console.log('  deleteYear  ')
}


module.exports = { createYear , updateYear, getYear , deleteYear }