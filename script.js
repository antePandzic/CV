function showText(year) {
  var textContainer = document.getElementById("text-container");
  var text = getTextByYear(year);

  textContainer.classList.remove("fade-out"); // Remove the fade-out class if present
  textContainer.innerHTML = text;
  textContainer.style.display = "block";

  setTimeout(function() {
    textContainer.classList.add("fade-out");
  }, 2000);
}
window.onload = function() {
  showText(1);
}

function getTextByYear(year) {
  switch (year) {
    case 2015:
      return `<div class="cv-text">
        <h3>Hrvatski Telekom d.d.</h3>
        <p>02.01.2015 – 30.09.2015</p>
        <h4>Tehnička podrška – Viši agent</h4>
        <ul>
          <li>Tehnička i prodajna pomoć ostalim agentima u pozivnom centru pri pozivima, unos prodajnih zahtjeva, odrađivanje administrativnih poslova, održavanje prodajnih i tehničkih Coachinga, analiza statistika i pomoć agentima u njihovom radu.</li>
          <li>Zamjena Team Leadera te održavanje Team meetinga i huddle-ova.</li>
        </ul>
        <h3>Hrvatski telekom d.d.</h3>
        <p>15.01.2014 – 02.01.2015</p>
        <h4>Tehnička podrška</h4>
        <ul>
          <li>Rad na slusalici kao agent u pozivnom centru, zaprimanje upita korisnika, tehnička podrška te proaktivna ponuda HT mobilnih i fiksnih usluga.</li>
        </ul>
      </div>`;
      case 2015-2017:
        return `<div class="cv-text">
        <h3>Hrvatski telekom d.d.</h3>
        <p>01.10.2015 – 03.09.2017</p>
        <h4>Specijalist za tehničku podršku (SMC)</h4>
        <ul>
          <li>Otklon grešaka na drugoj razini, telefonska podrška tehničarima na terenu</li>
          <li>Korištenje alata, udaljena dijagnostika, te udaljeni otklon poteškoća</li>
        </ul>`;
    case 2017-2021:
      return `<div class="cv-text">
        <h3>Hrvatski telekom d.d.</h3>
        <p>04.09.2017 – 14.02.2021</p>
        <h4>Tehničar za telekomunikacije</h4>
        <ul>
          <li>Održavanje i otklon grešaka na telekomunikacijskoj mreži</li>
          <li>Rad na zračnoj i podzemnoj infrastrukturi, te rad kod korisnika na pretplatničkoj opremi</li>
          <li>Komunikacija sa strankama, organizacija posla, te aktivna prodaja usluga</li>
          <li>Obuka novih zaposlenika</li>
        </ul>`;

    case 2021-2022:
      return `<div class="cv-text">
        <h3>Libratel d.o.o.</h3>
        <p>15.02.2021 – 31.01.2022</p>
        <h4>Kabelmonter</h4>
        <ul>
          <li>Održavanje i otklon grešaka na telekomunikacijskoj infrastrukturi – zračna i podzemna mreža</li>
          <li>Mjerenje i otklon kompleksnih grešaka sa mjernim instrumentom</li>
          <li>Obuka novih zaposlenika</li>
        </ul>`;
    case 2022:
      return `<div class="cv-text">
        <h3>Libratel d.o.o.</h3>
        <p>01.02.2022 – 14.11.2022</p>
        <h4>Voditelj građevinskih radova</h4>
        <ul>
          <li>Izgradnja telekomunikacijske infrastrukture za firmu - Ericsson Nikola Tesla Servisi d.o.o.</li>
          <li>Izrada tjednog/mjesečnog plana odrade zadataka, organizacija više timova za svakodnevnu odradu (kabelmonterski, građevinski), kontrola kvalitete radova, kontakt sa strankama, te naposlijetku unos obračuna i naplata odrađenog posla</li>
          <li>Komunikacija i organizacija sa drugim voditeljima, te sa zaposlenicima</li>
          <li>Naručivanje potrebnog materijala, kontrola skladišta</li>
        </ul>`;
    case 2023:
      return `<div class="cv-text">
        <h3>Ericsson Nikola Tesla Servisi d.o.o.</h3>
        <p>15.11.2022 –</p>
        <h4>Voditelj skladišta</h4>
        <ul>
          <li>Nabava potrebnog alata i materijala za izgradnju i održavanje telekomunikacijske infrastrukture</li>
          <li>Izdavanje, preuzimanje i naručivanje opreme za 20+ zaposlenika</li>
          <li>Koordinacija sa drugim voditeljima i zaposlenicima, te ispomoć u organizaciji posla</li>
        </ul>`;
    case 1:
      return `<h3>Što trenutno radim ?</h3>
      <ul>
        <li>Završen tečaj za Front-end developera na Algebri</li>
        <li>Izrađujem web stranicu za frizerski salon</li>
        <li>Vodim skladište</li>
      </ul>`;
    default:
      return "No information available for that year.";
  }
}
