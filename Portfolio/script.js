  // JS: effetto digitazione/cancellazione ciclico
  const el = document.getElementById("tw");

  // Cambia qui le parole da mostrare
  const words = [
    "Sviluppatore Web",
    "Studente di Economia UniFe",
    "data entry",
  ];

  const typeSpeed = 70;     // ms per lettera quando scrive
  const deleteSpeed = 45;   // ms per lettera quando cancella
  const stayDelay = 1100;   // pausa quando ha finito di scrivere
  const gapDelay = 400;     // piccola pausa prima di iniziare a scrivere la parola successiva

  let i = 0;  // indice parola

  function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

  async function typeWord(word){
    // scrivi
    for (let ch = 1; ch <= word.length; ch++){
      el.textContent = word.slice(0, ch);
      await sleep(typeSpeed);
    }
    await sleep(stayDelay);
    // cancella
    for (let ch = word.length; ch >= 0; ch--){
      el.textContent = word.slice(0, ch);
      await sleep(deleteSpeed);
    }
    await sleep(gapDelay);
  }

  async function loop(){
    while(true){
      const word = words[i % words.length];
      await typeWord(word);
      i++;
    }
  }
  loop();