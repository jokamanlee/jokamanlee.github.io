//credit:stackoverflow.com with helping me with many things

var person = $('#person');
var personS = $('#personS');
var person2 = $('#person2');
var width = $(window).width();

//This makes the person walk with the arrow keys
$(document).keydown(function(e){
    if($('body').is('#Spring')){
            
        switch(e.which){
            case 37:

                personS.hide();
                personS.finish().animate({left: "-=50"});
                personS.attr("src", "images/c2.png").show();
                var y = personS.offset().left;
                var l = $("#springGround").width();
                break;
            case 39:

                personS.hide();
                personS.finish().animate({left: "+=50"});
                personS.attr("src", "images/c1.png").show();
                var y = personS.offset().left;
                var l = $("#springGround").width();
                break;
            
        }
    }

    else{
        switch(e.which){
            case 37:
                person.hide();
                person.finish().animate({left: "-=50"});
                person.attr("src", "images/c2.png").show();

                var x = person.offset().left;
                var f = $("#fallGround").width();
                var w = $("#winterGround").width();
                break;
            case 39:
                person.hide();
                person.finish().animate({left: "+=50"});
                person.attr("src", "images/c1.png").show();

                var x = person.offset().left;
                var f = $("#fallGround").width();
                var w = $("#winterGround").width();
                break;

        }
    }
    //this changes the screen when the person reaches a certain point in the screen
    if($('body').is('#Fall')){
        console.log(f);
        console.log(x);

        if (x > f)
            {
                window.location = "Winter.html"
            }
        }
    if($('body').is('#Winter')){
        if (x > w){
            window.location = "Spring.html"
        }
    }
    if($('body').is('#Spring')){
        if (y > l){
            window.location = "Summer.html"
        }
    }
    
})

//makes it so you can't scroll in the screen
$('html, body').css({
    overflow:'hidden',
    height:'100%'
    
})

if($('body').is('#end')){
    $('html, body').css({
    overflow:'auto',
    height:'auto'
    
    })
}



//FALL


//creates and makes the leaves fall

function fallingYLeaves() {
    var yleaves = $(), ct = 3;
        
    for (var i = 0; i < ct; ++i) {
        var yleave = $('<div class="yleaves"></div>');
        yleave.css({
            //sets a random position
            'left': (Math.random() * ($('#Fall').width() / .5)) + 'px',
            'top': ($('#yellowBush').height()) + 'px'
        });
        //creates the new leaf
        yleaves = yleaves.add(yleave);
    }
    //brings it to the front
    $('#YleaveZone').prepend(yleaves);
    
    //makes it move
    yleaves.animate({
        top: "100%",
        left:"-50%",

        opacity : "1",
            

    }, Math.random() + 5000, function(){
        $(this).remove();

    });
    $('#yellowBush').animate({opacity:'-=.10'} );
}
function fallingRLeaves() {
    
    var rleaves = $(), ct = 3;
        
    for (var i = 0; i < ct; ++i) {
        var rleave = $('<div class="rleaves"></div>');
        rleave.css({
            'left': (Math.random() * ($('#Fall').width() / .5)) + 'px',
            'top': ($('#redBush').height()) + 'px'
        });
        rleaves = rleaves.add(rleave);
    }
    $('#RleaveZone').prepend(rleaves);
    

    rleaves.animate({
        top: "100%",
        left:"100%",
        opacity : "1",
            

    }, Math.random() + 5000, function(){
        $(this).remove();

    });
    $('#redBush').animate({opacity:'-=.10'} );
}
function fallingOLeaves() {
    
    var oleaves = $(), ct = 3;
        
    for (var i = 0; i < ct; ++i) {
        var oleave = $('<div class="oleaves"></div>');
        oleave.css({
            'left': (Math.random() * ($('#Fall').width() / .5)) + 'px',
            'top': ($('#orangeBush').height()) + 'px'
        });
        oleaves = oleaves.add(oleave);
    }
    $('#OleaveZone').prepend(oleaves);
    

    oleaves.animate({
        top: "100%",
        left:"50%",

        opacity : "1",
            

    }, Math.random() + 5000, function(){
        $(this).remove();

    });
    $('#orangeBush').animate({opacity:'-=.10'} );

}

//clicked funtion to run the leaves falling

$('#Fall').click( function(event){
    fallingOLeaves();
    fallingYLeaves();
    fallingRLeaves();
    $('#wind')[0].play();
})

