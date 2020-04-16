//"use strict";
//
//$(document).ready(function(){
// var start =  $("#start");
// var end = $("#end");
// var maze = $("#maze");
// var boundary = $(".boundary");
// var gameStart = false;
// maze.mouseleave(function(){ loss() });
//
// start.click(function(){
//  $("#status").text('Move mouse to End in order to win the game');
//  gameStart = true;
//  if(boundary.hasClass('youlose')){
//   boundary.removeClass('youlose');
//  }
//  boundary.mousemove(function(){ loss(); }) 
// });
//
// end.mousemove(function(){
//  if(gameStart == true) won(); 
//  else if(gameStart && boundary.hasClass('youlose'))  loss(); 
// 
// });
//
// function won(){
//  alert("Hurry!!! you won");
//  gameStart = false;
//  $("#status").text("Hurry!!! you won! please collect your prize money.");
// }
//
// function loss(){
//  if(gameStart){
//   gameStart = false;
//   boundary.addClass('youlose');
//   $("#status").text('So Sad !!!You lose the game, Try next time');
//  }
// }
//
//
//})


var end = $("#end");
var maze = $("#maze");
var stat = $("#status");
var boundary = $(".boundary");
var gameStart = false;
var start =  $("#start").click(function(){
    gameStart = true;
    boundary.css("background-color", "black")
    if(boundary.hasClass('lost')){
        boundary.removeClass('lost');
    }
    boundary.mouseover(function(){lost();})
    maze.mouseleave(function(){lost();})
    end.mouseover(function(){won();})


 })


function lost(){
    if(gameStart == true){
        gameStart = false
        console.log("hi");
        boundary.css("background-color", "red");
        stat.text('Loser');

    }
}

function won(){
    if(gameStart == true){
        stat.text('Winner');

    }
}
        

    