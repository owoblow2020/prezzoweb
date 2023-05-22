import { url } from '$lib/config';


export const POST = async ({request})=>{
    try {

        const data = await request.json();
        const res = await fetch(`${url}contacts/`, {
			method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
			body: JSON.stringify(data)
		})

        // console.log(data)

        return res
    } catch (error) {
        return new Response(error)
        
    }


}