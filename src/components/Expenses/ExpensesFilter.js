/* eslint-disable jsx-a11y/label-has-associated-control */
import './ExpensesFilter.css';

function ExpensesFilter(props) {
  const { selected, onChangeFilter } = props;

  const dropDownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropDownChangeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
