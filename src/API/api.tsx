import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL:'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "743b3333-0516-4a4e-806b-b8ecd2b160d7"
  }
})

export const usersAPI = {
  getUsers(currentPage=1,pageSize=10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      });
  },
  follow(userId:number) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  unfollow(userId:number){
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  }
}

// export const getUsers = (currentPage=1,pageSize=10) => {
//   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//     .then(response => {
//       return response.data
//     });
// }
// export const getUsers2 = (currentPage=1,pageSize=10) => {
//   return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
//     .then(response => {
//       return response.data
//     });
// }
