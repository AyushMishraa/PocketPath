const express = require("express");
const {handleHomePage,showExpenses,addExpense,deleteExpense,handleExpense, handleEdit, handleUpdate} = require("../controllers/index");
const router = express.Router();

router.get('/',handleHomePage);
router.get('/expenses',showExpenses);
router.get('/expenses/new',addExpense);
router.delete('/expenses/:id/delete',deleteExpense);
router.post('/expenses/add',handleExpense);
router.get('/expenses/:id/edit',handleEdit);
router.post('/expenses/:id/edit',handleUpdate);

module.exports = router;