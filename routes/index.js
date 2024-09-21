const express = require("express");

const {
       handleHomePage,
       showExpenses,
       addExpense,
       deleteExpense,
       handleExpense, 
       handleEdit, 
       handleUpdate, 
       handleSignup, 
       handleLogin, 
       showSignup, 
       showLogin, 
       handleLogout
    } = require("../controllers/index");

const authenticateToken = require("../middlewares/auth")
const router = express.Router();

router.get('/',handleHomePage);
router.get('/expenses', authenticateToken, showExpenses);
router.get('/expenses/new', authenticateToken, addExpense);
router.delete('/expenses/:id/delete', authenticateToken, deleteExpense);
router.post('/expenses/add', authenticateToken, handleExpense);
router.get('/expenses/:id/edit', authenticateToken, handleEdit);
router.post('/expenses/:id/edit', authenticateToken, handleUpdate);
router.get('/expenses/signup',showSignup);
router.post('/expenses/signup',handleSignup);
router.get('/expenses/login',showLogin);
router.post('/expenses/login',handleLogin)
router.get('/expenses/logout',handleLogout);

module.exports = router;