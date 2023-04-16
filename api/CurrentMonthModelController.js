

const { CurrentMonthModel } = require('./models')



const  updateCurrentMonth = (req, res) => {
  const {_id, month , resolution, days } = req.body
  CurrentMonthModel.findByIdAndUpdate(_id, {month, resolution, days })
  .then(()=>console.log('updated current month'))
}

const getCurrentMonthFiltered = (req, res) => {
  CurrentMonthModel.findOne({},{ days : { delta_data : 0 , tags : 0, thoughts : 0 ,included_in_days_of_the_year: 0 ,reason_to_be_included: 0 }  })
  .then(data=>{
    res.json(data)
  }) 
}

const getADayFullFromCurrentMonth = (req, res) => {
  const day = "16.4.2023"
  CurrentMonthModel.find({},{ days : { day : day , delta_data : 1} })
  .then(data => {
    console.log('test')
    console.log(data[0].days)
    })
}

const getCurrentMonthFull = (req, res) => {
  CurrentMonthModel.findOne()
  .then(data=>{
    res.json(data)
  }) 
}


module.exports = { updateCurrentMonth, getCurrentMonthFiltered , getADayFullFromCurrentMonth , getCurrentMonthFull }