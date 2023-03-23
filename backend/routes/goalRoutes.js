const express =  require('express');
const router = express.Router();
const {
  getGoals, 
  setGoal, 
  updateGoal, 
  deleteGoal
} = require('../controllers/goalController.js');

// Tanto esta forma

router.route('/').get(getGoals).post(setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);


// Como esta forma, son lo mismo

// router.get('/', getGoals);
// router.post('/', setGoal);
// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);

module.exports = router;