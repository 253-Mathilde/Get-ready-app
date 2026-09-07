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

        } 
        else if (aktuellerPfad.includes("bag1.html")) {
            let basisPfad = window.location.href.replace("screenthree_bag/bag1.html", "");
            window.location.href = basisPfad + "screenfour_bagstuff/bagstuff1.html"; 

        }
        else if (aktuellerPfad.includes("bagstuff1.html")) {
            let basisPfad = window.location.href.replace("screenfour_bagstuff/bagstuff1.html", "");
            window.location.href = basisPfad + "screenfive_clothes/clothing1.html"; 

        }
        else {
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
      gesamtMinuten -= 5;   //subtrahieren
      let whatbagusestheuser = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatbagusestheuser", whatbagusestheuser);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
    } else {
      bag1.classList.remove('selected');
      let whatbagusestheuser = 0;
      gesamtMinuten += 5;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatbagusestheuser", whatbagusestheuser);
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
      let whatbagusestheuser = 2;                
      gesamtMinuten -= 5;                              //subtrahieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatbagusestheuser", whatbagusestheuser);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
    } else {
      bag2.classList.remove('selected');
      let whatbagusestheuser = 0;
      gesamtMinuten += 5;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatbagusestheuser", whatbagusestheuser);
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
      let whatbagusestheuser = 3;                    
      gesamtMinuten -= 5;                              //subtrahieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
       localStorage.setItem("whatbagusestheuser", whatbagusestheuser);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
    } else {
      bag3.classList.remove('selected');
      let whatbagusestheuser = 0;
      gesamtMinuten += 5;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatbagusestheuser", whatbagusestheuser);
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
      let whatbagusestheuser = 4;                      
      gesamtMinuten -= 5;                              //subtrahieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten);
       localStorage.setItem("whatbagusestheuser", whatbagusestheuser); 
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
    } else {
      bag4.classList.remove('selected');
      let whatbagusestheuser = 0;
      gesamtMinuten += 5;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatbagusestheuser", whatbagusestheuser);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });
}


