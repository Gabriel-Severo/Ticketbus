if (sessionStorage.getItem('nome') == null){
    window.location.href="index.html"
}
document.getElementsByClassName('nome')[0].innerHTML = sessionStorage.getItem('nome')
document.getElementsByClassName('origem')[0].innerHTML = sessionStorage.getItem('origem')
document.getElementsByClassName('destino')[0].innerHTML = sessionStorage.getItem('destino')

const date = new Date()
// É adicinado um 0 mas se o número tiver mais de duas casas decimais é removido com o slice(-2)
// Números com uma casa decimal mantem o 0
day = "0" + date.getDate()
month = "0" + (date.getMonth()+1)
data = day.slice(-2) + '/' + month.slice(-2) + '/' + date.getFullYear()

hour = "0" + date.getHours()
minute = "0" + date.getMinutes()
second = "0" + date.getSeconds()

hora = hour.slice(-2) + ':' + minute.slice(-2) + ':' + second.slice(-2)
document.getElementsByClassName('data')[0].innerHTML = data
document.getElementsByClassName('hora')[0].innerHTML = hora

document.querySelectorAll('.poltrona').forEach((e) => {
    e.addEventListener('click', () => {
        const selecionado = document.querySelector('.selecionado')
        if (selecionado != null){
            selecionado.classList.toggle('selecionado')
            selecionado.classList.toggle('poltrona')
        }
        document.getElementsByClassName('poltrona-texto')[0].innerHTML = e.innerHTML
        e.classList.toggle('selecionado')
        e.classList.toggle('poltrona')
    })
})

document.getElementsByClassName('imprimir')[0].addEventListener('click', () => {
    if(document.getElementsByClassName('poltrona-texto')[0].textContent === ''){
        document.getElementsByClassName('erro')[0].style.display = 'block'
        setTimeout(() => {
            document.getElementsByClassName('erro')[0].style.display = 'none'
        }, 3000)
    }else{
        document.querySelector('header').style.display = 'none'
        document.querySelector('.bus-select').style.display = 'none'
        document.querySelector('.imprimir').style.display = 'none'
        document.querySelector('.bus-info').style.width= '100%'
        window.print()
        document.querySelector('header').style.display = 'flex'
        document.querySelector('.bus-select').style.display = 'flex'
        document.querySelector('.imprimir').style.display = 'flex'
        document.querySelector('.bus-info').style.width= '50%'
    }
})