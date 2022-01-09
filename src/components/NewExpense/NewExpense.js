import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const { onAddExpense } = props;
  const [isEditing, setIsEditing] = useState(false);

  // handle date bottom to up pattern (child to parent)
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="submit" onClick={startEditingHandler}>
          Add New Expense.
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancelExpenseData={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
