function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são exatamente ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.style.backgroundImage = "url('fotomanha.png')"
        document.body.style.background = '#e2cd9f' // Opcional: mudar a cor do fundo
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.style.backgroundImage = "url('fototarde.png')"
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE
        img.style.backgroundImage = "url('fotonoite.png')"
        document.body.style.background = '#515154'
    }
}