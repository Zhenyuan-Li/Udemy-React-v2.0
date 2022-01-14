import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) =>
  quotes.sort((quoteA, quoteB) =>
    ascending
      ? quoteA.id > quoteB.id
        ? 1
        : -1
      : quoteA.id < quoteB.id
      ? 1
      : -1
  );

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  // get the params in a elegant way
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // optional, but more readable
    history.push({
      pathname: location.pathname,
      search: `sort=${isSortingAscending ? 'desc' : 'asc'}`,
    });
    // history.push(
    //   `${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`
    // );
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
