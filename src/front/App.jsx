import React from "react" 
import {Provider} from "react-redux"
import front_store from "./store/front_store"
import Component1 from "./components/index"

const App =  ()=>{
  return   <Provider store={front_store}><Component1/> </Provider>
}
 
export default App 