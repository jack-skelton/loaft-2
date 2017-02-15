$(function(){
      $(".element").typed({
        //strings: ["web developers.", "graphic designers.","solution architects."],
        strings: ["modern <strong>Web</strong> and <strong>Graphic</strong> design.", "digital specialists and growth hackers", ],
        typeSpeed: 10,
        loop: true,
        showCursor: false,
        backDelay: 2000,
        startDelay: 2000
      });
    });

$(function(){
      $(".dingo").typed({
        //strings: ["web developers.", "graphic designers.","solution architects."],
        strings: ["loaft "],
        typeSpeed: 30,
        loop: false,
        showCursor: true,
        backDelay: 3000,
        startDelay: 500
      });
    });


$(document).ready(function() {     
    $('.buckets1').hover(function(){     
        $('.line1').addClass('.blurb-container opacity');
        $('.line0').removeClass('.blurb-container opacity');    
    },     
    function(){    
        $('.line1').removeClass('.blurb-container opacity');
        $('.line0').addClass('.blurb-container opacity');      
    });
     $('.buckets2').hover(function(){     
        $('.line2').addClass('.blurb-container opacity');
        $('.line0').removeClass('.blurb-container opacity');    
    },     
    function(){    
        $('.line2').removeClass('.blurb-container opacity');
        $('.line0').addClass('.blurb-container opacity');      
    });
     $('.buckets3').hover(function(){     
        $('.line3').addClass('.blurb-container opacity');
        $('.line0').removeClass('.blurb-container opacity');    
    },     
    function(){    
        $('.line3').removeClass('.blurb-container opacity');
        $('.line0').addClass('.blurb-container opacity');      
    });
});  

    