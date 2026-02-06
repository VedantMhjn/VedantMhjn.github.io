const quotesDiv = document.querySelector(".quotes");
const fpNameEl = document.querySelector("#fpname");
const spNameEl = document.querySelector("#spname");

const proposeQuotes = [
 `Soooo aaj propose day ahe,
 pn tu tr already mazi ahes 😄,
 so ata kharch mala sucht nhi ki kay bolu.
 But I've a song for you. Yupp that's it, the 
 one you're hearing right now.`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpNameEl.innerText = config.fpName;
    spNameEl.innerText = config.spName;
    
    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    const quotesNr = proposeQuotes.length;
    
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=propose');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = proposeQuotes[i];
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

