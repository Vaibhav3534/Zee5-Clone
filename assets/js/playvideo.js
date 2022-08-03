showData();
async function showData() {
  setInterval(function () {
    let flag = localStorage.getItem("primeOrNotUser");
    if (flag == "false") {
      alert("Your Free time is over. Please purchase any plan to continue");
      window.open("./buyplan.html", "_self");
    }
  }, 10000);

  try {
    // let API_Key = "AIzaSyDq721ZEm-k4Gw4lsM7PdHupdVSho59-EY";
    // let API_Key = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";
    // let API_Key = "AIzaSyCftPbeNpkIfO1ZenM1gZyig6FwPPaFWUs";
    // let API_Key = "AIzaSyAvptm2s94qvpMCj-x6q_fAaU19Xm0ODdM";
    let API_Key = "AIzaSyD7v1w_pbXSgvMZ-QX1MLu_o7fLE8t1Kbg";
    let val = localStorage.getItem("PlayYoutube");
    console.log(val);
    let url = `https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=1&q=${val}&key=${API_Key}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    displayYouTubeVideo(data.items[0].id.videoId);
  } catch (error) {
    console.log(error);
  }
}
function displayYouTubeVideo(videoIDS) {
  let data = ` <iframe
    id="videoPlayer"
  src="https://www.youtube.com/embed/${videoIDS}"
  frameborder=0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>; `;
  let div = document.createElement("div");
  div.innerHTML = data;
  document.getElementById("PlayVideoPart").append(div);
}

showDataOnwindow();
function showDataOnwindow() {
  let MovieNameIN = localStorage.getItem("PlayYoutube");
  let url = `https://api.hotstar.com/s/sniper/forerunner?q=${MovieNameIN}&size=100`;
  moreMovieAppendSearch(url);
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
