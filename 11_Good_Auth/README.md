# Good Auth (Adding Authentication)

## Two-step Process:

1. Get access / permission
2. Send request to protected resource

## Best Approach: Authentication Tokens

1. Create (but not store) "permission" token on server, send token to client
2. Client sends token along with requests to protected resources.

### Example

- Protected Routes (render routes conditionally)
- Persisting Auth status </br>
  Store in localStorage: localStorage is synchronize!</br>
  Auto login: use expireTime & setTimeout, don't forget the clear timeout.
