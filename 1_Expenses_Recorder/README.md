# Demo 1: Expense Recorder
## Main technique
1. Construct functional based component
2. Basic Usage of Component UI (Card)
3. First hook: useState()
4. Transfer data from parent to children (top to bottom): props
5. Transfer data from children to parent (bottom to top): create handler in parent, modify and update data in child.
6. Render a list of component (Array.map())
7. Conditional Rendering
## Notes
- **Card.js**: <br />Default variable in props: children, className
- **ExpenseForm.js**: <br />
Previous stage in useState() - when updated state depend on previous screenshot, normally happens on object or array type state.<br />
Two-way binding (input)
- **NewExpense.js & ExpenseForm.js**: <br />
Bottom to top transfer example (also in **ExpensesFilter.js & Expenses.js**)- 5 <br />
Conditional Rendering (simplify ternary expression using &&) - 7
- **ExpenseList.js**: <br />
Conditional Rendering (early return) - 7 <br />
List of Component example (also in **Chart.js**) - 8
- **Expenses.js**: <br />
The necessity of using key when rendering the list (performance & bugs).
