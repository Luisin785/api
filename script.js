let search = document.querySelector("#search");

search.addEventListener("click", (e)=>{
    let showName = document.querySelector("#showName").value;

    fetch(`http://www.omdbapi.com/?t=${showName}&apikey=9fe3fea2`, )
        .then(response => response.json())
        .then((json) => {

            let title = document.querySelector("#title");;
            let released = document.querySelector("#releaseDate");
            let rated = document.querySelector("#rated");
            let runtime = document.querySelector("#runtime");
            let genre = document.querySelector("#genre");
            let moviePoster = document.querySelector("#movie-poster img");
            let director = document.querySelector("#director");

            title.innerHTML = "Título: "+json.Title;
            released.innerHTML = "Lançamento: "+json.Released;
            rated.innerHTML = "Classificação indicativa: "+json.Rated;
            runtime.innerHTML = "Duração: "+json.Runtime;
            genre.innerHTML = "Gênero: "+json.Genre;
            director.innerHTML = "Diretor: "+json.Director;

            moviePoster.src = json.Poster;

        });
    
    
});
