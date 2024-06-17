const bebidaFavoritaButton = document.getElementById('bebida-favorita');
const oiVidaButton = document.getElementById('oi-vida');
const resultadoDiv = document.getElementById('resultado');

bebidaFavoritaButton.addEventListener('click', () => {
    resultadoDiv.innerHTML = 'Parabéns Kaua! Muitos anos de vida, você merece o mundo todo, espero que tenha tido um otimo dia e saiba que gosto muuuito de você. Manda bjss você é minha fã <3<br>';
    resultadoDiv.innerHTML += '<img src="Imagem do WhatsApp de 2024-06-17 à(s) 19.24.28_ed0123b3.jpg" alt="Imagem 1">';
    resultadoDiv.style.display = 'block';
});

oiVidaButton.addEventListener('click', () => {
    resultadoDiv.innerHTML = 'Ah, meu amor, meu amado, meu boneco<br>Eu te juro que te quero, eu te juro que te espero<br>E que caia um raio, a cabeça, o mundo sobre mim<br>Se agora nesse momento não tiver falando sério<br>';
    resultadoDiv.innerHTML += '<img src="Imagem do WhatsApp de 2024-06-17 à(s) 19.25.38_faad1077.jpg" alt="Imagem 2">';
    resultadoDiv.style.display = 'block';
});
