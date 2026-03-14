import { useState } from "react"

function LikeButton(){

 const [likes,setLikes] = useState(0)

 return(

  <button onClick={()=>setLikes(likes+1)}>
   ❤️ Likes {likes}
  </button>

 )

}

export default LikeButton