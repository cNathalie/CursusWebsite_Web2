const setup = async () => {
  // We laden asynchroon de JSON data van de student in
  let studentInfo = await getInfo();

  // We halen de nodige HTML elementen op
  const student = document.querySelector("#student-info");
  const studentName = student.querySelector("#name");

  // We vullen de HTML elementen met de JSON data
  studentName.textContent = `${studentInfo.student.firstName} ${studentInfo.student.lastName}`;
};

window.addEventListener("load", setup);

// Functie om de JSON data van de student op te halen
const getInfo = async () => {
  const response = await fetch(
    "/pages/exercises/javascript/json/student-info.json"
  );
  return response.json();
};


// Deze code doet het volgende:

// Asynchrone setup-functie:

// De setup functie wordt gedefinieerd als een asynchrone functie.
// Binnen deze functie wordt de getInfo functie aangeroepen om de JSON data van de student op te halen. Dit gebeurt asynchroon met await.
// HTML elementen ophalen:

// De student variabele haalt het HTML element op met het id student-info.
// De studentName variabele haalt het HTML element op binnen student met het id name.
// HTML elementen vullen met JSON data:

// De studentName.textContent wordt ingesteld op de voornaam en achternaam van de student, verkregen uit de JSON data.
// Event listener toevoegen:

// De setup functie wordt aangeroepen wanneer de pagina volledig geladen is, door een event listener toe te voegen aan het window object voor het load event.
// JSON data ophalen:

// De getInfo functie is een asynchrone functie die een fetch request uitvoert naar een JSON bestand (student-info.json).
// De functie wacht op de response en retourneert de JSON data.
// Kortom, deze code zorgt ervoor dat wanneer de pagina geladen is, de naam van de student uit een JSON bestand wordt opgehaald en weergegeven in de HTML.