let question = confirm('Deseja receber notificações sobre GIT e GITHUB')
let nameUser
let addrUser

if(question == true){
    nameUser = prompt('Qual é o seu nome ?')
    addrUser = prompt('Digite seu email !')
    alert('Em breve enviaremos um email de confirmação :) !')
}else{
    alert('Caso mude de ideia assine a nossa lista no rodapé da página!')
}
