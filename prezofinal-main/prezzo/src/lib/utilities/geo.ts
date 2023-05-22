import { Request } from "$lib/request";

const rq = new Request()

export class Geo{
    async getFlags (ID){
        try {
            const ct = await rq.Get_norm('https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json')
        for (let country in ct){
            // console.log(country);
            
            const county =  await ct[country]
            if(county.code == ID){
                // console.log(county);
                return county
            }

        }
            
        } catch (error) {

            console.log(error);
            return {
                "ip": "197.211.53.22",
                "isp": "Globacom Limited",
                "org": "Glomobile",
                "hostname": "197.211.53.22",
                "latitude": 6.43033,
                "longitude": 3.41308,
                "postal_code": "",
                "city": "Lagos (Victoria Island Annex)",
                "country_code": "NG",
                "country_name": "Nigeria",
                "continent_code": "AF",
                "continent_name": "Africa",
                "region": "Lagos",
                "district": "Eti Osa",
                "timezone_name": "Africa\/Lagos",
                "connection_type": "Cellular",
                "asn_number": 37148,
                "asn_org": "Globacom Limited",
                "asn": "AS37148 - Globacom Limited",
                "currency_code": "NGN",
                "currency_name": "Nigerian Naira",
                "success": true,
                "premium": false
            }
            
        }
        
        // return ct
        
    }

    async getLocation(){
        const response = await rq.Get_norm('https://json.geoiplookup.io/')
        return response
    }


    async Currency(){
        console.log();
        
    }
}