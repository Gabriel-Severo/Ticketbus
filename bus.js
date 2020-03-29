document.getElementsByClassName('nome')[0].innerHTML = sessionStorage.getItem('nome')
document.getElementsByClassName('origem')[0].innerHTML = sessionStorage.getItem('origem')
document.getElementsByClassName('destino')[0].innerHTML = sessionStorage.getItem('destino')

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
