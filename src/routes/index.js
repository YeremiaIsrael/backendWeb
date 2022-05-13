
import { Routes, Route } from "react-router-dom";
import {Login} from '../pages'

const Routing = ()=>{
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
  )
}

export default Routing