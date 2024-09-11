const Expense = require("../models/index")

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

module.exports={
    handleHomePage,
    showExpenses,
    addExpense,
    deleteExpense,
    handleExpense,
}