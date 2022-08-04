// import navbar from "../components/navbar.js";
// import { slidefn } from "../components/slidefn.js";

// let nav = document.getElementById('navbar');

// nav.innerHTML = navbar();

var zeeOriginalData = [
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51248/portrait/1920x770cac95b31db724e7eae3dd3401aad05a2.jpg",
        moviename: "Dial 100",

    },

    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51560/portrait/1920x770087ff5f6d15f44f98b6a27adc7130aac.jpg",
        moviename: "Helmet",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-369273/portrait/1920x7707c47b251e254462c80266717d90ba9be.jpg",
        moviename: "Silence...Can You Hear It?",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z573699/portrait/1920x77025b1b234a8ca480cae0f64c2e006f9e3.jpg",
        moviename: "36  Farmhouse",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51134/portrait/1920x7705ba0721ce7f4418aa2eb3de2c6863c90.jpg",
        moviename: "State of Siege: Temple Attack",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z562203/portrait/1920x770f86e37b3d5cd4766b4327cbb2b4608cc.jpg",
        moviename: "Antim: The Final Truth",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3187/portrait/1920x770d8a19e87180644a0a983d40116ef6baf.jpg",
        moviename: "Kori Khala",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z531922/portrait/1920x770f0c7e8ef8cbf47a8a5a8ac68dcedca73.jpg",
        moviename: "Jodhya Akbar",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3021/portrait/1920x7707464fcdbe7e54788aaf8031570f41c52.jpg",
        moviename: "Jiban Sathi",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-22/portrait/1920x770b68edeee6eed47febe62bc6035d1dc1c.jpg",
        moviename: "RannaGhar",

    },



    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z541514/portrait/1920x770a7f0b1b166ad4c27b6ccaeb8eec085ba.jpg",
        moviename: "Pilu",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3252/portrait/1920x770e86f02452ead429587c85e0a3e1fbc85.jpg",
        moviename: "Amader Ei Poth Jodi na Sesh Hoy",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3103/portrait/1920x770f9184713291d4a60a13420e3c6bc9c27.jpg",
        moviename: "Aparajita Apu",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3121/portrait/1920x77026b50f0fc02f4193a1417677ec00b009.jpg",
        moviename: "Mithai",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3328/portrait/1920x770611fdd1bb6a842938b3bc32c09a826d8.jpg",
        moviename: "Sorbojaya",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3493/portrait/1920x770e95592d66bc04e4e89b807cbf6e37184.jpg",
        moviename: "Uma",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z587354/portrait/1920x770d654eabf22fc4471aaa4e04da5828833.jpg",
        moviename: "Lakki kakima",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z587360/portrait/1920x770ce1b009d79e24e6f995f91987203e1f7.jpg",
        moviename: "Didi Number 1",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3731/portrait/1920x770a7fc19d082c444dba4ec7aaf78e4e4cc.jpg",
        moviename: "DadaGiri Unlimited",

    },
    {
        img_url: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-2887/portrait/1920x7704bd494eaa6f5459e9a4a9d4232cd95ca.jpg",
        moviename: "Jomuna Dhaki",

    },




]


function slidefn(data) {

    data.forEach(function (ele) {
        let card = document.querySelector(".cardbox_container");
        card.innerHTML = card.innerHTML +`<div class="cardbox">
            <img src="${ele.img_url}" alt="Mithya" />
            <div class="crownicon">
              <a href="#"><i class="fa-solid fa-crown"></i></a>
            </div>
            <div class="text_content">
              <h2>${ele.moviename}</h2>
              <div class="bottom_text">
                <div class="watch-btn1">
                <a href="">
                  <i class="fa-solid fa-play " ></i> Watch</
                </a>
                </div>
                <p><i class="fa-solid fa-share-nodes"></i> More</p>
              </div>
            </div>
          </div>`
    })
}
// let card = document.querySelector(".cardbox_container");

slidefn(zeeOriginalData);

async function getdata() { 
    let url = "http://www.omdbapi.com/?apikey=d6f2de94&s=marvel";
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    slidefn1(data.Search);
}
getdata();


function slidefn1(data) {
    
    data.forEach(function (ele) {
        let card = document.querySelector(".cardbox_container1");
        card.innerHTML = card.innerHTML + `<div class="cardbox">
            <img src="${ele.Poster}" alt="Mithya" />
            <div class="crownicon">
              <a href=""><i class="fa-solid fa-crown"></i></a>
            </div>
            <div class="text_content">
              <h2>${ele.Title}</h2>
              <div class="bottom_text">
                <div class="watch-btn1">
                
                  <i class="fa-solid fa-play " ></i> Watch</
                
                </div>
                <p><i class="fa-solid fa-share-nodes"></i> More</p>
              </div>
            </div>
          </div>`
    })
}
// slidefn1(zeeOriginalData);

document.querySelectorAll(".watch-btn1").forEach(function (btn) { 
    btn.addEventListener("click", function () { 

        let keyvalue = btn.parentNode.parentNode.childNodes[1].innerHTML;
        console.log("keyvalue");
        localStorage.setItem("PlayYoutube", keyvalue);
        // location.href = "./playvideo.html";
    });
})

// PlayYoutube
// ./playvideo.html