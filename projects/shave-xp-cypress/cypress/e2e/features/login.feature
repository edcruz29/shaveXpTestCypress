#language: pt
Funcionalidade: Login

Cenario: Login do Cliente

Dado que tenho o seguinte usuário:
    |name       |Eduardo                |
    |email      |galvaocruz16@gmail.com |
    |password   |cDz#2020               |
    |is_shaver  |false                  |

E que acesso o totem
Quando submeto essas credenciais
Então sou autenticado com sucesso

Cenario: Senha incorreta

Dado que tenho o seguinte usuário:
    |name       |Eduardo                |
    |email      |galvaocruz16@gmail.com |
    |password   |cDz#2022               |
    |is_shaver  |false                  |
E que esse usuário tem senha incorreta
E que acesso o totem
Quando submeto essas credenciais
Então devo ver a mensagem de alerta "Ocorreu um erro ao fazer login, verifique suas credenciais."
