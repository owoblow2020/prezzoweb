import { Request } from "$lib/request";


export const load = async ({fetch}) =>{
    const res = await fetch('/api/blog')
    // console.log(await res.json());
    
    return {
        data:await res.json()
    }
}