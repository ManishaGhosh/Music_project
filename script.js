$(document).ready(function(){

  const a1 = new Audio('notes/A.mp3');
  const b1 = new Audio('notes/B.mp3');
  const c1 = new Audio('notes/C.mp3');
  const d1 = new Audio('notes/D.mp3');
  const e1 = new Audio('notes/E.mp3');
  const f1 = new Audio('notes/F.mp3');
  const g1 = new Audio('notes/G.mp3');
  var audio = new Audio();
  i=0;
  j=40;
 var bb='B';
themusic=[];

function mycolor()
{

}
function mymusic(x)
{
  if(themusic.length < j){
  if($('#tap').text() === "Tap on keys to create music.")
  {
    $('#tap').text("");
    $('#tap').append(x);
  }
  else {
 $('#tap').append(x);
  }
}
else {
  alert('MAX level reached.');
}
}

var playlist = new Array('notes/S.mp3','notes/A.mp3', 'notes/B.mp3','notes/C.mp3','notes/D.mp3','notes/E.mp3','notes/F.mp3','notes/G.mp3');
$('#a').on('click',function(){a1.play();themusic.push(0);  mymusic('A');});
$('#b').on('click',function(){b1.play();themusic.push(1);  mymusic('B');});
$('#c').on('click',function(){c1.play();themusic.push(2);  mymusic('C');});
$('#d').on('click',function(){d1.play();themusic.push(3);  mymusic('D');});
$('#e').on('click',function(){e1.play();themusic.push(4);  mymusic('E');});
$('#f').on('click',function(){f1.play();themusic.push(5);  mymusic('F');});
$('#g').on('click',function(){g1.play();themusic.push(6);  mymusic('G');});


$('#p1').on('click',function()
{
  if(themusic.length == 0)
  {
    alert('First create some tune!');
  }
  else {
    console.log('working');
    audio.src = playlist[0];
    audio.play();
    audio.onended=function(){
      if(i<themusic.length)
      {
        audio.src = playlist[themusic[i] + 1 ];
        console.log(themusic[i] + 1);
        audio.play();
        i++;
      }

      /*else{
        themusic=[];
        i=0;
        console.log('end');
      }*/
    };i=0;
  }
  $('#tap').css({'font-size':'3.5vw','color':'#cffca4'});
});


$('#p2').on('click',function()
{
  themusic=[];
  i=0;
    console.log('end');
      $('#tap').text("Tap on keys to create music.");
      $('#tap').css({'font-size':'3vw','color':'#dee3e3'});
});



}
);
