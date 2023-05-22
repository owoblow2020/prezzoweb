import { url } from "$lib/config";
import { Request } from "$lib/request";
const rq = new Request();

export const GetSinglePost = async(post_id:string)=>{
        const res = await rq.Get(`blog-posts/${post_id}`)
        return res
}