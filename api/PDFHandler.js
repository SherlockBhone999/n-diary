const multer = require('multer')
const fs = require('fs')
const PDFMerger = require('pdf-merger-js');

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



var merger = new PDFMerger();

const mergePdfs = (req,res) => {
  const files = fs.readdirSync('bookStation')
  console.log(files);
  
(async () => {
  await merger.add(`bookStation/${files[0]}`);
  await merger.add(`bookStation/${files[1]}`);
  await merger.add(`bookStation/${files[2]}`);
  await merger.save('bookStation/merged.pdf');
  console.log('merged', files.length )
})();
  
 /* 
(async () => {
  await merger.add('bookStation/result.pdf');
  await merger.add('bookStation/result2.pdf');
  await merger.save('bookStation/merged.pdf');
  console.log('merged')
})();
*/
}

module.exports ={ savePdfInBackend , respondAfterSavingPdf , mergePdfs}