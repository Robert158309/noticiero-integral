fetch("./assets/data/verses.json")

  .then(res => res.json())
  .then(data => {
    const random = data[Math.floor(Math.random() * data.length)];

    document.getElementById("verse-text").textContent = random.text;
    document.getElementById("verse-ref").textContent = random.ref;
  });


const cards = document.querySelectorAll(".card-container");

cards.forEach(cardContainer => {

    cardContainer.addEventListener("click", () => {

        const card = cardContainer.querySelector(".card");

        card.classList.toggle("flipped");

    });

});