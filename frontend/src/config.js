
module.exports = {
  appConfig:{
    routes:[
      {
        url:'/',
        name:'Home'
      },
      {
        url:'/post/new',
        name:'New'
      },
      {
        url:'/post/edit',
        name:'Edit'
      }
    ],
    api:{
      get:process.env.REACT_APP_GET_URL,
      post:process.env.REACT_APP_POST_URL,
      put:process.env.REACT_APP_POST_URL
    }
  }
}
