// import {sum} from 'lodash-es'
export class Number {

    Humanize(s:string){
       return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || '';
    }
    

    SumArray(array:[]){

        
        return  array.length
    }
}