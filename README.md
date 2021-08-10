# MERN Blog Project
This project create a blog with React CRA in Front-End and Express in Back-End.

put together Back-End & Front-End setup from scratch. Uses React in the Front-End & Express in Back-End, meanwhile uses other packages to develop side functionalities.

### Front-End Packages
React
~~~
npx create-react-app frontend
npm i react-router-dom
~~~
UI/UX
~~~
npm i bootswatch bootstrap jquery
~~~
Dotenv
~~~
npm i dotenv
~~~
Axios
~~~
npm axios
~~~

# React Front-End
This project set a CRUD logic based in javascript and Axios target Back-End Server requests, Bootswatch & Bootstrap for UI/UX.
This app will set two views:
* init view
* form view

### Development
Between Back-End and Front-End setup there is a business logic that connects product with services to bring solutions. This logic interpret the user actions and play functionalities that respond with data.

1. views
  - init view
  - form view
  - modal

2. http verbs
  - post
  - put

3. data render logic
  - object list
  - http create
  - http edit
  - http delete
  - http succes
  - http error



# Back-End
This Back-End will serve database data to Front-End. It will be based in NodeJs from Express framework and Mongoose interfaced a MongoDB database engine. It require CORS package to allow requests from the Front-End only. This request will come from body and Express will use Body Parser to make this data accessible from JSON format. Nodemon will be in charge of hot reload. And Multer to image uploading. Dotenv package allow us to NOT expose sensible data from hardcoding it, this allow to use .env file from where use url, passwords and other sensible data keeping it out of users scoop where they can't read it into server processes. Data is written into .env and called from process.env.REACT_APP_[VAR_NAME] and its use like a common variable.


### Back-End Packages
~~~
npm i express mongoose cors body-parser nodemon multer dotenv
~~~


### Development
1. server
2. routes
3. endpoints
4. DB CRUD
5. response
