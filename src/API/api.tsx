import axios from "axios";
import {execSync} from "child_process";

export const getUsers = (currentPage=1,pageSize=10) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
    {
      withCredentials: true
    })
}
