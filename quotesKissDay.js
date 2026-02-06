const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const kissDayQuotes = [
  `There is something really sweet about not 
  having kissed yet, like the story is still building 🏗️`,
  `But still no kisses yet, I would be lying if I said 
  I had not thought about what that moment might feel like 😉.`,
  `Chalo bs hogya mere flirting ka quota khatam 🤣`

];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    // Build quote links from kissDayQuotes
    const quotesNr = kissDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=kiss');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = kissDayQuotes[i];
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