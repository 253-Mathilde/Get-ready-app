
const createBtn = document.getElementById("create");
if (createBtn) {
    createBtn.addEventListener("click", function() { 
        window.location.href = "screenone_arrivetime/create1.html";
    });
}

const textBtn = document.getElementById("text");
if (textBtn) {
    textBtn.addEventListener("click", function() { 
        window.location.href = "index.html";
    });
}


function nextsite() {
  const aktuellerPfad = window.location.pathname;

  if (aktuellerPfad.includes("screenone_arrivetime/create1.html")){
    window.location.href = "../screentwo_waytime/time1.html";

  }else {
     window.location.href = "index.html";
  }
}

