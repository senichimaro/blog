
module.exports = {
  appConfig:{
    routes:[
      {
        url:'/',
        name:'Home'
      },
      {
        url:'/new',
        name:'New'
      },
      {
        url:'/edit',
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
