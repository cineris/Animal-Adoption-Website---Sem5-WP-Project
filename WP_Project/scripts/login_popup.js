// window onload used to fix an error with adding event listeners
window.onload =  function(){
document.querySelector("#login-button").addEventListener("click",function(){
  document.querySelector(".popup.lg").classList.add("active");
  document.querySelector(".popup.su").classList.remove("active");   // removing to have only login or signup open at a time
});
document.querySelector("#close-login").addEventListener("click",function(){
  document.querySelector(".popup.lg").classList.remove("active");
});

document.querySelector("#signup-button").addEventListener("click",function(){
  document.querySelector(".popup.su").classList.add("active");
});
document.querySelector("#close-signup").addEventListener("click",function(){
  document.querySelector(".popup.su").classList.remove("active");
  document.querySelector(".popup.lg").classList.remove("active");
});
}
