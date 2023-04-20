

const { DayToBeRememberedModel } = require('./models')

const createDayToBeRemembered = (req, res) => {
  const { day, reason , delta_data } = req.body
  DayToBeRememberedModel.create({day, reason, delta_data })
  .then(data => console.log('createDayToBeRemembered', data))
}


const getADayToBeRememberedFull = (req, res) => {
  const { _id } = req.body
  DayToBeRememberedModel.findOne({_id : _id })
  .then(data =>{
    res.json(data)
    console.log('getDayToBeRemembered one', data )
  } )
}


const updateDayToBeRemembered = (req, res) => {
  const {day, reason, delta_data, _id } = req.body
  DayToBeRememberedModel.findByIdAndUpdate(_id, {day, reason, delta_data })
  .then(()=>{
    console.log('updated' , req.body )
    res.json('updated')
  })
}


const deleteDayToBeRemembered = (req, res) => {
  const {_id} = req.body
  DayToBeRememberedModel.findByIdAndDelete(_id)
  .then(()=>console.log('deleted'))
}

const getDaysToBeRememberedMin = (req,res) => {
  DayToBeRememberedModel.find({},{day : 1, reason : 1 })
  .then(data =>{
    res.json(data)
  } )
}


module.exports = { createDayToBeRemembered, getDaysToBeRememberedMin , updateDayToBeRemembered , deleteDayToBeRemembered , getADayToBeRememberedFull }