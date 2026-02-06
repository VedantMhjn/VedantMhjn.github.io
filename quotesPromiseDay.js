const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const promiseDayQuotes = [
  `I promise to love you more with each passing day,
  And never let you go away.
  Happy Promise Day, sweetheart!`,
  `I promise to be someone you feel safe with—safe to talk to, 
  safe to be quiet around, 
  and safe to be yourself without needing to pretend or explain`,
  `I promise I would not always get things right, 
  but I will always care enough to try, 
  to apologize when needed, 
  and to choose us with honesty`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from the configuration
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;
    
    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    const quotesNr = promiseDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=promise');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = promiseDayQuotes[i];
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