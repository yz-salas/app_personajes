const apiURL = "https://rickandmortyapi.com/api/character";

const makeCard = (character) => {
  const { name, status, image } = character;
  
  const caracterTitle = document.createElement("h4");
  caracterTitle.textContent = name;

  const caracterStatus = document.createElement("p");
  caracterStatus.textContent = status;

  if (caracterStatus == "Alive") caracterStatus.style.color = "green";
  else caracterStatus.style.color = "gray";

  const caracterImage = document.createElement("img");
  caracterImage.src = image;
  caracterImage.width = 200;
  const contImage = document.createElement("div");
  contImage.id = "contImage"
  contImage.append(caracterImage);

  const contText = document.createElement("div");
  contText.append(caracterTitle, caracterStatus)
  contText.id = "contText";
  
  const Card = document.createElement("div");
  Card.append(contImage, contText);
  Card.id = "contInfo";
  
  const container = document.getElementById("cards-container");
  container.appendChild(Card);

};

async function getPersonajes() {
  try {
    const response = await fetch(apiURL);
    const { results } = await response.json();

    for (let i = 0; i < results.length; i++) {
      makeCard(results[i]);
    }

    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
getPersonajes();
