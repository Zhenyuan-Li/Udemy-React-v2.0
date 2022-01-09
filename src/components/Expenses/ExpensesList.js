import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
  const { items } = props;
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((ele) => (
        <ExpenseItem
          title={ele.title}
          amount={ele.amount}
          date={ele.date}
          key={ele.id}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
