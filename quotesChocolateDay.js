const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const chocolateDayQuotes = [
  `Just like chocolate melts in the mouth,
  Your love melts my heart.
  Wishing you a very Happy Chocolate Day!`,
  `Life is like a box of chocolates,
  And you are the sweetest one in it.
  Happy Chocolate Day, sweetheart!`,
  `Just like chocolate makes everything better,
  Your presence makes my life sweeter.
  Happy Chocolate Day, my love!`,
  `You are the reason my life is so sweet,
  Just like chocolate, you make everything complete.
  Happy Chocolate Day, sweetheart!`,
  `Just like chocolate, you are irresistible,
  And I feel like eating you up 
  ani haa jast dok nko chalvu tuz hyacha vr,
  ts pn tuz dok jast aghau chalt 😆.
  Happy Chocolate Day, my love!`,
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

    // Build quote links from chocolateDayQuotes.
    const quotesNr = chocolateDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=chocolate');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = chocolateDayQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    // Add click listener on each quote to save the chosen quote to localStorage.
    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => console.error('Error loading config:', error));