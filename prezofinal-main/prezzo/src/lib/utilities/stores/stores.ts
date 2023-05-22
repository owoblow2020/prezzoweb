

export class Storage{
    

        async AddToCart(data){
            let products = [];
            if(localStorage.getItem('products')){
                products = JSON.parse(localStorage.getItem('products'));
            }
            products.push(data);
            localStorage.setItem('products', JSON.stringify(products));
        }


    //    async RemoveFromCart () => {

    //     let storageProducts = JSON.parse(localStorage.getItem('products'));
    //     let products = storageProducts.filter(product => product.productId !== productId );
    //     localStorage.setItem('products', JSON.stringify(products));
        
    //    }
}