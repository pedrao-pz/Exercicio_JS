const form = getElementById('form');

/* Valida form se tiver só uma palavra */
/* function validaForm(conta) {
    const saldoComoArray = conta.split('');
    return saldoComoArray.lenght >= 1;
} */

/* Quando clicar no submit, não vai recarregar a página */
form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('conta');
    const transfereBeneficiario = document.getElementById('transfere');
    const mensagemSucesso = `${transfereBeneficiario.value} transferidos para a conta desejada.`;

    /*const contaBeneficiario = document.getElementById('conta');
    if !(validaForm(contaBeneficiario.value)){
        alert('Não é possível prosseguir, digite um saldo válido !')
    } else {
        alert('Tudo certo !');
    } */

    if !(transfereBeneficiario > numeroContaBeneficiario){
        alert('Impossível transferir a mais do que você tem na sua conta !')
    } else {

        numeroContaBeneficiario.value = '';
        transfereBeneficiario.value = '';

        alert(mensagemSucesso)
    }
}
)

console.log(form);