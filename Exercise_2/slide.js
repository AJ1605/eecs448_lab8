var i = 0;
var images = [];
var size = 4;
images[0] = '1.jpg';
images[1] = '2.jpg';
images[2] = '3.jpg';
images[3] = '4.jpg';
images[4] = '5.jpg';


function changeImage(n){

  i += n;

  if(i > size){
    i = 0;
  }
  if(i < 0){
    i = size;
  }

  document.slideshow.src = images[i];


}