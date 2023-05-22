import { url } from '$lib/config';


export const GET = async ()=>{
    const response = await fetch(`${url}blog-posts/?page=1`)
    // console.log(await response.json());

    // return new Response(JSON.stringify({'msg':"hi"}))
    return  response

}