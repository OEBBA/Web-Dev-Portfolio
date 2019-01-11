/* image array*/
var randomImage = new Array();

randomImage[0] =
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0f909220993313.562fb2da18ac4.jpg";
randomImage[1] =
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f600b820993313.562fb2e108090.jpg";
randomImage[2] =
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f02c8720993313.562fb2da38cf5.jpg";

randomImage[3] =
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb39e520993313.562fb2da4ea40.jpg";

randomImage[4] =
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/cc223d20993313.562fb2da0fd37.jpg";

randomImage[5] =
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/7303f620993313.562fb2da21135.jpg";

/* End of image array */

/*Quote array and function*/
var quotes = new Array();

quotes[0] = "Mathematical";
quotes[1] = "Algebraic";
quotes[2] = "What the Nuts?!";
quotes[3] = "Oh my glob!";
quotes[4] = "People get built different. We don't need to figure it out, we just need to respect it.";
quotes[5] = "Something weird might just be something familiar viewed from a different angle.";
quotes[6] = "Sucking at something is the first step towards being sorta good at something.";
quotes[7]="Sometimes life is scary and dark";
quotes[8]="Bacon Pancakes";
quotes[9]="My life is a fart";

function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  document.getElementById("text").innerHTML = '"' + quotes[randomQuote] + '"';
}

getRandomQuote(); // Calls function

//This function randomizes the image array
function getRandomImage() {
  var number = Math.floor(Math.random() * randomImage.length); //Randomly goes through randomImage array
  document.getElementById("imgDisplay").innerHTML =
    "<img src= ' " + randomImage[number] + " ' />"; //Sets Array in HTML div named quoteDisplay
}

getRandomImage(); //Calls function