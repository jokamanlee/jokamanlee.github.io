var end = $("#end");
var maze = $("#maze");
var stat = $("#status");
var stat2 = $("#status2");
var boundary = $(".boundary");
var body = $(".body");
var body3 = $(".body3");
var gameStart = false;
var start = $("#start").click(function(){
    gameStart = true;
    body.css("background-color", "lightblue");

    boundary.css("background-color", "black")
    if(boundary.hasClass('lost')){
        boundary.removeClass('lost');
    }
    boundary.mouseover(function(){lost();})
    maze.mouseleave(function(){lost();})
    end.mouseover(function(){won();})
    stat2.text('go!')
 })

function lost(){
    if(gameStart == true){
        gameStart = false;
        console.log("hi");
        body.css("background-color", "red");
        body3.css("background-color", "red");
        $('#lose')[0].play()

        stat.text('YOU LOST!');
        stat2.text('tap yellow bar to restart')
    }
}

function won(){
    if(gameStart == true){
        gameStart = false;
        stat.text('YOU WON!');
        body.css("background-color", "green");       body3.css("background-image", "url('https://i.pinimg.com/originals/49/07/82/49078239072dee326254d6a0d1a34ea9.gif')");
        $('#work')[0].play()
        if($('body').is('.body3')){
            stat.text('YOU FINISHED THE GAME!');

        }

        

        stat2.text('tap yellow bar to restart')


    }
}