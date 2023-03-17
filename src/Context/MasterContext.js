import {createContext} from "react";


export const globalContext = createContext(null)



export default function MasterContext(props)
{




    return(
        <globalContext.Provider
            value=
                {
                    {
                    }
                }
        >
            {props.children}
        </globalContext.Provider>
      );
}