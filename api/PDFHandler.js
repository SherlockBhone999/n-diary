const multer = require('multer')
const fs = require('fs')
const PDFMerger = require('pdf-merger-js');
const {uploadFile} = require('./gdrive')


const storage = multer.diskStorage({
  destination : (req, file, cb) => {
    cb(null, 'bookStation')
  },
  
  filename : (req, file, cb) => {
    cb(null, Date.now() + '.pdf' )
  }
})

var savePdfInBackend = multer({storage : storage})

const respondAfterSavingPdf = (req, res) => {
  console.log('pdf saved in backend')
  const arr = fs.readdirSync('bookStation')
  res.json(arr.length)
}
/////

//////////
var merger = new PDFMerger();


const mergePdfs = (req,res) => {
  const files = fs.readdirSync('bookStation')
  console.log(files);
  
(async () => {
  if(files[0]) await merger.add(`bookStation/${files[0]}`);
  if(files[1]) await merger.add(`bookStation/${files[1]}`);
  if(files[2]) await merger.add(`bookStation/${files[2]}`);
  if(files[3]) await merger.add(`bookStation/${files[3]}`);
  if(files[4]) await merger.add(`bookStation/${files[4]}`);
  if(files[5]) await merger.add(`bookStation/${files[5]}`);
  if(files[6]) await merger.add(`bookStation/${files[6]}`);
  if(files[7]) await merger.add(`bookStation/${files[7]}`);
  if(files[8]) await merger.add(`bookStation/${files[8]}`);
  if(files[9]) await merger.add(`bookStation/${files[9]}`);
  if(files[10]) await merger.add(`bookStation/${files[10]}`);
  if(files[11]) await merger.add(`bookStation/${files[11]}`);
  if(files[12]) await merger.add(`bookStation/${files[12]}`);
  if(files[13]) await merger.add(`bookStation/${files[13]}`);
  if(files[14]) await merger.add(`bookStation/${files[14]}`);
  if(files[15]) await merger.add(`bookStation/${files[15]}`);
  if(files[16]) await merger.add(`bookStation/${files[16]}`);
  if(files[17]) await merger.add(`bookStation/${files[17]}`);
  if(files[18]) await merger.add(`bookStation/${files[18]}`);
  if(files[19]) await merger.add(`bookStation/${files[19]}`);
  if(files[20]) await merger.add(`bookStation/${files[20]}`);
  if(files[21]) await merger.add(`bookStation/${files[21]}`);
  if(files[22]) await merger.add(`bookStation/${files[22]}`);
  if(files[23]) await merger.add(`bookStation/${files[23]}`);
  if(files[24]) await merger.add(`bookStation/${files[24]}`);
  if(files[25]) await merger.add(`bookStation/${files[25]}`);
  if(files[26]) await merger.add(`bookStation/${files[26]}`);
  if(files[27]) await merger.add(`bookStation/${files[27]}`);
  if(files[28]) await merger.add(`bookStation/${files[28]}`);
  if(files[29]) await merger.add(`bookStation/${files[29]}`);
  if(files[30]) await merger.add(`bookStation/${files[30]}`);
  if(files[31]) await merger.add(`bookStation/${files[31]}`);
  if(files[32]) await merger.add(`bookStation/${files[32]}`);
  if(files[33]) await merger.add(`bookStation/${files[33]}`);
  if(files[34]) await merger.add(`bookStation/${files[34]}`);
  if(files[35]) await merger.add(`bookStation/${files[35]}`);
  await merger.save('bookStation/merged.pdf');
  console.log('merged', files.length )
})();
  res.json('pdfs_merged')
}
///////
 /* 
(async () => {
  await merger.add('bookStation/result.pdf');
  await merger.add('bookStation/result2.pdf');
  await merger.save('bookStation/merged.pdf');
  console.log('merged')
})();
*/




////////
const clearBookStation = (req,res) => {
  fs.readdir('bookStation', (err,files)=>{
    if(err) console.log(err)
    files.forEach(file =>{
      fs.unlink(`bookStation/${file}`, (err2)=>{
        console.log('deleted', file)
      })
    })
  })
  res.json('deleted all files')
}
/////////



////
const uploadPdfTogdrive = (req, res) => {
  uploadFile('mymonth', 'merged.pdf')
  .then(data => { 
    console.log('uploaded to gdrive', data ) 
    const link = `https://drive.google.com/file/d/${data}/view?usp=share_link`
    res.json(link)
  })
}

module.exports ={ savePdfInBackend , respondAfterSavingPdf , mergePdfs , clearBookStation , uploadPdfTogdrive }