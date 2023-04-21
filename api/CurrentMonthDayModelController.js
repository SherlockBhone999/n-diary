

const { CurrentMonthDayModel } = require('./models')

const getCurrentMonthDaysMin = (req,res) => {
  CurrentMonthDayModel.find({},{day : 1})
  .then(data => res.json(data))
}

const getCurrentMonthDay = (req, res) => {
  const { _id } = req.body
  CurrentMonthDayModel.findOne({_id : _id })
  .then(data => res.json(data))
}

const getAllCurrentMonthDaysFull = (req, res ) => {
  CurrentMonthDayModel.find()
  .then(data => res.json(data))
}

const createCurrentMonthDay = (req,res) => {
  const { day , thoughts, tags,  included_in_days_of_the_year ,reason_to_be_included, delta_data } = req.body
  CurrentMonthDayModel.create({ day, thoughts , tags , included_in_days_of_the_year , reason_to_be_included , delta_data })
  .then(data => console.log('createdCurrentMonthDay', data ))
}

const updateCurrentMonthDay = (req,res) => {
  const {_id, day , thoughts, tags,  included_in_days_of_the_year ,reason_to_be_included, delta_data } = req.body
  CurrentMonthDayModel.findByIdAndUpdate(_id, {day, thoughts, tags, included_in_days_of_the_year, reason_to_be_included, delta_data })
  .then(() => console.log('updateCurrentMonthDay', req.body ))
}

const deleteCurrentMonthDay = (req, res) => {
  const { _id } = req.body
  CurrentMonthDayModel.findByIdAndDelete(_id)
  .then(()=>console.log('deletedCurrentMonthDay', _id ))
}


module.exports = {
  getCurrentMonthDaysMin ,
  getCurrentMonthDay,
  createCurrentMonthDay,
  updateCurrentMonthDay,
  deleteCurrentMonthDay,
  getAllCurrentMonthDaysFull
}