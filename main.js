// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function hideErrorModel(){
  const modal=document.getElementById('modal');
  modal.classList.add('hidden');
}

function handleClicks(){
  document.addEventListener('click',function(e){
    let target=e.target;
    if(target.classList.contains('like-glyph')){
      if(target.innerHTML="EMPTY_HEART"){
        mimicServerCall().then(function(response){
        target.innerHTML="FULL_HEART";
        target.classList.add('activated-heart');
      }).catch(function(response){
        let modal=document.getElementById('modal');
        modal.classList.Remove('hidden');
        model.innerHTML=response;
        window.setTimeout(function(){
          modal.classList.add('hidden');
        },5000);
      })
      }
    }else if(target.innerHTML="FULL_HEART"){
      target.innerHTML="EMPTY_HEART";
      target.classList.removing('activated-heart');
    }
  })
}

document.addEventListener('DOMContentLoad',hideErrorModel());
handleClicks();

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
