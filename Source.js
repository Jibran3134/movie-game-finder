
function submit() {
    const container = document.querySelector(".movie-container");
     const el = document.querySelector(".error-message");
           el.innerHTML = "";
    container.innerHTML = "";
    
    let title = document.querySelector("#title").value;
    let year = document.querySelector("#year").value;
    let dropdown = document.querySelector("#dropdown").value;
    
    (async function () {
        const promise = await fetch(`http://www.omdbapi.com/?apikey=a13e7b3&s=${title}&y=${year}&plot=${dropdown}`);
        console.log(promise.status);
        const response = await promise.json();
            display(response);
        console.log(response);
        if (response.Response=="False") {
            let el = document.querySelector(".error-message");
           el.innerHTML = "<h1> Movie not found</h1>";
        }
    })();
}
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        document.querySelector("#btn").click();
    }
});

function display(data) {
    if(data.Search)
      for (let i = 0; i < 10 && i < data.Search.length; i++) {
          const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${data.Search[i].Poster}" alt="Image not found">
      <div class="movie-info">
        <h2>${data.Search[i].Title}</h2>
        <p><strong>Type:</strong> ${data.Search[i].Type}</p>
        <p><strong>Year:</strong> ${data.Search[i].Year}</p>
      </div>
    `;
        document.querySelector(".movie-container").appendChild(card);
  }
}