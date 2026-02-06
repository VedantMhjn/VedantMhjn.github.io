// First, fetch the configuration data.
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Use the configuration values
    const fpNameEl = document.querySelector("#fpname");
    const spNameEl = document.querySelector("#spname");

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    fpNameEl.innerText = config.fpName;
    spNameEl.innerText = config.spName;

    // Then generate the quotes for Hug Day
    const quotesDiv = document.querySelector(".quotes");

    const hugDayQuotes = [
      `A hug is a way to say, "I care,"
A hug is a way to show, "I am there."
Happy Hug Day, my love!`,
`A hug from you is all I need,
To feel loved and freed.
Happy Hug Day, darling!`,
      `A hug from you is my favorite therapy,
It heals my heart and sets me free.
Happy Hug Day, sweetheart!`
    ];
    
    const quotesNr = hugDayQuotes.length;

    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=hug');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = hugDayQuotes[i];
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
  .catch(error => {
    console.error('Error loading config:', error);
  });