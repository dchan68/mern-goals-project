const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
//instead of doing the bottom 2 lines, can do the one above instead
// router.get('/', getGoals)
// router.post('/', setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)
//instead of doing the bottom 2 lines, can do the one above instead
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

module.exports = router