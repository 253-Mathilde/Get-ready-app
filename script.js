
const vid = document.querySelector("#vd");
vid.muted = true;
vid.play();

vid.addEventListener("ended", () => {
loader.remove();
vid.remove();
});


document.getElementById("create").addEventListener("click", function() { 
    window.location.href = "create1.html";
 });

 document.getElementById("text").addEventListener("click", function() { 
    window.location.href = "index.html";
 });

