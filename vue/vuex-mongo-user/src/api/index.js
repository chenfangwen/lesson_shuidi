// const _users = [
//   {
//     "address": {
//       "city": "Los Angeles",
//       "state": 'California',
//       "pincode": "123"
//     },
//     "tags": [
//       "music",
//       "blogs",
//       "cricket"
//     ],
//     "name": "Tom Benzamin"
//   },
//   {
//     "address": {
//       "city": "赣州",
//       "state": '江西',
//       "pincode": "331000"
//     },
//     "tags": [
//       "coding",
//       "blogs"
//     ],
//     "name": "王志浩"
//   },
//   {
//     "address": {
//       "city": "九江",
//       "state": '江西',
//       "pincode": "331000"
//     },
//     "tags": [
//       "coding",
//       "swim"
//     ],
//     "name": "刘子民"
//   },
//     {
//     "address": {
//       "city": "赣州",
//       "state": '江西',
//       "pincode": "331000"
//     },
//     "tags": [
//       "coding",
//       "games"
//     ],
//     "name": "衷从海"
//   }
// ]
import axios from "axios"
export default {
  async fetchUsers() {
    // setTimeout(() => {
    //   cb(_users);
    // }, 1000)
    // fetch('/api/users')
    //   .then(data => data.json())
    //   .then(data => {
    //     console.log(data, '----api');
    //     cb(data)
    //   })
    //   .catch(err => {
    //     cb(err)
    //   })
        // let data = []
        // await axios.get('api/users')
        // .then(res=>{
        //   // console.log(res.data)
        //   data = res.data
        // })
        // return new Promise ((resolve,reject)=>{ resolve(data)});
      return await new Promise ((resolve,reject)=>{
        axios.get('api/users')
          .then(res=>{
          console.log(res)
          resolve(res.data);
          })
      })
   
      // .then(res => {
      //   // console.log(res);
      //   // cb(res.data)
      // })
    
  },
  fetchUsersByTag(tag, cb) {
    // fetch(`/api/users/tag/${tag}`)
    // .then(data => data.json())
    // .then(data => {
    //   console.log(data, '----api_tag');
    //   cb(data)
    // })
    axios.get(`/api/users/tag/${tag}`)
      .then(res => {
        console.log(res);
        cb(res.data)
      })
  }
}