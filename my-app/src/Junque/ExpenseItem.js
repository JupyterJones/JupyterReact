import "./ExpenseItem.css";
function ExpenseItem() {
   const expenseDate = new Date(2021, 0, 15);
   const expenseType = "Food";
   const expenseTotal = 245.45;

   return (
       
   <div className="paper">
   <div className="pattern">
     <div className="content">
       <div>{expenseDate.toISOString()}</div>
       <div>{expenseType}</div>
       <div>{expenseTotal}</div>
       <p>........</p>
       Jack Northrup 
     </div>
   </div>
 </div>
   )};

export default ExpenseItem;