function MyParagraph(props) {
  const { children } = props;
  // This will also run when states in App changes
  console.log('MyParagraph RUNNING');

  return <p>{children}</p>;
}

export default MyParagraph;
