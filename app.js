// set up text to print, each item in array is new line
var aText = new Array(
  "Shaadi Ki bhaut bhaut badhaiyaan...", 
  "Agr bhabhi ji, app isko padh rahe ho to, hum sab yahi kahenge ki ..",
  "Aap bhaut lucky ho, kyuki app ko Mahesh jaisa life partner mila hai ..",
  "Waise hum bhi bhaut ache hai, dekh lena, kahi kuch refer kar sko to :))"
  );
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();

  setTimeout(() => {
    const button = document.querySelector('.custom-button');
    button.style.display = 'inline';
  },aText.join('').length * iSpeed + 2000)