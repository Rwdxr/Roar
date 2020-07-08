const lionSound = document.getElementById('lionSound');
const jagSound = document.getElementById('jagSound');
const tigerSound = document.getElementById('tigerSound');
const tiger = new Audio('/sounds/tigerroar.wav')
const lion = new Audio('/sounds/lionroar.wav')
const jag = new Audio('/sounds/jagroar.wav')

lionRoar = () => {
  console.log('hello Lion');
  tiger.pause();
  jag.pause();
  lion.currentTime = 0;
  lion.play();
}

tigerRoar = () => {
  console.log('hello Tiger');
  jag.pause();
  lion.pause();
  tiger.currentTime = 0;
  tiger.play();
}

jagRoar = () => {
  console.log('hello Jag');
  tiger.pause();
  lion.pause();
  jag.currentTime = 0;
  jag.play();
}

lionSound.addEventListener('click', lionRoar);
jagSound.addEventListener('click', jagRoar)
tigerSound.addEventListener('click', tigerRoar)