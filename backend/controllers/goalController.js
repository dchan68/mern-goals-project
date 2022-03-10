const asyncHandler = require('asyncHandler')

//Desc:    Get goals
//route:   GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    res.json({ "message": "Get Goals"})
})

//Desc:    Set goals
//route:   POST /api/goals/
const setGoal = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.json({ "message": "Set Goal"})
})

//Desc:    Update goal
//route:   PUT /api/goals/:id
const updateGoal = asyncHandler (async (req, res) => {
    res.json({ "message": `Update Goal ${req.params.id}`})
})

//Desc:    Delete goal
//route:   DELETE /api/goals/:id  
const deleteGoal = asyncHandler (async (req, res) => {
    res.json({ "message": `Delete Goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}