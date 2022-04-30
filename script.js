setInterval(() => {

    let ss = document.getElementById("ss");

    let sec_dots = document.querySelector('.sec_dots');

    let s = new Date().getSeconds();

    ss.style.strokeDashoffset = 1575 - (1575 * s) / 60;

    sec_dots.style.transform = `rotate(${s * 6}deg)`;
    // 360/60 = 6
})
const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
})