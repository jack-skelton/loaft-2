

$(function(){
      $(".dingo").typed({
        //strings: ["web developers.", "graphic designers.","solution architects."],
        strings: ["loaft -"],
        typeSpeed: 30,
        loop: false,
        showCursor: true,
        backDelay: 3000,
        startDelay: 500,
        callback: function(){
          this.showCursor = false;
          $( ".typed-cursor" ).remove();
          $(".element").typed({
            //strings: ["web developers.", "graphic designers.","solution architects."],
            strings: ["modern <strong>Web</strong> and <strong>Graphic</strong> design.", "<strong>digital</strong> specialists and <strong>growth</strong> hackers", ],
            typeSpeed: 10,
            loop: true,
            showCursor: true,
            backDelay: 2000,
            startDelay: 1000
          })}
      });
    });



    