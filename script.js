
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
const arrivetime1 = Number(document.getElementById("hour")?.value )* 60;
const arrivetime2 = Number(document.getElementById("minutes")?.value);
const summe1 = arrivetime1 + arrivetime2;

const waytime1 = Number(document.getElementById("hourfortheway")?.value)* 60;
const waytime2 = Number(document.getElementById("minutesfortheway")?.value);

const summe2 = waytime1 + waytime2;
const summezeit = summe1 - summe2;

const endStunden = Math.floor(summezeit / 60);
const endMinuten = summezeit % 60;
console.log(`Ergebnis: ${endStunden} Stunden und ${endMinuten} Minuten`);
