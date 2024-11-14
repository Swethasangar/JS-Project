const container = document.querySelector('.container')
const btns = document.querySelectorAll(".btn")
const imgList = ["Img1","Img2","Img3","Img4"]

let index = 0
btns.forEach((button)=>{
   button.addEventListener("click",()=>{
    // console.log("Clicked")
    if(button.classList.contains('btn-left')){
      index--;
      // console.log("Left Button")
      if(index<0){
        index = imgList.length-1
      }
      container.style.background=`url("Image/${imgList[index]}.jpg") center/cover fixed no-repeat`
    }
    else{
      // console.log("Right Button")
      index++;
      if(index == imgList.length){
        index = 0
      }
      container.style.background=`url("Image/${imgList[index]}.jpg") center/cover fixed no-repeat`
    }
   })
})