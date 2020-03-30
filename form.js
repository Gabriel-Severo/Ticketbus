document.getElementsByClassName('form-container')[0].addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = document.getElementById('nome').value
    let origem = document.getElementById('origem')
    origem = origem.options[origem.selectedIndex].text
    let destino = document.getElementById('destino')
    destino = destino.options[destino.selectedIndex].text

    if (origem === destino) {
        document.getElementsByClassName('erro')[0].style.display = 'block'
        setTimeout(() => {document.getElementsByClassName('erro')[0].style.display = 'none'}, 5000)
        return 0
    }

    sessionStorage.setItem('nome', nome)
    sessionStorage.setItem('origem', origem)
    sessionStorage.setItem('destino', destino)
    window.location.href="onibus.html"
})