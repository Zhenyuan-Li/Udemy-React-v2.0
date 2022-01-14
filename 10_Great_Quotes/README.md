# Great Quotes (React Router)

## Multi-Page SPA with React Router (Simple showcase)

- The package name should be react-router-dom; v5 and v6 are different.
- Simple usage is the same: Register BrowserRouter at Index.js, and use the route at the specific place we want (In this case App.js)
- Use traditional **a** tag with **href** props is not working, because the browser default, it will send a request, and the component is not single page application. </br>
  Solution: using **Link** tag with **to** props from package
- Highlight Link (style a little bit) -> use the **NavLink** tag. It will add active classes to link, which is handful for define hover stage and so on.
- Dynamic Router with params useParams(). See example on **ProductDetail.js, Product.js, App.js**
  - Use Switch and exact to config the routes instead of just expended on original routes. If not effect: Two component render in one page, Product & ProductDetail.</br>
    Only use Switch: at version 5, if the link match, it will stop immediately, hence the below routes would not be render. Solution: change the order, or use exact props.
- Nested Routes **Welcome.js**
- Redirect Routes: redirect to default route **App.js**</br>
  **All of above are immigrated into product folder**

## Practical Example: Great Quotes

- Route to='\*' at the end of Switch wrapper to display a Not found page **App.js**
- Programmatic (Imperative) Navigation: useHistory() **NewQuote.js** Push: can go back with back button. Replace can't
- User accidentally leave the page: Using Prompt Comp. and onFocus of the form. **QuoteForm.js**
- Conditional Rendering using Query Parameters: optional. Sorting param. useLocation() to get the related information about current page. **QuoteList.js**
- useRouteMatch() to avoid typo. More flexible code. **QuoteDetail.js**
