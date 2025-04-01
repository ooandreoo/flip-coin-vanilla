document.getElementById('flip-button').addEventListener('click', async function(event) {
  let coin = document.getElementById('coin-svg');
  await flipCoinRandomly(coin);
});

async function flipCoinRandomly(coin) {
  await removePreviousAnimationClass(coin);
  let i = getRandomInt(2);
  var flipClass;
  if(i>0)
    flipClass = 'flippin-face';
  else
    flipClass = 'flippin-shield';
  coin.classList.add(flipClass); 
  await sleep(7000);
  enableButton();
}

async function removePreviousAnimationClass(coin) {
  disableButton();
  if(coin.classList.contains('flippin-face')){
    coin.classList.remove('flippin-face');
    coin.offsetWidth;
  }
  else if(coin.classList.contains('flippin-shield')){
    coin.classList.add('flip-complete');
    await sleep(1500);
    coin.classList.remove('flip-complete');
    coin.classList.remove('flippin-shield');
  }
}

function disableButton() {
  document.getElementById('flip-button').disabled = true;
}

function enableButton() {
  document.getElementById('flip-button').disabled = false;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
} 
