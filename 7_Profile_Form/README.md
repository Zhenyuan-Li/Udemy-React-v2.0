# Profile Form (Form & User Input)

## What to validate

### Case 1 When form is submitted

- Allows the user to enter a valid value before warning him.
- Avoid unnecessary warnings but maybe present feedback "too late"

### Case 2 When a input is losing focus

- Allows the user to enter a valid value before warning him.
- Very useful for untouched forms

### Case 3 On every keystroke

- Warns user before he had a chance of entering valid values
- If applied only on invalid inputs, has the potential of providing more direct feedback.

## Case 1

### Handling Input value

Two ways **SimpleInput.js L11-24** useRef() & useState()

## Easy Validation and drawback

Set initial isValid state to true might involved unexpected call when useEffect(), also the naming is vague So combine it with untouched state.

## Case 2 & 3

### Improvement needed from Case 1

- The error only shows after submit: once add something and clean the input, the error disappear, which shouldn't.
- Solution: use blur handler with change handler(key stroke check).
- In a larger form, useEffect() to check all inputs. (comment out line)

### Issues:

- Too much repeat logic, and make the component not neat. Could extract into a separate UI component, and manage validation individually. Or custom hook.
- The finished code space by now is immigrate in **SimpleInput-v1.js**

## Customized Hook for user input

- Keep in mind: the hook should be generalized! It must could adapted into every input.
- Receive validator function.
- The BasicForm.js is not implemented, but the method is the same as in SimpleInput.js

### Formik
