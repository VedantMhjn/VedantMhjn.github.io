const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const roseDay = [
  `I didn’t plan anything grand for Valentine’s Day—just 
  wanted to spend it thinking about someone 
  who makes ordinary days better.`,
  `Valentine’s Day isn’t really my thing, 
  but appreciating someone who’s made 
  my days better definitely is.`,
  `Sooo will you be myyy valentine?
  mat socho kuch, yeh waisebhi formality 
  keliye puchha hai😂.
  karan No ch option nahich dil mi 
  tula 🤩🥰`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    const quotesNr = roseDay.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=valentine');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = roseDay[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => console.error('Error loading config:', error));