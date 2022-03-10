const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//Desc:    Get goals
//route:   GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.json(goals)
})

//Desc:    Set goals
//route:   POST /api/goals/
const setGoal = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.json(goal)
})

//Desc:    Update goal
//route:   PUT /api/goals/:id
const updateGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    res.json(updatedGoal)
})

//Desc:    Delete goal
//route:   DELETE /api/goals/:id  
const deleteGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()
    res.json({ id: req.params.id  })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}