//makes the sun move on its own and stop at a certain point
var limit = false;
var sun = $('#sun');
setInterval(function(){
    
    if ($('body').is('#Fall')){
        
        var y = sun.offset().top;

        if (y > 670){
            limit = true;
            console.log("hi");
        }
        var top = parseInt(sun.css("top"));
 
        sun.animate({top: top + 50 + "px"}, 350);
        if(limit == true){
            sun.stop();
        }}}, 2000);





//WINTER

// Snow Falling
function fallingSnow() {
    
    var snows = $(), qt = 20;
        
    for (var i = 0; i < qt; ++i) {
        var snow = $('<div class="snows"></div>');
        snow.css({
            'left': (Math.random() * $('#Winter').width()) + 'px',
            'top': (- Math.random() * $('#Winter').height()) + 'px'
        });
        snows = snows.add(snow);
    }
    $('#snowZone').prepend(snows);

    snows.animate({
        top: "100%",
        opacity : "0",
        
    }, Math.random() + 5000, function(){
        $(this).remove();

    });
}

$('#cloud').click(function(event){
        fallingSnow();
    
    
    })

$('#yes').click(function(event)
{
    $('.snowman').css('visibility', 'visible');
    $('#yes').css('visibility', 'hidden');
    $('#no').css('visibility', 'hidden');

    
    
})

$('#no').click(function(event){
    $('#okay')[0].play();
    $('#yes').css('visibility', 'hidden');
    $('#no').css('visibility', 'hidden');


})
/*SPRING*/
//petals falling
function fallingBlossom() {
    
    var petals = $(), qt = 20;
    for (var i = 0; i < qt; ++i) {
            console.log("herespring");

        var petal = $('<div class="petals"></div>');
        petal.css({
            'left': (Math.random() * $('#Spring').width()) + 'px',
            'top': (- Math.random() * $('#Spring').height()) + 'px'
        });
        petals = petals.add(petal);
    }
    $('#petalZone').prepend(petals);

    petals.animate({
        top: "100%",
        opacity : "0",
            

    }, Math.random() + 5000, function(){
        $(this).remove();

    });
}

function blossom(){

    var blossoms = $(), ct = 3;
    for(var i = 0; i < ct; ++i)
    {
    
        var blossom = $('<div class="blossom"></div>');
        blossom.css({
            position:"absolute",
            'left': (Math.random() * $('.springBush').width()) + 'px',
            'top': (- Math.random() * $('.springBush').height()) + 'px'});
        blossoms = blossom.add(blossom);
        }
    $(".springBush").prepend(blossom);
       
}
$(".springBush").click(function(event)
{
    fallingBlossom();
    var blossoms = $();

    var blossom = $('<div class="blossom"></div>');
    blossom.css({
            position:"absolute",
            'top': event.pageY - $(".scaleable-wrapper").offset().top -  $(".springBush").offset().left - 100 + "px",
            'left': event.pageX - $(".scaleable-wrapper").offset().left - $(".springBush").offset().left - 100 + "px", 
        })
    blossoms = blossom.add(blossom);
    
    $(".springBush").append(blossom);  
    
})
//adds flower to where you click to the body
$("#Spring").click(function(event)
{
    var flowers = $();
    var flower = $('<img class = "flower" src = "images/flower%20copy.png">');
    flower.css({
        position:"absolute",
        'top':event.pageY - $('#Spring').offset().top - 30 + "px",
        'left':event.pageX - $('#Spring').offset().left - 30 + "px",
    })
    flowers = flower.add(flower);
    $("#Spring").append(flower);
    
})

//SUMMER//
//timeout functions that when activated leads to a series of events
var img = document.createElement('img');
img.src = 'https://i.gifer.com/3q62.gif';
$("#hotSun").click(function(event){
    console.log("here");
    $("#fire").css('visibility', 'visible');
    setTimeout(function(){
          $('#summerBush').fadeOut("slow");
      }, 5000);
    setTimeout(function(){
          $('#Tree').fadeOut("slow");
      }, 7000);
    setTimeout(function(){
          $('#Summer').css({backgroundImage: "url("+img.src+")"});
      }, 7000);
    setTimeout(function(){
          $('#fire').css("visibility", "hidden");
      }, 7000);
    setTimeout(function(){
        $('#summerGround').css("background-color", "black");
    }, 8000);
    setTimeout(function(){
        window.location = "end.html";
               }, 10000);
  
    
 })




    
