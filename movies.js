async function getMovies()
{
    let search=document.querySelector(".search")
    console.log(search.value);
    let ombdmovies=await fetch(`https://omdbapi.com/?s=${search.value}&apikey=d4709f54`);
    let {Search:movies}=await ombdmovies.json();
    

    let section=document.getElementById("movie");

    for(let {Poster,Title,Year} of movies)
    {
        let div=document.createElement("div");
        div.className="card";

        let h2=document.createElement("h2");
        h2.innerText=Title

        let img=document.createElement("img")
        img.src=Poster;
        img.alt="No Image";

        let h3=document.createElement("h3");
        h3.innerText=Year;

        div.append(h2)
        div.append(img)
        div.append(h3)
        
        section.append(div)

    }
}

function removeMovies()
{
    let search=document.querySelector(".search")
    let section=document.getElementById("movie");

    console.log("not empty");

    if(search.value=="")
    {
        section.remove();
        let mysection=document.createElement("section")
        mysection.id="movie"
        let body=document.body;
        body.append(mysection)
    }
}

/* function invalidMovie()
{
    let search=document.querySelector(".search")
    let section=document.getElementById("movie");

    console.log("not empty");

    if(search.value=="")
    {
        section.remove();
        let mysection=document.createElement("section")
        mysection.id="movie"
        let body=document.body;
        body.append(mysection)
    }
}
*/

