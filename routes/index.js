const express = require("express");
const {handleHomePage,showExpenses,addExpense,deleteExpense,handleExpense} = require("../controllers/index");
const router = express.Router();

router.get('/',handleHomePage);
router.get('/expenses',showExpenses);
router.get('/expenses/new',addExpense);
router.delete('/expenses/:id/delete',deleteExpense);
router.post('/expenses/add',handleExpense);

module.exports = router;