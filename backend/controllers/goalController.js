const asyncHanlder = require('express-async-handler');
const goalModel = require('../model/goalModel.js');

//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHanlder(async (req, res) => {
  const goals = await goalModel.find();
  res.status(200).json(goals);
})

//@desc     Set goal 
//@route    POST /api/goals
//@access   Private
const setGoal = asyncHanlder(async (req, res) => {
  if(!req.body.text){
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await goalModel.create({
    text: req.body.text
  })

  res.status(200).json(goal);
})

//@desc     Update goal
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHanlder(async (req, res) => {
  const goal = await goalModel.findById(req.params.id);

  if(!goal){
    res.status(400);
    throw new Error(`Goal not found`);
  }
  /*
    @param1 id del documento a modificar. 
    @param2 los nuevos datos.
    @param3 opciones, en este caso se especifica que si no existe, se cree. 
  */
  const updatedGoal = await goalModel.findByIdAndUpdate(goal.id, req.body, {new: true})
  
  res.status(200).json(updatedGoal);
})

//@desc     Delete goal
//@route    DELETE /api/goals/:id
//@access   Private
const deleteGoal = asyncHanlder(async (req, res) => {
  const goal = await goalModel.findById(req.params.id);
  if(!goal){
    res.status(400);
    throw new Error(`Goal not found`);
  }

  // Eliminamos el archivo
  await goal.remove();

  // Devolvemos el id, cosa que en el front se pueda 
  // eliminar dicho elemento de la UI (mediante su id)

  res.status(200).json({id: req.params.id});
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}