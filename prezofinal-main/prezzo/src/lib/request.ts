import axios  from "axios";
import { url } from "./config";


export class Request {

        async Get_with_token(endpoint,token){
                const response = await axios.get(`${url}${endpoint}`,{
                    headers:{'Authorization': `Bearer ${token}`}})
                return response.data
            }


        async Post_with_token(endpoint,token,data){
            const response = await axios.post(`${url}${endpoint}`, data,{
                    headers:{'Authorization': `Bearer ${token}`}
            })

            return response.data
        }

        async Post(endpoint,data){
                const response = await axios.post(`${url}${endpoint}`,data,{
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                // console.log(response.headers['Authorization']);
                
                return response
        }

        async Post_norm(endpoint,data){
            const response = await axios.post(`${endpoint}`,data,{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            
            return response
        }

       async Get(endpoint) {
            const response = await axios.get(`${url}${endpoint}`)
            return response.data
       }


       async Get_norm(endpoint) {
        const response = await axios.get(`${endpoint}`)
        return response.data
   }


   async Post_with_fetch(endpoint:string,data:object){
    const response = await fetch(`${url}${endpoint}`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
    });
    // console.log(response);
    
    return response
   }

   



    
}