document.getElementsByClassName('nome')[0].innerHTML = sessionStorage.getItem('nome')
document.getElementsByClassName('origem')[0].innerHTML = sessionStorage.getItem('origem')
document.getElementsByClassName('destino')[0].innerHTML = sessionStorage.getItem('destino')

const date = new Date()
data = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
hora = date.getHours() + ':' + date.getMinutes()
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
