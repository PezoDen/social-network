import React from "react";
import store, {StoreType} from "./redux/redux-store";


const StoreContext = React.createContext(store)

export const Provider = (props: any) => {
  return <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>
}

export default StoreContext;