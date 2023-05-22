const production = false



export let url : string
export let mediaurl : string
export let internalURL : string
if(!production){
     url = 'http://127.0.0.1:8000/'
     mediaurl ='http://127.0.0.1:8790'

}


if(production){
    url = 'http://109.74.197.176:8790/'
    mediaurl='http://109.74.197.176:8790'

}

