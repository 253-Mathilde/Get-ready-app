const createBtn = document.getElementById("create");
if (createBtn) {
    createBtn.addEventListener("click", function() { 
        let base = window.location.href.split('/').slice(0, -1).join('/');
        window.location.href = base + "/screenone_arrivetime/create1.html";
    });
}

const textBtn = document.getElementById("text");
if (textBtn) {
    textBtn.addEventListener("click", function() { 
        // Springt aus dem Unterordner eine Ebene höher zurück zur index.html
        window.location.href = "../index.html";
    });
}



function nextsite() {
    const aktuellerPfad = window.location.pathname;

    if (aktuellerPfad.includes("create1.html")) {
        // Findet heraus, wo wir gerade sind, und ersetzt nur das Ende der Adresse
        // Das funktioniert überall, da es sich an der aktuellen URL orientiert
        let basisPfad = window.location.href.replace("screenone_arrivetime/create1.html", "");
        window.location.href = basisPfad + "screentwo_waytime/time1.html";

    } else {
        // Falls du von der Startseite kommst und zu create1.html willst
        let basisPfad = window.location.href.replace("index.html", "");
        // Falls am Ende kein Slash ist (passiert manchmal bei Apps), fügen wir einen hinzu
        if (!basisPfad.endsWith("/")) {
            basisPfad += "/";
        }
        window.location.href = basisPfad + "screenone_arrivetime/create1.html";
    }
}

