function rolarDado(lados) {
    return Math.floor(Math.random() * lados) + 1;
}

function girarDados() {
    document.getElementById('d6').textContent = "D6: " + rolarDado(6);
    document.getElementById('d8').textContent = "D8: " + rolarDado(8);
    document.getElementById('d20').textContent = "D20: " + rolarDado(20);
}