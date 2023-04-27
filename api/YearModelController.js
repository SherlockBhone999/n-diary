

const { YearModel } = require('./models')
const { uploadImgToCloudinaryAndUpdateYear, deleteImgInCloudinary } = require('./cloudinary')

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
  const { _id, year, days_of_the_year , months, comment , profile_img_link } = req.body

  YearModel.findByIdAndUpdate(_id, { year, days_of_the_year, months , comment, profile_img_link })
  .then(()=>{ 
    console.log('updatedYear', req.body.profile_img_link )
    res.json('haha')
  })

}


const deleteYear = (req, res) => {
  console.log('  deleteYear  ')
}

const updatePartOfYear = (req, res) => {
  const { newImg, cloudinary_public_id,  _id, year, comment, 
     months, days_of_the_year , profile_img_link } = req.body
     //const public_id = 'diaryApp/tn1cfuyrzoo8lfmzgjig'
     //deleteImgInCloudinary(public_id)
     
     if(newImg === ''){
        YearModel.findByIdAndUpdate(_id, { year, days_of_the_year, months , comment, profile_img_link })
        .then(()=> console.log('updatedYear', req.body ))
     }else{
       console.log('delete img', cloudinary_public_id )
       deleteImgInCloudinary(cloudinary_public_id)
       
       uploadImgToCloudinaryAndUpdateYear(req.body, res)
     }
}


module.exports = { createYear , updateYear, getYear , updatePartOfYear }