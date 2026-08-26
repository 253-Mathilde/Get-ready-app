
const loader = document.querySelector("#loader");
const vid = document.querySelector("#vd");

if (loader && vid) {
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
}


const createBtn = document.getElementById("create");
if (createBtn) {
    createBtn.addEventListener("click", function() { 
        window.location.href = "/Get-ready-app/screenone_arrivetime/create1.html";
    });
}

const textBtn = document.getElementById("text");
if (textBtn) {
    textBtn.addEventListener("click", function() { 
        window.location.href = "/Get-ready-app/index.html";
    });
}

