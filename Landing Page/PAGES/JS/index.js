

async function moreMovieAppendSearch(MovieUrl, container) {
    try {
        let url = MovieUrl;
      let response = await fetch(url);
      let data = await response.json();
      ShowMoreResultsInPage(data.body.results.items, container);
      console.log(data.body.results.items);
    } catch (error) {
      console.log(error);
    }
  }

let container1 = document.getElementById("card_container")
let container2 = document.getElementById("card_container2")
let container3 = document.getElementById("card_container3")
let container4 = document.getElementById("card_container4")

let url1 = `https://api.hotstar.com/s/sniper/forerunner?q=exclusive&size=12`;
let url2 = `https://api.hotstar.com/s/sniper/forerunner?q=spark&size=12`
let url3 = `https://api.hotstar.com/s/sniper/forerunner?q=Baarish Aur Chowmein&size=12`
let url4 = `https://api.hotstar.com/s/sniper/forerunner?q=series&size=12`

moreMovieAppendSearch(url1, container1);
moreMovieAppendSearch(url2, container2);
moreMovieAppendSearch(url3, container3);
moreMovieAppendSearch(url4, container4);

function ShowMoreResultsInPage(movie, container) {
    movie.map(function (ele, index) {
      let ImgM = `
        <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/${ele.images.h}"
            alt="" class = "card_image"
          />
          <div class="EffectDivForHover">
            <h5>${ele.title}</h5>
            
            <button><i class="fa-solid fa-play"></i>Watch</button>
          </div>`; 

      let div = document.createElement("div");
      div.innerHTML = ImgM;
      div.setAttribute("onmouseover", `showDivEffect('${index}')`);
      div.setAttribute("onmouseleave", `removediveEffect('${index}')`);
      div.setAttribute("onclick", `PlayYoutubeVideo('${ele.title}')`);
      container.append(div);
    });
  } 

  function PlayYoutubeVideo(ele) {
    localStorage.setItem("PlayYoutube", ele);
    location.href = "./Zee5-Clone-LoginAndSignUp/playvideo.html"
  }

  function showDivEffect(index) {
    let hoverEffect = document.querySelectorAll(".EffectDivForHover");
    hoverEffect[index].style.display = "flex";
  }

  function removediveEffect(index) {
    let hoverEffect = document.querySelectorAll(".EffectDivForHover");
    hoverEffect[index].style.display = "none";
  }
