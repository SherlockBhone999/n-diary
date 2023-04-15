

const { TagModel } = require('./models')


const createTag = (req,res) => {
  const {tag} = req.body
  TagModel.create({tag})
  .then(data=>{
    console.log(data)
  })
}

const getTag = (req, res) => {
  TagModel.find()
  .then(data => {
    res.json(data)
  })
}

const updateTag = (req, res) => {
  const { id , tag } = req.body
  TagModel.findByIdAndUpdate(id, {tag})
}

const deleteTag = (req, res) => {
  const { id } = req.body
  TagModel.findByIdAndDelete(id)
}

module.exports = { createTag, getTag , updateTag , deleteTag }