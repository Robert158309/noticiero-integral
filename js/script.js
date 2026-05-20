fetch("./assets/data/verses.json")

  .then(res => res.json())
  .then(data => {
    const random = data[Math.floor(Math.random() * data.length)];

    document.getElementById("verse-text").textContent = random.text;
    document.getElementById("verse-ref").textContent = random.ref;
  });


/* ----------------------------------------------------------- */

const cards = document.querySelectorAll(".card-container");

cards.forEach(cardContainer => {

    cardContainer.addEventListener("click", () => {

        const card = cardContainer.querySelector(".card");

        card.classList.toggle("flipped");

    });

});

/* ----------------------------------------------------------- */

fetch("../assets/data/team.json")
    .then(response => response.json())
    .then(data => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const profile = data[id];

    document.getElementById("profile-image").src = profile.image;
    document.getElementById("name").textContent = profile.name;
    document.getElementById("identification").textContent = profile.identification;
    document.getElementById("birth").textContent = profile.birth;
    document.getElementById("area").textContent = profile.area;
    document.getElementById("summary").textContent = profile.summary;

});