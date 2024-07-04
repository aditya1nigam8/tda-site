var board_mem_slider = document.getElementById("board-member-slider");
var board_members = ["Adil K", "Aditya", "Anant", "Anshita", "Anshul", "Anusha", "Arnav"]
let slides = Math.floor(board_members.length / 5);

if(slides % 5 != 0 ) slides++;
var slide = "";
board_mem_slider.innerHTML="";
for(let i = 0; i < slides; i++){
  slide += `<div class="swiper-slide"><div class="card-container">`;
  console.log("i:" + i);
  for(let j = i*5; (j < i*5 +5) && (j<board_members.length); j++){
    console.log("j:" + j);
    slide += `<div class="card"><img class="profile" src="png/profile.webp">${board_members[j]}</div>`;
    console.log(slide);
  }
  slide += `</div></div>`;
  console.log(slide);
  board_mem_slider.innerHTML += slide;
  slide = "";
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

});
