const genaredname=document.getElementById("genaredname");
const female=document.getElementById("female");
const male=document.getElementById("male");





const fackinformation=(gender)=>{
   
     const URL='https://randomuser.me/api/'
   fetch(gender?gender:URL).then(res=>res.json()).then(data=>displayUI(data.results));     
}



const displayUI=(data)=>{
     // console.log(data[0]);
     const {name,picture,dob,email,gender
     ,location ,phone}=data[0]
     const dateitme=new Date(dob.date);
     const brithdate=dateitme.toDateString();
     const containerbox=document.getElementById('containerbox');
     containerbox.innerHTML=`
      <div>
       <img class="text-center mx-auto block rounded-full" src="${picture.large}" >
    <h1 class=" text-center text-2xl font-extrabold mt-10">${name.title}  ${name.first}  ${name.last}</h1>

    <div class=" md:flex "> 
     <span class=" mx-2 font-medium text-xl ">Gender: </span>
     <span class=" font-medium text-xl "> ${gender
     }</span>
    </div>
    <div class=" md:flex "> 
     <span class=" mx-2 font-medium text-xl ">Date: </span>
     <span class=" font-medium text-xl "> ${brithdate}</span>
    </div>

    <div class=" md:flex justify-start "> 
     <span class=" mx-2 font-medium text-xl ">AGE: </span>
     <span class=" font-medium text-xl "> ${dob.age}</span>
    </div>
    <div class=" md:flex justify-start "> 
     <span class=" mx-2 font-medium text-xl ">Gmail:  </span>
     <span class=" font-medium text-xl "> ${email}</span>
    </div>
    <div class=" md:flex justify-start "> 
     <span class=" mx-2 font-medium text-xl ">Country:  </span>
     <span class=" font-medium text-xl "> ${location.country}</span>
    </div>

    <div class=" md:flex justify-start "> 
     <span class=" mx-2 font-medium text-xl ">Phone:  </span>
     <span class=" font-medium text-xl "> ${phone}</span>
    </div>

    </div>
     `

}
female.addEventListener("click",()=>{
     fackinformation("https://randomuser.me/api/?gender=female")
})
male.addEventListener("click",()=>{
     fackinformation("https://randomuser.me/api/?gender=male")
})

genaredname.addEventListener("click",()=>{
     fackinformation();
})


fackinformation();