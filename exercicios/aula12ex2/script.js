function verificarIdade(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value.length > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-h.jpg')

            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-crianca-h.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-h.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-h.jpg')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.jpg')

            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-crianca-m.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}