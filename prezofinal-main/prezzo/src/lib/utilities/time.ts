const currentDate = new Date()

export class DateTime{
    today(){
        return currentDate.toLocaleString('en-us', {weekday: 'long'});
    }
    now(){
        let month = currentDate.toLocaleString('default',{month:'long'})
        let date = currentDate.getDate()
        let year = currentDate.getFullYear()
        let time = new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        })
        return `${month} ${date}, ${year}, ${time}`

    }

}

export class Time extends DateTime {
        sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    }