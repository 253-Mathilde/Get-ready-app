//beginn button für den normalen modus
const createBtn = document.getElementById("create");
if (createBtn) {
    createBtn.addEventListener("click", function() { 
        let base = window.location.href.split('/').slice(0, -1).join('/');
        window.location.href = base + "/screenone_arrivetime/create1.html";
    });


}

//home button für alle seiten
const textBtn = document.getElementById("text");
if (textBtn) {
    textBtn.addEventListener("click", function() { 
        const audiohome = document.querySelector("#homemusic");
        if (audiohome) {
            audiohome.play();
            audiohome.onended = function() {
                window.location.href = "../index.html";
            };
        } else {
            window.location.href = "../index.html";
        }
    });
}


//wechsel zur nächsten seite
const aktuellerPfad = window.location.pathname;

function nextsite() {
    const audionext = document.querySelector("#nextmusic");
    audionext.play();
    datenVerarbeiten();

    setTimeout(function() {
        if (aktuellerPfad.includes("create1.html")) {
            let basisPfad = window.location.href.replace("screenone_arrivetime/create1.html", "");
            window.location.href = basisPfad + "screentwo_waytime/time1.html";

        } else if (aktuellerPfad.includes("time1.html")) {
            let basisPfad = window.location.href.replace("screentwo_waytime/time1.html", "");
            window.location.href = basisPfad + "screenthree_bag/bag1.html"; 

        } else {
          console.log("nextsite didn't work");
        }
    }, 2000); 
}



function datenVerarbeiten() {
    if (window.location.href.includes("create1.html")) {
        const hour = Number(document.getElementById("hourfield")?.value || 0);
        const minutes = Number(document.getElementById("minutesfield")?.value || 0);
        const Summe1 = (hour * 60) + minutes;
        localStorage.setItem("savedSumme1", Summe1);
    }
    
    if (window.location.href.includes("screentwo_waytime/time1.html")) {
        const loadedSumme1 = Number(localStorage.getItem("savedSumme1") || 0);
        const wayStunden = Number(document.getElementById("hourfieldfortheway")?.value || 0);
        const wayMinuten = Number(document.getElementById("minutesfieldfortheway")?.value || 0);
        const loadedSumme2 = (wayStunden * 60) + wayMinuten;

        const endZeit = loadedSumme1 - loadedSumme2;
        const endStunden = Math.floor(endZeit / 60);
        const endMinuten = endZeit % 60;
        console.log(`Ergebnis: ${endStunden} Stunden und ${endMinuten} Minuten`);
    }
}





window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault(); 
        datenVerarbeiten(); 
        if (document.activeElement && typeof document.activeElement.blur === "function") {
            document.activeElement.blur();
        }
    }
});







