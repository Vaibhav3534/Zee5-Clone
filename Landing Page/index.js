import navbar from './components/navbar.js';

// let navdiv = document.getElementById("navbar_div")
// navdiv.innerHTML = navbar();

let container = document.getElementById("card_container")

async function getdata(){
    try {
        let search = document.getElementById("search").value;
        let url = `https://api.hotstar.com/s/sniper/forerunner?q=movies&size=1`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)

        // return data.results;
    }
     catch (error) {
        console.log("Error in fetching api data")
    }
}

getdata();