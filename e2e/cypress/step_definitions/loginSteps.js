import { Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../viewActions/loginView";
const loginPage = new LoginPage;

When('acesso a página de login do sistema', () => {
  loginPage.goToLoginPage()
})

Then('vejo os campos do formulário vazios', () => {
  loginPage.checkEmptyForm()
})

When('clico em entrar', () => {
  loginPage.buttonClick()
})

Then('vejo a mensagem {string}', (msg) => {
  loginPage.hasMessage(msg)
})
