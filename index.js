let fruitjes = ["img/kers.png","img/vierkant_aardbei.png","img/vierkant_peer.png"]
let coins = 24
const herstart = document.querySelector('#reload')
const sound = document.querySelector ('audio')
const bruh = document.querySelector ('#bruh')

function randomizer(){
    let willekeurigeWaarde = Math.random()
        willekeurigeWaarde *= fruitjes.length
        willekeurigeWaarde = Math.floor(willekeurigeWaarde)   
        return willekeurigeWaarde
    }

function roll(){
    let waarde1 = randomizer()
    let waarde2 = randomizer()
    let waarde3 = randomizer()

    document.querySelector('#vierkant1').src = fruitjes[waarde1];
    document.querySelector('#vierkant2').src = fruitjes[waarde2];
    document.querySelector('#vierkant3').src = fruitjes[waarde3];

    document.querySelector('#coinsTotaal').textContent = coins

if  (coins <= 0){
    document.querySelector('#coinsTotaal').textContent = ("Helaas uw coins zijn op 🙁") 
    spin.remove()
    uitkomst.remove();
    bruh.play()}
    
if (waarde1 == waarde2 && waarde2 == waarde3) 
    {document.querySelector('#uitkomst').textContent = ("gefeliciteerd u heeft gewonnen!! 🥳");
     document.getElementById('uitkomst').style.color = "gold"
     coins = coins + 4 
     sound.play()
    }
   
else 
    {document.querySelector('#uitkomst').textContent = ("Helaas, probeer het opnieuw 🤬")
     document.getElementById('uitkomst').style.color = "Red"
     coins = coins - 1}
}

spin.addEventListener("click", roll)

function reload(){
    const reloadKnop = document.getElementById('herstart');
    reloadKnop.onclick = function(){
        location.reload();
    }
}
document.getElementById('herstart').onclick = reload;