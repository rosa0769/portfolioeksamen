// Hvad gør jeg?

/*
  Først får jeg alle elementerne fra min HTML bragt ind fra min HTML-fil. Jeg gør det ved at bruge document.getElementById(''). Her er det ekstremt vigtgt, at det, der står i citationstegnene i parentesen er 110% identisk med det id, det HTML-element, det skal hente ind, har fået.
  
  Forestil dig, at du bliver bedt om at hente din venindes telefon på bordet. Du går ind til bordet, hvorpå din venindes telefon skal ligge, men den ligger der ikke. Du er derfor dømt til at fejle opgaven.

  Hvis det skulle skrives med kode, kunne det se sådan ud (her har jeg bevidst skrevet det, så det vil fejle, hvis det bliver kørt)
  
  HTML:
  <div id="venindes-telefon">Venindes telefon</div>
  
  JS:
  const venindesTelefon = document.getElementById('din-telefon')
  
  Her er din veninde programmøren, der har givet computeren (dig), en opgave gennem en kommando. Din opgave er at udføre koden ovenfor. Men du vil altid fejle den, fordi hun har givet dig ordre til at udføre en opgave uden de korrekte betingelser. Du vil altså komme tilbage med ingenting, og det er også det, det som computeren returnerer. Det, der i programmeringsterminologi hedder en null reference error.
*/

const navbar = document.getElementById('main-nav')
const menuOpener = document.getElementById('menu-opener')
const menuCloser = document.getElementById('menu-closer')

// Her tilføjer jeg en eventlistener, som lytter efter, om der bliver trykket på den knap, der åbner side-menuen. Sker det, tilføjes active-klassen.
menuOpener.addEventListener('click', () => {
  navbar.classList.add('active')
})

// Her tilføjer jeg en eventlistener, som lytter efter, om der bliver trykket på den knap, der lukker side-menuen. Sker det, fjernes active-klassen.
menuCloser.addEventListener('click', () => {
  navbar.classList.remove('active')
})