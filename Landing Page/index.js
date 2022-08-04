import navbar from './components/navbar.js';

// let navdiv = document.getElementById("navbar_div")
// navdiv.innerHTML = navbar();



async function getdata(){
    try {
    
        let url = `https://api.hotstar.com/s/sniper/forerunner?q=all&size=`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.body.results.items)
        display(data.body.results.items)
        // return data.body.results.items;
    }
     catch (error) {
        console.log("Error in fetching api data")
    }
}

getdata();
// display(getdata())
let container = document.getElementById("card_container")

function display(getdata){
    // container.innerHTML = "";
    getdata.forEach(function (movie){
        let div = document.createElement("div");
        let namediv = document.createElement("div");
        let imagediv = document.createElement("div");
        let name = document.createElement("h3");
        name.textContent = movie.title;
        namediv.append(name);
        // namediv.style.border = "1px solid red"
        name.style.color = "white"

        let image = document.createElement("img");
        image.classList.add("images")
        // image.src = movie.images.h;
        image.src = `https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/${movie.images.h}`
        image.setAttribute("alt","Cant Load");
        image.style.color = "white";
        imagediv.append(image);


        https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/${ele.images.h}

        
        
        // div.onclick =  function detail(){
        //     container.innerHTML ="";
        //     let main = document.getElementById("main");
        //     main.innerHTML =""
            
        //     let div = document.createElement("div");

        //     let namediv = document.createElement("div");
        //     let imagediv = document.createElement("div");
            
        //     namediv.append(`Movie Title : ${movie.title}`);
        //     name.style.color = "white"

        //     let image = document.createElement("img");
        //     image.classList.add("poster")
        //     image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        //     image.setAttribute("alt","Cant Load");
        //     image.style.color = "white";
        //     imagediv.append(image);
        //     let overview = document.createElement("p");
        //     overview.innerText = `Movie Overview : ${movie.overview}`;
        //     let rating = document.createElement("p");
        //     rating.innerText = `Rating : ${movie.vote_average}`
        //     main.append(imagediv, namediv, overview, rating)
           
        //     console.log(movie);
        // }

        div.append(imagediv, namediv);
        container.append(div);
        // container.style.backgroundColor = "black";
        
        //     container.style.border = "0.1px solid whitesmoke";
    }) 


}
