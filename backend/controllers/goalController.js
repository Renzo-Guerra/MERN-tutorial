const asyncHanlder = require('express-async-handler');

//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHanlder(async (req, res) => {
  res.status(200).json({message: "get goals"})
})

//@desc     Set goal
//@route    POST /api/goals
//@access   Private
const setGoal = asyncHanlder(async (req, res) => {
  if(!req.body.message){
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({message: req.body.message});
})

//@desc     Update goal
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHanlder(async (req, res) => {
  res.status(200).json({message: `goal ${req.params.id} updated`})
})

//@desc     Delete goal
//@route    DELETE /api/goals/:id
//@access   Private
const deleteGoal = asyncHanlder(async (req, res) => {
  res.status(200).json({message: `goal ${req.params.id} deleted`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}