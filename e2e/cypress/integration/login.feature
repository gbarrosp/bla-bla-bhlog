#language: pt

Funcionalidade: Login no sistema
  Como um usuário
  Desejo realizar login
  Para utilizar as funcionalidades do sistema

Cenário de Fundo:
  Dado que eu não esteja logado

Cenário: Login com formulário
  Quando acesso a página de login do sistema
  Então vejo os campos do formulário vazios
  Quando clico em entrar
  Então vejo a mensagem "Preencha todos os dados"
