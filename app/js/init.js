

$(function(){ 
  $(".element").typed({
    //strings: ["web developers.", "graphic designers.","solution architects."],
    //"modern <strong>web</strong> and <strong>fraphic</strong> design. "<strong>digital</strong> specialists and <strong>growth</strong> hackers"
    strings: ["modern <strong>web</strong> and <strong>graphic</strong> design.", "<strong>digital</strong> specialists and <strong>growth</strong> hackers"],
    typeSpeed: 30,
    loop: true,
    showCursor: true,
    backDelay: 3500,
    startDelay: 0,
    preStringTyped: function() {
      $("#typer").toggleClass("typer-change")
    }
  })
});


/**
 * $(function(){
      $(".dingo").typed({
        //strings: ["web developers.", "graphic designers.","solution architects."],
        strings: ["loaft"],
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
            typeSpeed: 30,
            loop: true,
            showCursor: true,
            backDelay: 3500,
            startDelay: 1000
          })}
      });
    });
 */
    