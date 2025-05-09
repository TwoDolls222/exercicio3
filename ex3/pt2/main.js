let usuarios = [];
let anoAtual = new Date().getFullYear();

let veriSenha = false;




function processarUsuario() {
    let nome = prompt("Digite seu nome:");
    let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
    let idade = anoAtual - anoNascimento;


    if (idade >= 18 && idade <= 130) {
        alert(`Bem-vindo(a), ${nome}!`);
        let username = prompt("Crie um nome de usuário:");
        let senha = prompt("Crie uma senha:");
        usuario = {
            nome: nome,
            idade: idade,
            username: username,
            senha: senha
        };
        usuarios.push(usuario);
        while (veriSenha == false) {
            let userPsw = prompt("Digite sua senha");
            if (senha === userPsw) {
                alert("Senha correta");
                veriSenha = true;
            } else {
                alert("Senha incorreta tente novamente");
            }
        }
    } else {
        alert(`Desculpe, ${nome}, você não pode fazer login por ser menor de idade.`);
    }
}


for (let i = 0; i < 1; i++) {
    alert(`Cadastro do Usuário ${i + 1}`);
    processarUsuario();
}
let usuariosJSON = JSON.stringify(usuarios, null, 4);
console.log("Dados dos usuários convertidos para JSON:");
console.log(usuariosJSON);