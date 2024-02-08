
//klavyede herhangi bir tuşa basıldığında gerçekleşen eventi veriyor.
// window.addEventListener("keydown", function (e) {
//     console.log("keyboardEvent", e);
// })




// window.addEventListener("keydown", function (e) {

//e.keyCode dan aldığım değer data-key değerime eşit olduğunda audio olarak seçiyoruz.
//     const audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`)
// console.log(key[0])
// console.log(audio);
//     if (!audio[0]) return; //audio elementi gelmiyorsa fonksiyonu durdur.
//     audio[0].currenTime = 0;
//Bu, bir ses klibinin oynatımının yeniden başlatılması veya sesin yeniden oynatılmadan önce başlangıç konumuna sıfırlanması gibi çeşitli senaryolarda yararlı olabilir.
//     audio[0].play();
//audio tek elemantlı nodelist döndüğü için 0 ınsıcı bana audio sesini veriyor.
//klavyede herhangi bir tuşa basıldığında tuşun key codunu veriyor.
// console.log("keyboardEvent", e.keyCode);
//     key[0].classList.add("playing");


// })




function playSound(e) {
    //e.keyCode dan aldığım değer data-key değerime eşit olduğunda audio olarak seçiyoruz.
    const audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`)
    // console.log(key[0])
    // console.log(audio);
    if (!audio[0]) return; //audio elementi gelmiyorsa fonksiyonu durdur.
    audio[0].currenTime = 0;
    //Bu, bir ses klibinin oynatımının yeniden başlatılması veya sesin yeniden oynatılmadan önce başlangıç konumuna sıfırlanması gibi çeşitli senaryolarda yararlı olabilir.
    audio[0].play();
    //audio tek elemantlı nodelist döndüğü için 0 ınsıcı bana audio sesini veriyor.
    //klavyede herhangi bir tuşa basıldığında tuşun key codunu veriyor.
    // console.log("keyboardEvent", e.keyCode);
    key[0].classList.add("playing");

}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //property name transforma eşit değilse geç.
    console.log(e.propertyName); //
    console.log(this);
    this.classList.remove('playing'); // playing class'ını kaldır.
}

const keys = document.querySelectorAll(".key");

// console.log(keys);
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
    //transitionend – bir CSS animasyonu bittiğinde tetikleniyor.
});

window.addEventListener("keydown", playSound);












//codes which written by me 


// const keyDiv = document.querySelectorAll(".key");
// // console.log(key[0]);
// keyDiv.forEach((item) => {
//     item.addEventListener("mouseenter", (e) => {
//         //   Add the "playing" class to the item when the mouse enters
//         e.target.classList.add("playing");
//         // Call the removeTransition function after a delay of 300ms
//         setTimeout(() => removeTransition(e), 800);
//     });
// })
// 



//key nodelistinin içindeki bütün itemlara elemanlara event ekleyelim.mouse enter olduğu zaman removeTransition fonksiyonu çağrılsın.

//removeTransition fonksiyonunu tanımlayalım.

// Add event listener to each of the generated key elements









// key.forEach((item) => {
//     item.addEventListener('mouseleave', removeTransition);
// });





