import axios from "axios";

const BASE_URL="https://basic-blog.teamrabbil.com/api"

export async function postCategory(){
  let res= await axios.get(BASE_URL+"/post-categories")
    if(res.status===200){
        return res.data
    }else {
        return  []
    }
}