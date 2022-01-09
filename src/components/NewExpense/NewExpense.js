import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const { onAddExpense } = props;

  // handle date bottom to up pattern (child to parent)
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
