import axios from "axios";
import {ProfileType} from "../redux/entities";

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
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId:number){
    return instance.delete(`follow/${userId}`)
  },
  getProfile (userId:number) {
    console.warn('Obsolete method. Please use profileAPI object')
    return profileAPI.getProfile(userId)
  }
}
export const profileAPI = {
  getProfile (userId:number) {
    return instance.get<ProfileType>(`profile/` + userId)
  },
  getStatus (userId:number)  {
    return instance.get('profile/status/' + userId)
},
  updateStatus(status:string) {
    return instance.put('profile/status', {status: status})
  }
}
export const authAPI = {
  me () {
    return instance.get(`auth/me`)
  },

}

