import { url } from '$lib/config';


export const GET = async ({params})=>{
    const response = await fetch(`${url}blog-posts/${params.pbk}`)
    // console.log(await response.json());

    // return new Response(JSON.stringify({'msg':"hi"}))
    return  response

}