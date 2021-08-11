import axios from 'axios'

const baseUrl = process.env.REACT_APP_LOCALHOST


export async function getPosts(){
  try {
    const response = await axios({
      method:'get',
      url:baseUrl
    })
    return response
  }
  catch(e){
    console.error(`||| > ERROR getPosts: ${e.message}`);
  }
}




export async function newPost( postData ){

  try {
    const formData = new FormData()
    formData.append('title', postData.title)
    formData.append('textarea', postData.textarea)
    formData.append('image', postData.image)
    const response = await axios({
      url:`${baseUrl}/newpost`,
      method:'POST',
      data:formData
    })

    return response
  }
  catch(e){
    console.error(`||| >>> error in FormPage at 'handleSubmit' function: ${e.message}`);
  }

}
































// import axios from 'axios'
// import { appConfig } from '../config'
// // import $ from "jquery";
// // import 'core-js'
//
//
// // GET verb to get products
// export async function getProducts(){
//   try {
//     // const response = await axios({
//     //   url:appConfig.api.get,
//     //   method:'GET'
//     // })
//     // return response;
//     return false;
//   }
//   catch(e){
//     console.error(`>>> ||| > getProducts ERROR: ${e.message}`);
//   }
// }
//
//
//
// // POST verb to create product
// export async function createProducts(productData){
//   console.log("createProducts",productData);
//   try {
//     let formData = new FormData()
//     // formData.append('title', productData.title)
//     // formData.append('textarea', productData.textarea)
//     formData['title'] =  productData.title
//     formData['textarea'] =  productData.textarea
//
//     // console.log("appConfig",appConfig);
//
//     console.log("formData",formData);
//     const response = await axios({
//       url:appConfig.api.post,
//       method:'POST',
//       data:formData
//     })
//     console.log("response",response);
//     return response;
//
//     // console.log("createProducts",formData);
//     // return true
//   }
//   catch(e){
//     console.error(`>>> ||| > createProducts ERROR: ${e.message}`);
//   }
// }
