# React Front-End
React CRA let us focus in create components and business logic.

This app will set two views:
* init view
* form view

## Packages
React
~~~
npx create-react-app frontend
npm i react-router-dom
~~~
UI/UX
~~~
npm i bootswatch bootstrap jquery bootstrap-icons
~~~
Dotenv
~~~
npm i dotenv
~~~
Axios
~~~
npm axios
~~~


###### React
For this project will be based in react for it simplicity and fast development. The React CLI command `create-react-app` setup a bullet-proof React App fully configured to be used immediately out-of-the-box. React is a single page purpose, multipage its a functionality from React Router package. `react-router-dom` give the chance to set a router based in URL filters that respond with selected intefaces.
~~~
npx create-react-app frontend
npm i react-router-dom
~~~


###### dotenv
Dotenv package allow us to use environment variables to NOT expose sensible data from hardcoding it in the project files. The `.env` file keeps private data like passwords or api-keys out of users scoop into server processes where isn't reachable for them.

Data (passwords or api-keys) is written into .env and called from process.env.REACT_APP_[VAR_NAME] to use it like a common variable.
~~~
npm i dotenv
~~~


###### UI/UX
Bootswatch is a bootstrap style themes that provide all core functionalities. It doesn't come with js bootstrap files, to use modals and other components that need bootstrap bundle javascript the core bootstrap package is needed. Even some bootstrap widgets & components require JQuery. Icons will be handle with bootstrap-icons.
~~~
npm i bootswatch bootstrap jquery bootstrap-icons
~~~

###### AXIOS
Axios allow to properly make HTTP Verbs requests like post, put, delete & get.
~~~
npm axios
~~~


## init view
This is the base route of the app, the user could visualize a list of objects if there is any or an empty list if there isn't objects.

The logic of this view get the objects from a database endpoint to receive an array of objects. The initial state of the logic is empty, without any object. Then, the get request is send to the endpoint. A loading animation is visible and ends when a respose is received. The result is shown to the user: a list of objects if there is any or a information string message that said there aren't objects.

* Empty
* GET request
* Loading animation
* Results

#### Elements of the view
The view has a section title a button to add objects and a list. Each row display basic info and has two buttons: edit and delete.
* Title
* Add Button
* List
* Each row edit & delete button


## form view
This view is the same for create and edit objects, it sends POST request to create a object and PUT request to edit a object. Receive a response of error & success, show a modal in case of error or success. In case of error show two buttons: edit or discard. In case of success show two buttons: new (add new object) or return (back to init view).

The are two key points in object creation or edition: the URL and object state. Creation and Edition has different URLs, creation receives an object state of null, edition must receive object id to be found their reference into database to be called and shown in the form fields. The object state sends a GET request for an object or not.

* object state : GET or null
* Form
* POST or PUT
* Modal success & error


#### Elements of the view
This view has a section title, a form that is used to add objects or edit them. When submit error & success messages are displayed in a popup modal with two buttons. Success modal: Close (Return to init view) & New (Return to blank form). Error: Edit (Return to form) & Discard (Return to init view).

* Title
* Form
* Modal Success & two buttons: Close & New
* Modal Error & two buttons: Edit & Discard



# Development
Between Back-End and Front-End setup there is a business logic that connects product with services to bring solutions. This logic interpret the user actions and play functionalities respond with data.

1. views
  - [] init view
  - [] form view
  - [] modal

2. http verbs
  - [] post
  - [] put

3. data render logic
  - [] object list
  - [] http create
  - [] http edit
  - [] http delete
  - [] http succes
  - [] http error
