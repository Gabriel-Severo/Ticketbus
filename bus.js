document.getElementsByClassName('nome')[0].innerHTML = sessionStorage.getItem('nome')
document.getElementsByClassName('origem')[0].innerHTML = sessionStorage.getItem('origem')
document.getElementsByClassName('destino')[0].innerHTML = sessionStorage.getItem('destino')

document.querySelectorAll('.poltrona').forEach((e) => {
    e.addEventListener('click', () => {
        document.getElementsByClassName('poltrona-texto')[0].innerHTML = e.innerHTML
    })
})