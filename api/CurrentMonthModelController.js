

const { CurrentMonthModel } = require('./models')

const current_month_id = "64366bdbd49a70e0d1699ea4"


const  updateCurrentMonth = (req, res) => {
  const {_id, month , resolution, days } = req.body
  CurrentMonthModel.findByIdAndUpdate(_id, {month, resolution, days })
  .then(()=>console.log('updated current month'))
}

const getCurrentMonth = (req, res) => {
  CurrentMonthModel.findOne({_id : current_month_id })
  .then(data=>{
    res.json(data)
  })
}


module.exports = { updateCurrentMonth, getCurrentMonth }