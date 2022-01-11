# Star War Movies (Sending HTTP requests)

## Fairly Familiar Topic

### Things to pay attention on:

- When sending request in useEffect(), to avoid the infinite loop, wrap the request function in useCallback() </br>
  **App.js L12-39, 57-59**
- js object to JSON(in request body): JSON.stringify(); On the contrary: response.json()
- isLoading & error normally are not globalized state. Using conditional rendering to handle each cases:</br>
  state && Comp.; Or let abc = default, use if to change the content of abc.
