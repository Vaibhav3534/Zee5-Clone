showDataOnwindow();
function showDataOnwindow() {
  let MovieNameIN = localStorage.getItem("moreMoviesDataSerch");
  let url = `https://api.hotstar.com/s/sniper/forerunner?q=${MovieNameIN}&size=100`;
  moreMovieAppendSearch(url);
  document.getElementById("NameSearchedFor").innerText = MovieNameIN;
}
async function moreMovieAppendSearch(MovieUrl) {
  try {
    let url = MovieUrl;
    let response = await fetch(url);
    let data = await response.json();
    ShowMoreResultsInPage(data.body.results.items);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
function ShowMoreResultsInPage(movie) {
  document.getElementById("More-Page-Content-IMG").innerHTML = "";
  movie.map(function (ele) {
    let ImgM = `  <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/${ele.images.h}"
          alt=""
        />
        <div>
          <h4>${ele.title}</h4>
          <p>${ele.contentType}</p>
          <button><i class="fa-solid fa-play"></i>Watch</button>
        </div>`;
    let div = document.createElement("div");
    div.innerHTML = ImgM;
    div.setAttribute("onclick", `PlayYoutubeVideo('${ele.title}')`);
    document.getElementById("More-Page-Content-IMG").append(div);
  });
}
function PlayYoutubeVideo(ele) {
  console.log(ele);
  localStorage.setItem("PlayYoutube", ele);
  window.open("playvideo.html", "_self");
}
