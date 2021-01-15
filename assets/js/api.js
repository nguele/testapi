
const img = document.getElementById("img");
function api1(){
    fetch("https://api.thecatapi.com/v1/images/search")
.then(res => res.json())
.then(data => img.src= data[0].url);
}
  setInterval(api1, 3000);

  

