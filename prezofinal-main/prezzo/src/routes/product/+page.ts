import { Request } from "$lib/request";
import { error } from "@sveltejs/kit";

export const load = async ({fetch}) =>{
    const res = await fetch('/api/category/categories')
    // console.log(await res.json());
    if(res.ok){
        return {
            data:await res.json()
        }
    }

    throw error(404)
 
}