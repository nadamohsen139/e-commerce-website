import { createContext, useState } from "react";
import all_product from './../assets/all_product';



export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const contextValue = { all_product, loggedIn, setLoggedIn };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;