function slidefn(data,parentNode) {
    return data.forEach(function (ele) {
        `${parentNode}.innerHTML = ${parentNode}.innerHTML + <div class="cardbox">
            <img src="${ele.img_url}" alt="Mithya" />
            <div class="crownicon">
              <a href="#"><i class="fa-solid fa-crown"></i></a>
            </div>
            <div class="text_content">
              <h2>${ele.moviename}</h2>
              <div class="bottom_text">
                <div class="watch-btn1">
                
                  <i class="fa-solid fa-play " ></i> Watch
                </div>
                <p><i class="fa-solid fa-share-nodes"></i> More</p>
              </div>
            </div>
          </div>`
    })
}
export { slidefn };