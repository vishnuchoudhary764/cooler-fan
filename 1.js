const Fan = document.querySelector(".fan")
const onbutton = document.querySelector(".on")
const offbutton = document.querySelector(".off")




const onfan =()=>{
  Fan.classList.add("hide")
  onbutton.classList.add("fon")
  offbutton.classList.remove("foff")

}
const offfan =()=>{
   Fan.classList.remove("hide")
   offbutton.classList.add("foff")
   onbutton.classList.remove("fon")

}
onbutton.addEventListener("click",onfan)
offbutton.addEventListener("click",offfan)