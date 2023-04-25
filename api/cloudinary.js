
const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: "ddzwwmlkp",
  api_key: "157784288364325",
  api_secret: "lcvRJZtizYJjaXUhwWO_dyoKwzI"
});



const uploadImgToCloudinary = async (image64, res ) => {
  await cloudinary.uploader.upload(image64, {
    folder : "diaryApp"
    //public_id : name
  })
  .then(data => {
    console.log(data.secure_url)
    res.json(data.secure_url)
  }).catch(err => {
    console.log(err)
  })
}

const upload = async (image64) => {
  await cloudinary.uploader.upload(image64, {
    folder : "diaryApp"
    //public_id : name
  })
  .then(data => {
    console.log(data.secure_url)
  }).catch(err => {
    console.log(err)
  })
}


const deleteImgInCloudinary = async = (public_id) => {
    cloudinary.uploader.destroy(public_id, function(err,result) { 
      console.log(result)
      console.log(err)
    });
}


module.exports = {uploadImgToCloudinary , deleteImgInCloudinary }

// Upload
/*
const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"})

res.then((data) => {
  console.log(data);
  console.log(data.secure_url);
}).catch((err) => {
  console.log(err);
});


// Generate 
const url = cloudinary.url("olympic_flag", {
  width: 100,
  height: 150,
  Crop: 'fill'
});



// The output url
console.log(url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag

*/