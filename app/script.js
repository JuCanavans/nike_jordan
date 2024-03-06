/*var typed = new Typed('.animation_write', {
    strings: ["O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."],
    typeSpeed: 50,
})

console.log('ola munbdo')

*/

const el = document.querySelector('.animation_write')
const text = 'O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.'
const intevalo = 100

function writeText(el, text, intevalo){

    const char = text.split("").reverse()

    const typer = setInterval(() =>{
        if(!char.length){
            return clearInterval(typer)
        }

        const next = char.pop()

        el.innerHTML += next

    }, intevalo)
}

writeText(el, text, intevalo)