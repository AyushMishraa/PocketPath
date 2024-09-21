const Expense = require("../models/index");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
require('dotenv').config();

function handleHomePage (req,res){
   res.render('home');
}

// for add new expenses
async function handleExpense(req,res){
  const {title, amount, category} = req.body;
  const expense = new Expense({title, amount, category})
  await expense.save()
  res.redirect('/expenses')
}

// show all expenses
async function showExpenses(req,res){
  // const expenses = await Expense.find({})
  // res.render('pages/expense',expenses);
  try {
    const expenses = await Expense.find({});  // Fetch all expenses from the database
    res.render('pages/expenses', { expenses });  // Pass the expenses to the EJS template
} catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
}
}

// render form to add expenses
function addExpense(req,res){
  res.render('pages/newExpense');
}

// delete an expense
async function deleteExpense(req,res) {
  // req.params.id will get the id from url 
  try{
    const id = req.params.id;
    await Expense.findByIdAndDelete(id); 
    res.redirect('/expenses');
  }
  catch(err){
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Show the edit form for an expense
async function handleEdit(req, res){
  try {
      const expense = await Expense.findById(req.params.id);  // Get the specific expense by ID
      res.render('pages/edit-expenses', { expense });  // Render the form with current expense data
  } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
  }
};
// Handle the edit form submission and update the expense
async function handleUpdate(req, res){
  try {
      const { title, amount, category } = req.body;
      await Expense.findByIdAndUpdate(req.params.id, { title, amount, category });  // Update the expense
      res.redirect('/expenses');  // Redirect back to the expenses list
  } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
  }
};

// handling signup (registering new user)
async function handleSignup(req,res){
  const userName = req.body.userName;
  const password = req.body.password;
  console.log(userName);
  try{
    const existingUser = await user.findOne({userName});
    if(existingUser){
      return res.status(400).json({message:"user already exists"})
    }

    // creating a newUer and saving in the database
    const newUser = new user({userName, password});
    await newUser.save();

    return res.redirect('/expenses/login')
  }
  catch(err){
       console.log(err);
       res.status(500).json({message: "Error while registering new user"});
  }
}

async function handleLogin(req,res){
   const {userName, password} = req.body;
   try{
    const User = await user.findOne({userName})
    
    if(!User){
      return res.status(400).json({message: "Invalid User"})
    }

    const isMatch = await User.comparePassword(password);
    if(!isMatch){
      return res.status(400).json({message: "Invalid password"})
    }

    const token = jwt.sign({userName: User.userName}, process.env.JWT_SECRET);
    console.log(token);
    res.cookie("token",token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    // console.log(req.cookies.token);
    return res.redirect('/expenses');
   } 
   catch(err){
    console.log(err);
    res.status(500).json({message: "Server error"});
   }
}
function showSignup(req,res){
  res.render('pages/signup');
}
function showLogin(req,res){
  res.render('pages/login');
}

function handleLogout(req, res) {
  res.cookie("token", "", { expires: new Date(0), httpOnly: true });
  res.redirect('/expenses/login');
}


module.exports={
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
    handleLogout,
}