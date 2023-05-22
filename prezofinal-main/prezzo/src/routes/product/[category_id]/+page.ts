export const load  = async ({params,fetch})=>{
    const response = await fetch(`/api/category/${params.category_id}`)

    if (response.ok){

       const products = await response.json();
       return{
            data:products
       }
       
    }
}