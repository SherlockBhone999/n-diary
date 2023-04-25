
const { Router} = require('express')
const router = Router()

const { createDayToBeRemembered, 
getDaysToBeRememberedMin , 
updateDayToBeRemembered , 
deleteDayToBeRemembered , 
getADayToBeRememberedFull } = require('./DayToBeRememberedModelController')

const { createQuote , 
updateQuote, 
getQuote , 
deleteQuote } = require('./QuoteModelController')

const { createTag, getTag , updateTag , deleteTag } = require('./TagModelController')
const { createYear , updateYear, getYear } = require('./YearModelController')

const { savePdfInBackend , 
respondAfterSavingPdf, 
mergePdfs , 
clearBookStation,
uploadPdfTogdrive } = require('./PDFHandler')

const { getCurrentMonthDaysMin ,
getCurrentMonthDay,
createCurrentMonthDay,
updateCurrentMonthDay,
deleteCurrentMonthDay,
getAllCurrentMonthDaysFull  } = require('./CurrentMonthDayModelController')

const { getCurrentMonthExtraData, 
updateCurrentMonthExtraData } = require('./CurrentMonthExtraDataModelController')

const {uploadImgToCloudinary , deleteImgInCloudinary } = require('./cloudinary')


router.post('/create_day_to_be_remembered', createDayToBeRemembered )
router.get('/get_days_to_be_remembered_min', getDaysToBeRememberedMin  )
router.post('/get_a_day_to_be_remembered_full',  getADayToBeRememberedFull )
router.post('/update_day_to_be_remembered', updateDayToBeRemembered  )
router.post('/delete_day_to_be_remembered',  deleteDayToBeRemembered  )

router.post('/create_quote', createQuote  )
router.get('/get_quote', getQuote )
router.post('/update_quote', updateQuote )
router.post('/delete_quote', deleteQuote )

router.post('/create_tag', createTag )
router.get('/get_tag',  getTag )
router.post('/update_tag', updateTag  )
router.post('/delete_tag',  deleteTag )

router.post('/create_year', createYear )
router.get('/get_year', getYear  )
router.post('/update_year', updateYear  )

router.post('/save_pdf_in_backend', savePdfInBackend.single('blob'),respondAfterSavingPdf )
router.get('/merge_pdfs', mergePdfs )
router.get('/delete_pdfs', clearBookStation )
router.get('/upload_pdf_to_gdrive',uploadPdfTogdrive)

router.post('/get_current_month_day_one', getCurrentMonthDay )
router.get('/get_current_month_days_min' , getCurrentMonthDaysMin )
router.post('/create_current_month_day', createCurrentMonthDay )
router.post('/update_current_month_day', updateCurrentMonthDay )
router.post('/delete_current_month_day', deleteCurrentMonthDay )
router.get('/get_all_current_month_days_full', getAllCurrentMonthDaysFull )

router.get('/get_current_month_extra_data', getCurrentMonthExtraData )
router.post('/update_current_month_extra_data', updateCurrentMonthExtraData )


router.post('/upload_img_to_cloudinary', (req,res)=>{
  const {img} = req.body
  uploadImgToCloudinary(img, res)
})

router.post('/delete_img_in_cloudinary', (req, res)=>{
     const public_id = 'diaryApp/tn1cfuyrzoo8lfmzgjig'
     deleteImgInCloudinary(public_id)
})

module.exports = router