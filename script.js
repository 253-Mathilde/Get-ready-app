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
        localStorage.setItem("endStunden", endStunden);
        localStorage.setItem("endMinuten", endMinuten);
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



if (aktuellerPfad.includes("screenthree_bag/bag1.html")) {
  const bag1 = document.querySelector('#bag1'); 
  bag1.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!bag1.classList.contains('selected')) {
      bag1.classList.add('selected');                 
      gesamtMinuten -= 5;                              //subtrahieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
    } else {
      bag1.classList.remove('selected');
      gesamtMinuten += 5;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });

  const bag2 = document.querySelector('#bag2'); 
  bag2.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!bag2.classList.contains('selected')) {
      bag2.classList.add('selected');                 
      gesamtMinuten -= 5;                              //subtrahieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
    } else {
      bag2.classList.remove('selected');
      gesamtMinuten += 5;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });


  const bag3 = document.querySelector('#bag3'); 
  bag3.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!bag3.classList.contains('selected')) {
      bag3.classList.add('selected');                 
      gesamtMinuten -= 5;                              //subtrahieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
    } else {
      bag3.classList.remove('selected');
      gesamtMinuten += 5;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });


  const bag4 = document.querySelector('#bag4'); 
  bag4.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!bag4.classList.contains('selected')) {
      bag4.classList.add('selected');                 
      gesamtMinuten -= 5;                              //subtrahieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
    } else {
      bag4.classList.remove('selected');
      gesamtMinuten += 5;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });
}
