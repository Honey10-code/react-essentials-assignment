import { useState } from "react"

function ThemeToggle(){

 const [dark,setDark] = useState(false)

 const toggleTheme = ()=>{

  setDark(!dark)

  if(!dark){
   document.body.style.background="#121212"
   document.body.style.color="white"
  }else{
   document.body.style.background="white"
   document.body.style.color="black"
  }

 }

 return(

  <button onClick={toggleTheme}>
   Toggle Theme
  </button>

 )

}

export default ThemeToggle