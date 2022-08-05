
const confi = {
    type: "carousel",
    startAt: 1,
    perView: 1,
    peek: {
        before: 200,
        after: 200,
    },
    gap: 80,
    autoplay: 2000,
    hoverpause: false,
    animationDuration: 500,
};
new Glide(".glide", confi).mount();