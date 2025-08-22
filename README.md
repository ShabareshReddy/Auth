UserAuthentication ---->>

BACKEND SETUP:--
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
