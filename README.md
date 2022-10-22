# "NICE LINKS"
## THE FULLSTACK APPLICATION with **MERN** TECHNOLOGY
----
### **Authorisation**
### **Come up with nice titles for your links**
### **Get important analytics on them**

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
   * make route in `routes` directory `auth.routes.js`
   * make `/api/auth` endpoints `/register` for **SignUp** and `/login` for **SignIn** in this route
   * handle `POST` requests on both endpoints
   * make `User` model for DB in `models` directory `User.js`
   * create query logic in endpoints using `mongoose` methods
   * use `bcryptjs` to secure user passwords 
   * use `express-validator` to validate user data
   * use `jsonwebtoken` for user authorisation
   * connect route to server using `app.use()` method of `express`
2. #### *INTERFACE*
   * make `client` directory with `npx create-react-app`
   * add a `client` script to `package.json` to launch frontend
   * use `concurrently` library to run frontend and backend at the same time using `dev` script
   * use `materialize` css for easier styling
       - install `materialize` to `client` directory
       - import `materialize` in jsx components
       - import `materialize` in css files
   * to create multiple pages use the `react-router-dom` library
       - create new pages as React components in a `pages` directory
       - handle routes in `routes.js` from `client` directory
       - output pages from `routes.js` to `App.js` depending on authorisation
   * create an `AuthPage.jsx` component for SignUp and SignIn using `materialize` and react controlled input
3. #### *CONNECTION*
   * use the `fetch` method in the custom `useHTTP()` hook in `hooks` directory to interact with the server
   * call `request` method from `useHTTP()` in `AuthPage.jsx` to send user data to endpoints
   * add a `proxy` parameter to the `package.json` of the `client` directory to direct requests from the frontend to the backend
   * handle errors from the server using `useEffect()` in `AuthPage.jsx`
4. #### *USE*
   * use the `toast()` method from `materialize` in the custom hook `useMessage()` in the `hooks` directory to display an error message
   * make logic for SignUp in the `registerHandler()` method and for SignIn in the `loginHandler()` method from `AuthPage.jsx`
   * handle authorisation in the custom `useAuth()` hook in `hook` directory
   * use `@redux/toolkit` and `react-redux` to create a dataflow in this application
   Xy!-vKFyur7H3nn

