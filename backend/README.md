# Back-End
This Back-End will serve database data to Front-End.

It will be based in NodeJs from Express framework and Mongoose interfaced a MongoDB database engine. It require CORS package to allow requests from the Front-End only. This request will come from body and Express will use Body Parser to make this data accessible from JSON format. Nodemon will be in charge of hot reload. And Multer to image uploading. Dotenv package allow us to NOT expose sensible data from hardcoding it, this allow to use .env file from where use url, passwords and other sensible data keeping it out of users scoop where they can't read it into server processes. Data is written into .env and called from process.env.REACT_APP_[VAR_NAME] and its use like a common variable.

~~~
npm i express mongoose cors body-parser nodemon multer dotenv
~~~

* Development
  - server
  - routes
  - endpoints
  - DB CRUD
  - response

###### Express
Express is a server framework to interface NodeJs and provide setup and endpoints in simpler manner. Uses express.Router to set routes like an independent exportable module that let isolate routes development.
