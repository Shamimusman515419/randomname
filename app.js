const eamilrandom=()=>{
     fetch("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
     .then(res=>res.json()).then(email=>emaildesply(email));
}

const emaildesply=(email)=>{
     

 const emailgenarator=document.getElementById("emailgenarator");


 emailgenarator.innerHTML=`
  <h1 id="counttext" class=" border-2 p-2 inline  border-blue-500 text-xl font-extrabold text-center"> ${email[0]}</h1>
  <button  onclick="copybutton()" class="text-2xl my-7  mx-auto text-center hover:bg-[#9000b4] text-white bg-blue-700 px-3  p-1 rounded-lg">Copy</button>
  
 `

}





eamilrandom()

document.getElementById("emilreload").addEventListener("click",()=>{
     eamilrandom();
})

const copybutton=()=>{
     const counttext=document.getElementById("counttext").innerText;
      if(counttext){

          Swal.fire(
               'Good job!',
               ` ${counttext}`,
               'success'
             )

          navigator.clipboard.writeText(counttext);
      }
   
  
}


