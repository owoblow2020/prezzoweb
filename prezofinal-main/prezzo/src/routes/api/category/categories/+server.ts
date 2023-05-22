import { error } from '@sveltejs/kit';
import { url } from '$lib/config';
import { Request } from '$lib/request';


export const GET = async ({fetch})=>{
    const response = await fetch(`${url}categories`)
    if (response.ok){
        return response
    }

    throw error(404)

}
 
