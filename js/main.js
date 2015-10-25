

var quotes = {1:'"It\'s some kind of hollow tube, devoid of human life. Gasp. The Los Angeles Subway." - Leela',
 2:'"You Can\'t Keep Boogieing Like This. You\'ll Come Down With A Fever Of Some Sort." - Leela',
 3:'"I moved the stars themselves to write her a love note in the sky." - Fry',
 4:'"But going through a divorce together, you can\'t pretend that didn\'t bring us closer together." - Bender',
 5:'"I was a hero to broken robots \'cause I was one of them, but how can I sing about being damaged if I\'m not? That\'s like Christina Aguilera singing Spanish. Ooh, wait! That\'s it! I\'ll fake it!" - Bender',
 6:'"I\'m not a robot like you, I don\'t like having discs crammed into me…unless they\'re Oreos ... and then only in the mouth." - Fry',
 7:'"Grab a shovel. I\'m one skull short of a Mouseketeer reunion." - Bender',
 8:'"Shut up friends. My internet browser heard us saying the word Fry and it found a movie about Philip J. Fry for us. It also opened my calendar to Friday and ordered me some french fries." - Professor Farnsworth',
 9:'"Dear Horse God, I know I don\'t usually pray to you. Sometimes I doubt you even exist, but if you\'re willing to grant me luck…please…stomp your hoof once." - Fry',
 10:'"You can do it, honey. Squeeze one out for America." - Yancy Fry Sr.'
  };
  $( document ).ready(function() {
  // function random()
    // var quoteSend;
    $('#btn1').click(function(){
      var rand = Math.floor((Math.random() * 10));
      var quoteSend = quotes[rand];
      $('#output').html(quotes[rand]);
      $('#twitterQuote').html('<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=' + quoteSend + '"> Tweet</a>');
    });
  });
