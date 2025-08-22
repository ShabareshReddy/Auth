UserAuthentication Management ---->>

## Flow of the Web Application

- **Signup Page**  
  - User enters the credentials  
  - If valid → "User created successfully" → Navigate to Login page
  - if not valid → "user data required"

- **Login Page**  
  - User logs in with email & password  
  - If valid → JWT token generated & stored in localStorage → Navigate to Profile page  

- **Profile Page**  
  - User can **update profile** or **delete account**  
  - If deleted → Redirect back to Signup page  


 ## 🛠️ Tech Stack
### **Frontend**
- [React](https://reactjs.org/) – UI library for building dynamic interfaces  
- [Vite](https://vitejs.dev/) – Fast build tool for modern web apps  
- [Axios](https://axios-http.com/) – For API requests  
- [React Router DOM](https://reactrouter.com/) – Client-side routing  

### **Backend**
- [Node.js](https://nodejs.org/) – JavaScript runtime environment  
- [Express.js](https://expressjs.com/) – Web framework for building REST APIs  

### **Database**
- [MongoDB](https://www.mongodb.com/) – NoSQL database for storing user data  

### **Other Tools**
- [Cors](https://www.npmjs.com/package/cors) – Middleware for handling cross-origin requests  
- [Dotenv](https://www.npmjs.com/package/dotenv) – Environment variable management  
- [Validator](https://www.npmjs.com/package/validator) – For input validation  


 ## BACKEND SETUP:--

-->Initialize the backend with 
* npm inti -y
It creates the backend config with package.json
-->Initiazes the node_modules with express 
* npm install express

-->Initializes the another libraries 
* npm i dotenv   -->  It is for the environment secret purpose
* npm i mongoose -->  It is for the database user data management
* npm i bcrypt   -->   It is for  password hashing
* npm i jsonwebtoken --> It is for the verify th user every time with this jsonwebtoken
* npm i nodemon  -->   It is library which we can change the code it is automaically changes without saving the files

-->Server starts using 
* npm run dev
-->initializes the skeleton of the userRouter
-->Connected the mongodb String to the mongoose and connected to the cluster
-->created the UserModel for storing the userdata in and added the userSchema

* npm i validator 
-->validates the user before signup with all credentials before storing into the Database
---->Created the routes
  
post  -->   ** /user/signup with validationsignup and checks user exists or not and password hash using bcrypt 
         and create the user
         
post  -->   ** /user/login credentials valid or not checks in the DB if it is valid generated the jwt tokem and
             verify the user 

post  -->   ** /user/profile we can check with teh middleware userAuth and the he is person whole loggedin with 
                correct credentials the profile fetced succesfuuly

put   -->  ** /user/profile  update the user thrown the jwt token

delete --> ** /user/profile delete the loggedInuser through the Id


## FRONTEND SETUP:--

--> Initialize the frontend with  
* npm create vite@latest 
  - Select **React** and **JavaScript** during setup  

--> Navigate to the frontend folder and install dependencies  
* npm install  

--> Install additional libraries:  
* npm install axios   --> For API requests  
* npm install react-router-dom  --> For routing between pages  

--> Project Structure:  
* Created pages/ folder for components like Login, Signup, and Profile  
* Added api.js to configure Axios with base URL and token handling  
* Used useNavigate from React Router for navigation after login/signup  

--> Styling:  
* Used **custom CSS** for form UI  
* Made the form responsive and centered using Flexbox  
* Added user-friendly UI for **Signup**, **Login**, and **Profile**  

--> Implemented Features:  
* **Signup**:  
   - POST request to /signup API  
   - Validates inputs before submission  
   - Redirects user to Login page after successful signup  

* **Login**:  
   - POST request to /login API  
   - Stores JWT token in localStorage 
   - Sets token in Axios headers for authenticated routes  
   - Redirects user to Profile page after successful login  

* **Profile Page**:  
   - Fetches user details using /profile route  
   - Displays data only if JWT token is valid  

--> Start the development server:  
* npm run dev 











