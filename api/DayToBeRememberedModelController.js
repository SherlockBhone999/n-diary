

const { DayToBeRememberedModel } = require('./models')

const createDayToBeRemembered = (req, res) => {
  const { day, reason , delta_data } = req.body
  DayToBeRememberedModel.create({day, reason, delta_data })
  .then(data => console.log('created', data))
}


const getDayToBeRemembered = (req, res) => {
  DayToBeRememberedModel.find()
  .then(data => res.json(data))
}


const updateDayToBeRemembered = (req, res) => {
  const {day, reason, delta_data, _id } = req.body
  DayToBeRememberedModel.findByIdAndUpdate(_id, {day, reason, delta_data })
  .then(()=>console.log('updated'))
}


const deleteDayToBeRemembered = (req, res) => {
  const {_id} = req.body
  DayToBeRememberedModel.findByIdAndDelete(_id)
  .then(()=>console.log('deleted'))
}

module.exports = { createDayToBeRemembered, getDayToBeRemembered , updateDayToBeRemembered , deleteDayToBeRemembered }