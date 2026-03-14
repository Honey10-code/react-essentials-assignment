function Skills({skills}){

 return(

  <div>

   {skills.map((skill,index)=>(
    <span key={index} className="badge">
     {skill}
    </span>
   ))}

  </div>

 )

}

export default Skills