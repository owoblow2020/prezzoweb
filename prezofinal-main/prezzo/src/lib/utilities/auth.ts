import jwt_decode from "jwt-decode";
export class Auth {
    decode(token){
        return jwt_decode(token)
    }

    isAuthenticated({current_user}){
        try {
            if(!current_user.Authorization){return false}
            return true
        } catch (e) {
            if(e instanceof TypeError){
                return false}
        }
      
    }


    
}