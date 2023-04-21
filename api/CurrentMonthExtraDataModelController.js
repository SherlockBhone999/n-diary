
const { CurrentMonthExtraDataModel } = require('./models')

const getCurrentMonthExtraData = (req, res) => {
  CurrentMonthExtraDataModel.find()
  .then(data => res.json(data) )
}

const createCurrentMonthExtraData = (req, res) => {
  console.log('createCurrentMonthExtraData', req.body )
}

const updateCurrentMonthExtraData = (req, res) => {
  const { _id, resolution } = req.body
  CurrentMonthExtraDataModel.findByIdAndUpdate(_id, {resolution } )
  .then(()=>console.log('updateCurrentMonthExtraData', req.body ))
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