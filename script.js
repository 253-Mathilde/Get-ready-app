const loader = document.querySelector("#loader");
const vid = document.querySelector("#vd");

// 1. VIDEO-LOGIK
// Wird nur ausgeführt, wenn loader und vd auf dem aktuellen Screen existieren (also auf index.html)
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

// 2. BUTTON ZUR UNTERSEITE ("create")
const createBtn = document.getElementById("create");
if (createBtn) {
    createBtn.addEventListener("click", function() { 
        // Absoluter Pfad für deine GitHub-Pages Domain (Wechsel in den Unterordner)
        window.location.href = "/Get-ready-app/screenone_arrivetime/create1.html";
    });
}

// 3. HOME-BUTTON ("text")
const textBtn = document.getElementById("text");
if (textBtn) {
    textBtn.addEventListener("click", function() { 
        // Absoluter Pfad zurück zur Startseite (Hauptverzeichnis)
        window.location.href = "/Get-ready-app/index.html";
    });
}

