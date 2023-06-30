function showText(year) {
  var textContainer = document.getElementById("text-container");
  var text = getTextByYear(year);
  textContainer.innerHTML = text;

  var lines = textContainer.querySelectorAll(".line");
  lines.forEach(function(line, index) {
    line.style.animation = "fadeIn 1s ease " + (index * 0.1) + "s forwards";
  });
}

window.onload = function() {
  showText(1);
};

window.onload = function() {
  showText(1);
};

function getTextByYear(year) {
  switch (year) {
    case 2015:
      return `<div class="cv-text">
      <h3 class="line">Hrvatski Telekom d.d.</h3>
      <p class="line">02.01.2015 – 30.09.2015</p>
      <h4 class="line">Tehnička podrška – Viši agent</h4>
        <ul>
          <li class="line">Tehnička i prodajna pomoć ostalim agentima u pozivnom centru pri pozivima, unos prodajnih zahtjeva, odrađivanje administrativnih poslova, održavanje prodajnih i tehničkih Coachinga, analiza statistika i pomoć agentima u njihovom radu.</li>
          <li class="line">Zamjena Team Leadera te održavanje Team meetinga i huddle-ova.</li>
        </ul>
      </div>`
    case 2015-2017:
      return `<div class="cv-text">
        <h3 class="line">Hrvatski telekom d.d.</h3>
        <p class="line">01.10.2015 – 03.09.2017</p>
        <h4 class="line">Specijalist za tehničku podršku (SMC)</h4>
        <ul>
          <li class="line">Otklon grešaka na drugoj razini, telefonska podrška tehničarima na terenu</li>
          <li class="line">Korištenje alata, udaljena dijagnostika, te udaljeni otklon poteškoća</li>
        </ul>
      </div>`
    case 2017-2021:
      return `<div class="cv-text">
        <h3 class="line">Hrvatski telekom d.d.</h3>
        <p class="line">04.09.2017 – 14.02.2021</p>
        <h4 class="line">Tehničar za telekomunikacije</h4>
        <ul>
          <li class="line">Održavanje i otklon grešaka na telekomunikacijskoj mreži</li>
          <li class="line">Rad na zračnoj i podzemnoj infrastrukturi, te rad kod korisnika na pretplatničkoj opremi</li>
          <li class="line">Komunikacija sa strankama, organizacija posla, te aktivna prodaja usluga</li>
          <li class="line">Obuka novih zaposlenika</li>
        </ul>
      </div>`
    case 2021-2022:
      return `<div class="cv-text">
        <h3 class="line">Libratel d.o.o.</h3>
        <p class="line">15.02.2021 – 31.01.2022</p>
        <h4 class="line">Kabelmonter</h4>
        <ul>
          <li class="line">Održavanje i otklon grešaka na telekomunikacijskoj infrastrukturi – zračna i podzemna mreža</li>
          <li class="line">Mjerenje i otklon kompleksnih grešaka sa mjernim instrumentom</li>
          <li class="line">Obuka novih zaposlenika</li>
        </ul>
      </div>`
    case 2022:
      return `<div class="cv-text">
        <h3 class="line">Libratel d.o.o.</h3>
        <p class="line">01.02.2022 – 14.11.2022</p>
        <h4 class="line">Voditelj građevinskih radova</h4>
        <ul>
          <li class="line">Izgradnja telekomunikacijske infrastrukture za firmu - Ericsson Nikola Tesla Servisi d.o.o.</li>
          <li class="line">Izrada tjednog/mjesečnog plana odrade zadataka, organizacija više timova za svakodnevnu odradu (kabelmonterski, građevinski), kontrola kvalitete radova, kontakt sa strankama, te naposlijetku unos obračuna i naplata odrađenog posla</li>
          <li class="line">Komunikacija i organizacija sa drugim voditeljima, te sa zaposlenicima</li>
          <li class="line">Naručivanje potrebnog materijala, kontrola skladišta</li>
        </ul>
      </div>`
    case 2023:
      return `<div class="cv-text">
        <h3 class="line">Ericsson Nikola Tesla Servisi d.o.o.</h3>
        <p class="line">15.11.2022 –</p>
        <h4 class="line">Voditelj skladišta</h4>
        <ul>
          <li class="line">Nabava potrebnog alata i materijala za izgradnju i održavanje telekomunikacijske infrastrukture</li>
          <li class="line">Izdavanje, preuzimanje i naručivanje opreme za 20+ zaposlenika</li>
          <li class="line">Koordinacija sa drugim voditeljima i zaposlenicima, te ispomoć u organizaciji posla</li>
        </ul>
      </div>`
    case 1:
      return `<h3>Što trenutno radim ?</h3>
      <ul>
        <li class="line">Tehnologije sa kojima radim su HTML, CSS, JS i ReactJS</li>
        <li class="line">Završen tečaj za Front-end developera na Algebri</li>
        <li class="line">Izrađujem web stranicu za frizerski salon</li>
        <li class="line">Vodim skladište</li>
      </ul>`
  }
}

