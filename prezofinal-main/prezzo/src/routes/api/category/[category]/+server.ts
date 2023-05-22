import { url } from '$lib/config';
import { error } from '@sveltejs/kit';

export const GET = async ({params})=>{
    const response = await fetch(`${url}category/${params.category}/products`)
    if (response.ok){
        return response
    }
    throw error(404)

}