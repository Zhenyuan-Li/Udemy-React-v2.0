# Easy Testing (Unit Test)

## Tools needed

### Jest

For running pur tests and asserting results

### React Testing Library

"Simulating" (rendering) the React app components

## Writing Tests - The Three "A"s

- Arrange: Set up the test data, test condition and test environment
- Act: Run logic that should be tested (e.g. execute function)
- Assert: Compare execution results with expected results.

## Example:

- test suites: describe(); tests: test()
- Basic click and change testing state: 1) if the button is not clicked, whether text is there 2) if the button is clicked, whether text is changed. 3) if the button is clicked, the good to see you is invisible. Cover the most scenario as possible
- getByText(): will throw a error if the element not found -> fail the tests. use queryByText() instead, it will return null if not found.
- test async routes: use finAllByRole instead of getAllByRole when involve async function
- Mocks: we don't even send the request (simulating use jest.fn()), or send to a fake server.
