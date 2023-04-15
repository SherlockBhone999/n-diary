
const { Router} = require('express')
const router = Router()
const { getCurrentMonth , updateCurrentMonth } = require('./CurrentMonthModelController')
const { createDayToBeRemembered, getDayToBeRemembered , updateDayToBeRemembered , deleteDayToBeRemembered } = require('./DayToBeRememberedModelController')
const { createQuote , updateQuote, getQuote , deleteQuote } = require('./QuoteModelController')
const { createTag, getTag , updateTag , deleteTag } = require('./TagModelController')
const { createYear , updateYear, getYear , deleteYear } = require('./YearModelController')



router.get('/get_current_month', getCurrentMonth )
router.post('/update_current_month', updateCurrentMonth )

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


module.exports = router