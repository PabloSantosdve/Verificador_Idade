function verificar() {
    // Obtém a data atual
    let data = new Date();
    // Obtém o ano atual a partir da data
    let ano = data.getFullYear();
    // Obtém o elemento de entrada de ano pelo seu ID 'txtano'
    let fano = document.getElementById('txtano');
    // Seleciona o primeiro elemento com a classe 'res' para mostrar o resultado
    let res = document.querySelector('.res');

    // Verifica se o valor do campo de ano está vazio ou se é maior que o ano atual
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        // Mostra um alerta se os dados não são válidos
        window.alert('Verifique os dados e tente novamente');
    } else {
        // Obtém os elementos de radio button pelo nome 'radsex'
        let fsex = document.getElementsByName('radsex');
        // Calcula a idade subtraindo o ano de nascimento do ano atual
        let idade = ano - Number(fano.value);
        // Inicializa a variável para armazenar o gênero
        let genero = '';
        // Cria um novo elemento de imagem
        let img = document.createElement('img');
        // Define um atributo ID para a imagem
        img.setAttribute('id', 'foto');

        // Verifica se o primeiro radio button (masculino) está selecionado
        if (fsex[0].checked) {
            genero = 'Homem'; // Define o gênero como 'Homem'
            // Define a imagem com base na idade
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'homem-crianca.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-meia-idade.jpg');
            } else {
                img.setAttribute('src', 'homem-idoso.jpg');
            }
        } else if (fsex[1].checked) { // Verifica se o segundo radio button (feminino) está selecionado
            genero = 'Mulher'; // Define o gênero como 'Mulher'
            // Define a imagem com base na idade
            if (idade >= 0 && idade <= 2) {
                img.setAttribute('src', 'mulher-bebe.jpg');
            } else if (idade <= 10) {
                img.setAttribute('src', 'mulher-crianca.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-40anos.jpg');
            } else {
                img.setAttribute('src', 'mulher-idosa.jpg');
            }
        }

        // Define o conteúdo HTML do elemento de resultado com a mensagem
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        // Adiciona a imagem ao elemento de resultado
        res.appendChild(img);
    }
}
