
// nav bar
let menuBtn = document.querySelector("[menu-btn]")
let navBar = document.querySelector("[nav-bar]")

// menuBtn.addEventListener("click", ()=> {
//       navBar.style.scale = "1";
// })


let isTrue = false
menuBtn.addEventListener("click", ()=> {
      isTrue = !isTrue
      if(isTrue){
        navBar.style.scale = "1"; 
      } else {
        navBar.style.scale = "0";
      }
})



