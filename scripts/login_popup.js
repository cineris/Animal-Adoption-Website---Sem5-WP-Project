// window onload used to fix an error with adding event listeners
window.onload =  function(){
document.querySelector("#login-button").addEventListener("click",function(){
  document.querySelector(".popup").classList.add("active");
});
document.querySelector("#close-login").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
});
}
