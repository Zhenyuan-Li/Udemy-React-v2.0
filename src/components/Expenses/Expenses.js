import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {
  const { expenses } = props;
  return (
    <Card className="expenses">
      {expenses.map((ele) => (
        <ExpenseItem title={ele.title} amount={ele.amount} date={ele.date} />
      ))}
    </Card>
  );
}

export default Expenses;
