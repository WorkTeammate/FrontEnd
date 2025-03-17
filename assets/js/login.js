const user_number_ipt = document.getElementById("user_number");
const user_name_ipt = document.getElementById("user_name");
const save_btn = document.getElementById("submit_btn");
const form = document.querySelector("form");
const login_text = document.querySelector("h2");
const section_two = document.getElementById("sec_two");
const user_number_output = document.getElementById("user_number_output");
const user_name_output = document.getElementById("user_name_output");
const no_btn = document.querySelector("#go_back_btn");
const yes_btn = document.querySelector("#save_user_data_btn");

section_two.style.display = "none";

save_btn.addEventListener("click", () => {

  user_number_output.value = user_number_ipt.value;
  user_name_output.value = user_name_ipt.value;

  form.style.display = "none";
  login_text.style.display = "none";
  section_two.style.display = "inline";
});

no_btn.addEventListener("click",function(){
    form.style.display = "inline";
    login_text.style.display = "inline";
    section_two.style.display = "none";
})

const home_login_btn = document.querySelector("#login_btn")

yes_btn.addEventListener("click",()=>{
    home_login_btn.style.back
})

cancelAnimationFrame

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

img2.style.display = "none";
img3.style.display = "none";
img4.style.display = "none";

let images = [img1, img2, img3, img4];
let currentImageIndex = 0;

images.forEach((img, index) => img.style.display = index === 0 ? "inline" : "none");

setInterval(function() {
  images[currentImageIndex].style.display = "none"; 
  currentImageIndex = (currentImageIndex + 1) % images.length; 
  images[currentImageIndex].style.display = "inline"; 
}, 10000);