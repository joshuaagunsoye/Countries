import {React} from "react";


function Country ({countries,num}){
    return (
        <div>
            {countries !== undefined && (
                <div>
                    <div>
                        <img src={countries[num].flags.png} alt="country flag" width={100} />
                        <p> Name: {countries[num].name.common}</p>
                        <p> Population: {countries[num].population}</p>
                        <p> Region: {countries[num].region}</p>
                        <p> Capital: {countries[num].capital}</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Country