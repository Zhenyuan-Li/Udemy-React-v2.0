import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState('2022');

  // controlled component
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses.map((ele) => (
          <ExpenseItem
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
            key={ele.id}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
