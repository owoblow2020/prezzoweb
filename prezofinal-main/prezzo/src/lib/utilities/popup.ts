export class Pop{
    Toggle(docID,ToggleClass){
        const ele = document.getElementById(docID)
        console.log(docID);
        console.log(ele?.classList);
        
        
        if (ele?.classList.contains(ToggleClass)){
            console.log('pass');
            
            ele.classList.remove(ToggleClass)
            return
        }
        ele?.classList.add(ToggleClass)
        console.log('here too');
        
    }


    ToggleWind(docID,ToggleClass){
        const ele = document.getElementById(docID)
        console.log(docID);
        console.log(ele?.classList);
        
        
        if (ele?.classList.contains('hidden')){
            ele.classList.remove('hidden')
            ele?.classList.add(ToggleClass)

            return
        }
        ele?.classList.remove(ToggleClass)
        ele?.classList.add('hidden')

        console.log('here too');
        
    }
}