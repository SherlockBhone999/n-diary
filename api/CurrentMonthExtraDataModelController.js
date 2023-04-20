
const { CurrentMonthExtraDataModel } = require('./models')

const getCurrentMonthExtraData = (req, res) => {
  console.log('getCurrentMonthExtraData')
}

const createCurrentMonthExtraData = (req, res) => {
  console.log('createCurrentMonthExtraData', req.body )
}

const updateCurrentMonthExtraData = (req, res) => {
  console.log('updateCurrentMonthExtraData', req.body )
}

const deleteCurrentMonthExtraData = (req, res) => {
  console.log('deleteCurrentMonthExtraData', req.body)
}

module.exports = {
  getCurrentMonthExtraData,
  createCurrentMonthExtraData,
  updateCurrentMonthExtraData,
  deleteCurrentMonthExtraData
}