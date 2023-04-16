
const { Router} = require('express')
const router = Router()
const { getCurrentMonthFiltered , updateCurrentMonth, getADayFullFromCurrentMonth,getCurrentMonthFull } = require('./CurrentMonthModelController')
const { createDayToBeRemembered, getDayToBeRemembered , updateDayToBeRemembered , deleteDayToBeRemembered } = require('./DayToBeRememberedModelController')
const { createQuote , updateQuote, getQuote , deleteQuote } = require('./QuoteModelController')
const { createTag, getTag , updateTag , deleteTag } = require('./TagModelController')
const { createYear , updateYear, getYear , deleteYear } = require('./YearModelController')
const { savePdfInBackend , respondAfterSavingPdf, mergePdfs , clearBookStation,uploadPdfTogdrive } = require('./PDFHandler')




router.get('/get_current_month_filtered', getCurrentMonthFiltered )
router.post('/update_current_month', updateCurrentMonth )
//router.post('/get_day_full_from_current_month', getADayFullFromCurrentMonth )
router.get('/get_day_full_from_current_month', getADayFullFromCurrentMonth )
router.get('/get_current_month_full', getCurrentMonthFull )

router.post('/create_day_to_be_remembered', createDayToBeRemembered )
router.get('/get_day_to_be_remembered', getDayToBeRemembered  )
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
router.post('/delete_year', deleteYear  )

router.post('/save_pdf_in_backend', savePdfInBackend.single('blob'),respondAfterSavingPdf )
router.get('/merge_pdfs', mergePdfs )
router.get('/delete_pdfs', clearBookStation )
router.get('/upload_pdf_to_gdrive',uploadPdfTogdrive)

module.exports = router