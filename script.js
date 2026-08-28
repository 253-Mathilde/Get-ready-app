
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
        window.location.href = "../index.html";
    });
}

function nextsite() {
    const aktuellerPfad = window.location.pathname;

    if (aktuellerPfad.includes("create1.html")) {
        let basisPfad = window.location.href.replace("screenone_arrivetime/create1.html", "");
        window.location.href = basisPfad + "screentwo_waytime/time1.html";

    } else {
        let basisPfad = window.location.href.replace("index.html", "");
    if (!basisPfad.endsWith("/")) {
            basisPfad += "/";
        }
        window.location.href = basisPfad + "screenone_arrivetime/create1.html";
    }
}
const arrivetime1 = Number(document.getElementById("hour")?.value || 0)* 60;
const arrivetime2 = Number(document.getElementById("minutes")?.value || 0);
const summe1 = arrivetime1 + arrivetime2;
console.log("Summe 1:", summe1); 

const waytime1 = Number(document.getElementById("hourfortheway")?.value || 0)* 60;
const waytime2 = Number(document.getElementById("minutesfortheway")?.value || 0);
const summe2 = waytime1 + waytime2;

const summezeit = summe1 - summe2;
console.log("Endergebnis:", summezeit);



const endStunden = Math.floor(ergebnis_in_minuten / 60);
const endMinuten = ergebnis_in_minuten % 60;
console.log(`Ergebnis: ${endStunden} Stunden und ${endMinuten} Minuten`);
