function loopImgs() {
    var imgs = document.getElementsByClassName('my-imgs');
  
    var i = 0;
    for (var i = 0; i < imgs.length; i++) {
      loopDelay(i)
    }
  }
  
  function loopDelay(i) {
    /* Initialize Variables */
    var option = document.getElementById('sel');
    var main = document.getElementById('main');
    var Richmond = document.getElementById('Richmond');
    var Richmond2 = document.getElementById('Richmond2');
    var Oakland = document.getElementById('Oakland');
    var Passion1 = document.getElementById('Passion1');
    var Passion2 = document.getElementById('Passion2');
    var Passion3 = document.getElementById('Passion3');
    var Heading = document.getElementById('main-heading');
    setTimeout(function() {
  
      /* Conditionals */
      if (i == 1) {
        Richmond.style.display = 'block';
        Richmond2.style.display = 'none';
        Oakland.style.display = 'none';
        Passion1.style.display = 'none';
        main.style.display = 'none';
        Heading.innerHTML = "Welcome To Richmond";
        Richmond.style.background = "red";
  
      } else if (i == 2) {
        Richmond.style.display = 'none';
        Richmond2.style.display = 'block';
        Oakland.style.display = 'none';
        Passion1.style.display = 'none';
        Passion2.style.display = 'none';
        Passion3.style.display = 'none';
        main.style.display = 'none';
        Heading.innerHTML = "Welcome To Richmond";
        Richmond2.style.background = "orange";
  
      } else if (i == 3) {
        Richmond.style.display = 'none';
        Richmond2.style.display = 'none';
        Oakland.style.display = 'block';
        Passion1.style.display = 'none';
        Passion2.style.display = 'none';
        Passion3.style.display = 'none';
        main.style.display = 'none';
        Heading.innerHTML = "Welcome To Oakland";
        Oakland.style.background = "yellow";
  
      } else if (i == 4) {
        Richmond.style.display = 'none';
        Richmond2.style.display = 'none';
        Oakland.style.display = 'none';
        Passion1.style.display = 'block';
        Passion2.style.display = 'none';
        Passion3.style.display = 'none';
        main.style.display = 'none';
        Heading.innerHTML = "Our First Similarity";
        Passion1.style.background = "blue";
  
      } else if (i == 5) {
        Richmond.style.display = 'none';
        Richmond2.style.display = 'none';
        Oakland.style.display = 'none';
        Passion1.style.display = 'none';
        Passion2.style.display = 'block';
        Passion3.style.display = 'none';
        main.style.display = 'none';
        Heading.innerHTML = "Our Second Similarity";
        Passion2.style.background = "green";
  
      } else if (i == 6) {
        Richmond.style.display = 'none';
        Richmond2.style.display = 'none';
        Oakland.style.display = 'none';
        Passion1.style.display = 'none';
        Passion2.style.display = 'none';
        Passion3.style.display = 'block';
        main.style.display = 'none';
        Heading.innerHTML = "Our Third Similarity";
        Passion3.style.background = "purple";
  
      } else {
  
        Richmond.style.display = 'none';
        Richmond2.style.display = 'none';
        Oakland.style.display = 'none';
        Passion1.style.display = 'none';
        Passion2.style.display = 'none';
        Passion3.style.display = 'none';
        main.style.display = 'block';
        Heading.innerHTML = "What's Up Geniuses";
  
      }
  
    }, 3000 * i);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function toggle() {
  
    /* Initialize Variables */
    var option = document.getElementById('sel');
    var main = document.getElementById('main');
    var Richmond = document.getElementById('Richmond');
    var Richmond2 = document.getElementById('Richmond2');
    var Oakland = document.getElementById('Oakland');
    var Passion1 = document.getElementById('Passion1');
    var Passion2 = document.getElementById('Passion2');
    var Passion3 = document.getElementById('Passion3');
    var Heading = document.getElementById('main-heading');
  
  
    /* Conditionals */
    if (option.value == 1) {
      Richmond.style.display = 'block';
      Richmond2.style.display = 'none';
      Oakland.style.display = 'none';
      Passion1.style.display = 'none';
      main.style.display = 'none';
      Heading.innerHTML = "Welcome To Richmond";
      Richmond.style.background = "red";
  
    } else if (option.value == 2) {
      Richmond.style.display = 'none';
      Richmond2.style.display = 'block';
      Oakland.style.display = 'none';
      Passion1.style.display = 'none';
      Passion2.style.display = 'none';
      Passion3.style.display = 'none';
      main.style.display = 'none';
      Heading.innerHTML = "Welcome To Richmond";
      Richmond2.style.background = "orange";
  
    } else if (option.value == 3) {
      Richmond.style.display = 'none';
      Richmond2.style.display = 'none';
      Oakland.style.display = 'block';
      Passion1.style.display = 'none';
      Passion2.style.display = 'none';
      Passion3.style.display = 'none';
      main.style.display = 'none';
      Heading.innerHTML = "Welcome To Oakland";
      Oakland.style.background = "yellow";
  
    } else if (option.value == 4) {
      Richmond.style.display = 'none';
      Richmond2.style.display = 'none';
      Oakland.style.display = 'none';
      Passion1.style.display = 'block';
      Passion2.style.display = 'none';
      Passion3.style.display = 'none';
      main.style.display = 'none';
      Heading.innerHTML = "Our First Similarity";
      Passion1.style.background = "blue";
  
    } else if (option.value == 5) {
      Richmond.style.display = 'none';
      Richmond2.style.display = 'none';
      Oakland.style.display = 'none';
      Passion1.style.display = 'none';
      Passion2.style.display = 'block';
      Passion3.style.display = 'none';
      main.style.display = 'none';
      Heading.innerHTML = "Our Second Similarity";
      Passion2.style.background = "green";
  
    } else if (option.value == 6) {
      Richmond.style.display = 'none';
      Richmond2.style.display = 'none';
      Oakland.style.display = 'none';
      Passion1.style.display = 'none';
      Passion2.style.display = 'none';
      Passion3.style.display = 'block';
      main.style.display = 'none';
      Heading.innerHTML = "Our Third Similarity";
      Passion3.style.background = "purple";
  
    } else {
  
      Richmond.style.display = 'none';
      Richmond2.style.display = 'none';
      Oakland.style.display = 'none';
      Passion1.style.display = 'none';
      Passion2.style.display = 'none';
      Passion3.style.display = 'none';
      main.style.display = 'block';
      Heading.innerHTML = "What's Up Geniuses";
  
    }
  
  }
  