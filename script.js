
document.getElementById("animal").addEventListener("click", function() { 
    window.location.href = "create1.html";
 });

 document.body.addEventListener("click", function(event) {
    if (event.target === document.body) {
         window.location.href = "index.html";
    }
});
