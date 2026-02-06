const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const roseDay = [
    `You are a Rose of My Dream,
    You are a Rose of My Heart,
    You are a Rose of My Smile,
    You are a Rose of My Life...
    HAPPY ROSE DAY!`,
`I like to dream about mirrors, That there is a mirror world somewhere A little like ours but different at the same time And you and I are different But we are together. I like to believe whatever world we are in We are in love And together.`,
    `I am not great at big romantic statements, 
  but I do know that choosing you, 
  every day in small and quiet ways, 
  is something that comes naturally to me. 
  Happy Rose Day.`,
    `If you're here I hope you read everything,
    Anddddd I still think all of these things are 
    cringe 😂 but here I'm still doing it.
    And it feels like I don't know myself anymore 😂`
    
];

// Fetch configuration from config.json to set names.
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
  })
  .catch(error => console.error('Error loading config:', error));

const quotesNr = roseDay.length;

for (let i = 0; i < quotesNr; i++) {
  const link = document.createElement('a');
  link.setAttribute('href', 'card.html');
  const para = document.createElement("p");
  para.classList.add("quote");
  para.innerText = roseDay[i];
  link.appendChild(para);
  quotesDiv.appendChild(link);
}

// Add click listener to save the chosen quote to localStorage.
const quoteDivs = document.querySelectorAll(".quote");
quoteDivs.forEach(quote => {
  quote.addEventListener('click', function (e) {
    const chosenQuote = e.target.innerText;
    localStorage.setItem("chosenQuote", chosenQuote);
  });
});