if (aktuellerPfad.includes("screenfour_bagstuff/bagstuff1.html")) {
  const stuff1 = document.querySelector('#bag1'); 
  stuff1.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff1.classList.contains('selected')) {
      stuff1.classList.add('selected');                 
      gesamtMinuten -= 6;   //subtrahieren
      let whatstuffusestheuser1 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser1", whatstuffusestheuser1);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff1:  ${whatstuffusestheuser1}`) ; //neue minuten wenn selected
    } else {
      stuff1.classList.remove('selected');
      let whatstuffusestheuser1 = 0;
      gesamtMinuten += 6;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser1", whatstuffusestheuser1);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });
  


 const stuff2 = document.querySelector('#bag2'); 
  stuff2.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff2.classList.contains('selected')) {
      stuff2.classList.add('selected');                 
      gesamtMinuten -= 5;   //subtrahieren
      let whatstuffusestheuser2 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser2", whatstuffusestheuser2);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff2:  ${whatstuffusestheuser2}`) ; //neue minuten wenn selected
    } else {
      stuff2.classList.remove('selected');
      let whatstuffusestheuser2 = 0;
      gesamtMinuten += 5;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser2", whatstuffusestheuser2);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });


  const stuff3 = document.querySelector('#bag3'); 
  stuff3.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff3.classList.contains('selected')) {
      stuff3.classList.add('selected');                 
      gesamtMinuten -= 1;   //subtrahieren
      let whatstuffusestheuser3 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser3", whatstuffusestheuser3);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff3:  ${whatstuffusestheuser3}`) ; //neue minuten wenn selected
    } else {
      stuff3.classList.remove('selected');
      let whatstuffusestheuser3 = 0;
      gesamtMinuten += 1;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser3", whatstuffusestheuser3);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });


  const stuff4 = document.querySelector('#bag4'); 
  stuff4.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff4.classList.contains('selected')) {
      stuff4.classList.add('selected');                 
      gesamtMinuten -= 3;   //subtrahieren
      let whatstuffusestheuser4 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser4", whatstuffusestheuser4);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff4:  ${whatstuffusestheuser4}`) ; //neue minuten wenn selected
    } else {
      stuff4.classList.remove('selected');
      let whatstuffusestheuser4 = 0;
      gesamtMinuten += 3;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser4", whatstuffusestheuser4);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });


  const stuff5 = document.querySelector('#stuff1'); 
  stuff5.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff5.classList.contains('selected')) {
      stuff5.classList.add('selected');                 
      gesamtMinuten -= 5;   //subtrahieren
      let whatstuffusestheuser5 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser5", whatstuffusestheuser5);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff5:  ${whatstuffusestheuser5}`) ; //neue minuten wenn selected
    } else {
      stuff5.classList.remove('selected');
      let whatstuffusestheuser5 = 0;
      gesamtMinuten += 5;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser5", whatstuffusestheuser5);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });


  const stuff6 = document.querySelector('#stuff2'); 
  stuff6.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff6.classList.contains('selected')) {
      stuff6.classList.add('selected');                 
      gesamtMinuten -= 7;   //subtrahieren
      let whatstuffusestheuser6 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser6", whatstuffusestheuser6);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff6:  ${whatstuffusestheuser6}`) ; //neue minuten wenn selected
    } else {
      stuff6.classList.remove('selected');
      let whatstuffusestheuser6 = 0;
      gesamtMinuten += 7;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser6", whatstuffusestheuser6);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });


  const stuff7 = document.querySelector('#stuff3'); 
  stuff7.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff7.classList.contains('selected')) {
      stuff7.classList.add('selected');                 
      gesamtMinuten -= 1;   //subtrahieren
      let whatstuffusestheuser7 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser7", whatstuffusestheuser7);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff7:  ${whatstuffusestheuser7}`) ; //neue minuten wenn selected
    } else {
      stuff7.classList.remove('selected');
      let whatstuffusestheuser7 = 0;
      gesamtMinuten += 1;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser7", whatstuffusestheuser7);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });


  const stuff8 = document.querySelector('#stuff4'); 
  stuff8.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff8.classList.contains('selected')) {
      stuff8.classList.add('selected');                 
      gesamtMinuten -= 6;   //subtrahieren
      let whatstuffusestheuser8 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser8", whatstuffusestheuser8);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff8:  ${whatstuffusestheuser8}`) ; //neue minuten wenn selected
    } else {
      stuff8.classList.remove('selected');
      let whatstuffusestheuser8 = 0;
      gesamtMinuten += 6;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser8", whatstuffusestheuser8);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });


  const stuff9 = document.querySelector('#stuff5'); 
  stuff9.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff9.classList.contains('selected')) {
      stuff9.classList.add('selected');                 
      gesamtMinuten -= 2;   //subtrahieren
      let whatstuffusestheuser9 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser9", whatstuffusestheuser9);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff9:  ${whatstuffusestheuser9}`) ; //neue minuten wenn selected
    } else {
      stuff9.classList.remove('selected');
      let whatstuffusestheuser9 = 0;
      gesamtMinuten += 2;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser9", whatstuffusestheuser9);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });

 
 const stuff10 = document.querySelector('#stuff9'); 
  stuff10.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff10.classList.contains('selected')) {
      stuff10.classList.add('selected');                 
      gesamtMinuten -= 10;   //subtrahieren
      let whatstuffusestheuser10 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser10", whatstuffusestheuser10);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff10:  ${whatstuffusestheuser10}`) ; //neue minuten wenn selected
    } else {
      stuff10.classList.remove('selected');
      let whatstuffusestheuser10 = 0;
      gesamtMinuten += 10;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser10", whatstuffusestheuser10);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });


 const stuff11 = document.querySelector('#stuff8'); 
  stuff11.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff11.classList.contains('selected')) {
      stuff11.classList.add('selected');                 
      gesamtMinuten -= 2;   //subtrahieren
      let whatstuffusestheuser11 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser11", whatstuffusestheuser11);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff11:  ${whatstuffusestheuser11}`) ; //neue minuten wenn selected
    } else {
      stuff11.classList.remove('selected');
      let whatstuffusestheuser11 = 0;
      gesamtMinuten += 2;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser11", whatstuffusestheuser11);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });
 

  const stuff12 = document.querySelector('#stuff7'); 
  stuff12.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff12.classList.contains('selected')) {
      stuff12.classList.add('selected');                 
      gesamtMinuten -= 8;   //subtrahieren
      let whatstuffusestheuser12 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser12", whatstuffusestheuser12);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff12:  ${whatstuffusestheuser12}`) ; //neue minuten wenn selected
    } else {
      stuff12.classList.remove('selected');
      let whatstuffusestheuser12 = 0;
      gesamtMinuten += 8;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser12", whatstuffusestheuser12);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });


   const stuff13 = document.querySelector('#stuff6'); 
  stuff13.addEventListener('click', () => {
    let stunden = Number(localStorage.getItem("endStunden") || 0); // altes aufrufen
    let minuten = Number(localStorage.getItem("endMinuten") || 0);
    let gesamtMinuten = (stunden * 60) + minuten;
    if (!stuff13.classList.contains('selected')) {
      stuff13.classList.add('selected');                 
      gesamtMinuten -= 7;   //subtrahieren
      let whatstuffusestheuser13 = 1;                           
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandeln
      let neueMinuten = gesamtMinuten % 60;            //umwandeln
      localStorage.setItem("endStunden", neueStunden);//speichern in alter variable
      localStorage.setItem("endMinuten", neueMinuten); 
      localStorage.setItem("whatstuffusestheuser13", whatstuffusestheuser13);
      console.log(`Ausgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); //neue minuten wenn selected
      console.log(`stuff13:  ${whatstuffusestheuser13}`) ; //neue minuten wenn selected
    } else {
      stuff13.classList.remove('selected');
      let whatstuffusestheuser13 = 0;
      gesamtMinuten += 7;         //addieren
      let neueStunden = Math.floor(gesamtMinuten / 60); //umwandlen
      let neueMinuten = gesamtMinuten % 60;             //umwandeln
      localStorage.setItem("endStunden", neueStunden); //speichern in alte variabeln
      localStorage.setItem("endMinuten", neueMinuten);
      localStorage.setItem("whatstuffusestheuser13", whatstuffusestheuser13);
      console.log(`Abgewählt:  ${neueStunden}  ${neueMinuten} Minuten`); // neue minuten wenn deselected
    }
  });
}






if (aktuellerPfad.includes("screenfive_clothes/clothes1.html")) {
  const btn = document.getElementById("toogler");
 const btn_icon =  document.getElementById("toogler-icon");
  const contain = document.getElementById("contain");
   const wind = document.getElementById("wind")
    btn.onclick = function() {
	  if(contain.getAttribute("data-theme")!="dark"){
		contain.setAttribute("data-theme","dark");
		btn_icon.setAttribute("class","fas fa-solid fa-sun");
		wind.setAttribute("style","color: orange;")
      }
	  else{
		contain.setAttribute("data-theme","");
		wind.setAttribute("style","color: #0f345fe3;")
		btn_icon.setAttribute("class","fas fa-solid fa-moon");
      }
}


  };








  if (aktuellerPfad.includes("screenthree_bag/bag1.html")) {

      document.addEventListener('click', function(event) {
      const details = document.querySelector('details');
     if  (details.open && !details.contains(event.target)) {
       details.removeAttribute('open');
  }
});
  };
