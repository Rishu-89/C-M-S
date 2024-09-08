import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

let authContext =createContext(null);

export let ContextProvider=({children})=>{
  let [auth,setAuth]=useState({
    token:"",
    user:null
  })



  axios.defaults.headers.common["Authorization"]=auth?.token;
  useEffect(()=>{
      let item= localStorage.getItem("auth");

      if(item){
        let parseItem=JSON.parse(item);
        setAuth({...auth,token:parseItem.token,user:parseItem.user});
        
      }
  },[])



return (

<authContext.Provider value={[auth,setAuth]}>
   {children}

   </authContext.Provider>

)
  
}

export let useAuth=()=>useContext(authContext);