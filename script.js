const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');

shi.addEventListener('click', () => play('shi'));

fu.addEventListener('click', () => play('fu'));

mi.addEventListener('click', () => play('mi'));

// Pour le reste, a vous de jouer
function play(userChoice)
{
    ia.classList.remove('translate-right');
    player.classList.remove('translate-left');

    reset_animation();

    console.log(userChoice)
    const choices = ["shi", "fu", "mi"];

    const randomIndex = Math.floor(Math.random() * choices.length);
    const iaChoice = choices[randomIndex];
    console.log(iaChoice);

    ia.src = "img/"+iaChoice+".png";
    ia.classList.add("translate-right");

    player.src = "img/"+userChoice+".png";
    player.classList.add("translate-left");

    if((userChoice == 'shi' && iaChoice == 'fu') 
        || ( userChoice == 'fu' && iaChoice == 'mi')
        || ( userChoice == 'mi' && iaChoice == 'shi')
    ) {
        console.log('j\'ai gagné :)');
    } else if ((userChoice == 'shi' && iaChoice == 'mi')
        ||(userChoice == 'fu' && iaChoice == 'shi')
        || (userChoice == 'mi' && iaChoice == 'fu')
    ) {
        console.log('j\'ai perdu :(');
    } else {
        console.log('égalité :|');
    }


}

function reset_animation()
{
    ia.style.animation = 'none';
    ia.offsetHeight; /* trigger reflow */
    ia.style.animation = null; 
    player.style.animation = 'none';
    player.offsetHeight; /* trigger reflow */
    player.style.animation = null;
}