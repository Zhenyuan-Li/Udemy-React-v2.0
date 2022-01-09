import { useState } from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState('2022');

  // controlled component
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  // Without the key: performance is bad, also bugs exists when involve state
  // render the additional element at the end of div, and
  // update the content inside of every div to match the array again.
  // bugs: first element might be overwritten.
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
