# "NICE LINKS"
## THE FULLSTACK APPLICATION with **MERN** TECHNOLOGY
----
1. ### Authorisation
2. ### Come up with a nice name for your links
3. ### Get important analytics on them


## Project initialization
1. `npm init` (make package.json)
2. make a backend in the root directory (entry point `app.js`)
3. add `express` and `mongoose` dependencies
4. add `nodemon` and `concurrently` dev.dependencies
5. make script `"start": "node app.js"`
6. make script `"server": "nodemon app.js"`
7. create a server in `app.js` (require `express` and `PORT`)
8. to work with constants, add the `config` library
9. connect to MongoDB using `mongoose` library and `start` function

### *WORKFLOW*
----

1. *Make a backend endpoint*
2. *Make a frontend interface*
3. *Connect interface and endpoint*
4. *Use server data*
----

## Authorisation. SignUp and SignIn.
1. #### *ENDPOINTS*
   1. make route in `routes` directory `auth.routes.js`
   2. make `/api/auth` endpoints `/register` for **SignUp** and `/login` for **SignIn** in this route
   3. handle `POST` requests on both endpoints
   4. make `User` model for DB in `models` directory `User.js`
   5. create query logic in endpoints using `mongoose` methods
   6. use `bcryptjs` to secure user passwords 
   7. use `express-validator` to validate user data
   8. use `jsonwebtoken` for user authorisation
   9. connect route to server using `app.use()` method of `express`
2. #### *INTERFACE*
   1. make `client` directory with `npx create-react-app`
   2. add a `client` script to `package.json` to launch frontend
   3. use `concurrently` library to run frontend and backend at the same time using `dev` script
   4. use `materialize` css for easier styling
       1. install `materialize` to `client` directory
       2. import `materialize` in jsx components
       3. import `materialize` in css files
   5. to create multiple pages use the `react-router-dom` library
       1. create new pages as React components in a `pages` directory
       2. handle routes in `routes.js` from `client` directory
       3. output pages from `routes.js` to `App.js` depending on authorisation
   6. create an `AuthPage.jsx` component for SignUp and SignIn using `materialize` and react controlled input
3. #### *CONNECTION*
   1. use the `fetch` method in the custom `useHTTP()` hook in `hooks` directory to interact with the server
   2. call `request` method from `useHTTP()` in `AuthPage.jsx` to send user data to endpoints
   3. add a `proxy` parameter to the `package.json` of the `client` directory to direct requests from the frontend to the backend
   4. handle errors from the server using `useEffect()` in `AuthPage.jsx`
4. #### *USE*
   1. use the `toast()` method from `materialize` in the custom hook `useMessage()` in the `hooks` directory to display an error message
   2. make logic for SignUp in the `registerHandler()` method and for SignIn in the `loginHandler()` method from `AuthPage.jsx`
   3. handle authorisation in the custom `useAuth()` hook in `hook` directory