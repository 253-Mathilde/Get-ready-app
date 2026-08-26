
const loader = document.querySelector("#loader");
const vid = document.querySelector("#vd");

if (sessionStorage.getItem("videoPlayed")) {
    loader.remove();
    vid.remove();
} else {
    loader.style.display = "block"; 
    vid.style.display = "block"; 
    vid.muted = true;
    vid.play();
    vid.addEventListener("ended", () => {
        loader.remove();
        vid.remove();
        sessionStorage.setItem("videoPlayed", "true");
    });
}



document.getElementById("create").addEventListener("click", function() { 
    window.location.href = "screenone_arrivetime/create1.html";
 });

 

 document.getElementById("text").addEventListener("click", function() { 
    window.location.href = "index.html";
 });
