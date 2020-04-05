const powerC = document.querySelector("#on");
const oneC = document.querySelector("#channelOne");
const twoC = document.querySelector("#channelTwo");
const threeC = document.querySelector("#channelThree");
const fourC = document.querySelector("#channelFour");
const fiveC = document.querySelector("#channelFive");
const sixC = document.querySelector("#channelSix");
const block = document.querySelector("#block");
const title = document.querySelector("#title");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const main = document.querySelector('main');



powerC.addEventListener("click", powerClicked);
function powerClicked(){
    if (block.style.visibility == "visible"){
        console.log("hi");
        main.style.backgroundImage = "url('https://i.gifer.com/757C.gif')";
         block.style.visibility = "hidden";
         one.style.visibility = "hidden";
         two.style.visibility = "hidden";
         three.style.visibility = "hidden";
         four.style.visibility = "hidden";
         five.style.visibility = "hidden";
         six.style.visibility = "hidden";
        title.style.visibility = "visible";
    }else{
         block.style.visibility = "visible";
        title.style.visibility = "hidden";
        main.style.backgroundImage = "none";
        one.style.visibility = "hidden";
        two.style.visibility = "hidden";
        three.style.visibility = "hidden";
        four.style.visibility = "hidden";
        five.style.visibility = "hidden";
        six.style.visibility = "hidden";

}
}

oneC.addEventListener("click", oneClicked);
function oneClicked(){
    title.style.visibility = "hidden";
    one.style.visibility = "visible";
    block.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
}
twoC.addEventListener("click", twoClicked);
function twoClicked(){
    one.style.visibility = "hidden";
    two.style.visibility = "visible";
    block.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
   title.style.visibility = "hidden";
}
threeC.addEventListener("click", threeClicked);
function threeClicked(){
    two.style.visibility = "hidden";
    three.style.visibility = "visible";
    one.style.visibility = "hidden";
    block.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
   title.style.visibility = "hidden";
}
fourC.addEventListener("click", fourClicked);
function fourClicked(){
    three.style.visibility = "hidden";
    four.style.visibility = "visible";
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    block.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
   title.style.visibility = "hidden";
}
fiveC.addEventListener("click", fiveClicked);
function fiveClicked(){
    four.style.visibility = "hidden";
    five.style.visibility = "visible";
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    block.style.visibility = "hidden";
    three.style.visibility = "hidden";
    six.style.visibility = "hidden";
   title.style.visibility = "hidden";
}
sixC.addEventListener("click", sixClicked);
function sixClicked(){
    five.style.visibility = "hidden";
    six.style.visibility = "visible";
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    block.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
   title.style.visibility = "hidden";
}

