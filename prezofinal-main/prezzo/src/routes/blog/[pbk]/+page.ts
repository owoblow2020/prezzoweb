import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { url } from '$lib/config';
import { Request } from '$lib/request';

 
// export const load =   ( async ({ params, fetch }) => {
//     const response = await fetch(`${url}blog-posts/${params.pbk}`)

//     if (response.ok){

//        const article = await response.json();
//        return{
//             data:article
//        }
       
//     }
 
//   throw error(404, 'Not found');
// }) satisfies PageLoad;

export const load  = async ({params,fetch})=>{
    const response = await fetch(`/api/blog/${params.pbk}`)

    if (response.ok){

       const article = await response.json();
       return{
            data:article
       }
       
    }
}