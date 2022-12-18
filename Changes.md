# **Histórico de Mudanças**

### **Dia 03/11 - Desenvolvimento da tela inicial**

- Primeiro Commit no Github

- Criação do menu inicial

- Aplicação dos estilos na tela inicial

- Organização dos arquivos em pastas

### **Dia 11/11 - Desenvolvimento da tela de jogo**

- Primeira versão da tela inicial

- Apresentação da versão inicial para a professora Kattiana

- Efeitos de animação adicionados aos botões

- Link entre os arquivos da tela inicial para a tela de jogo

**Fato curioso, o design dos botões estava tão bom que a Tia Katt achou que a gente tinha usado um framework para fazer ele :P**

### **Dia 12/11 - Mudanças na cores**

Troquei algumas cores na tela de login e apliquei as mesmas mudanças na tela de jogo

- Mudei as cores de background

- Mudei as cores das sombras e dos botões

- Mudei a transição dos botões para algo mais suave

### **Dia 18/11 - Aplicação da versão de JavaScript**

**Aplicação de JavaScript inicial**

- Três perguntar foram adicionadas com fins de testar a lógica do JavaScript

- As perguntas mudam depois de que o usuário clica no botão de próximo

**Mudança do tipo de Input**

- O input foi mudado de button para radio

- O radio é escondido usando CSS e é ativado quando o jogador clica no label de resposta 

**Conversão de medidas**

- Mudei algumas medidas de rem para vw por que fica mais responsivo

- O jogo agora fica melhor quando aberto em dispositivos moveis, mas somente se ele estiver em modo paisagem

- Em meus testes o jogo estava jogável em um celular, mas acho que deveríamos colocar um aviso assim que o jogador entrar para utilizar em modo paisagem

**Adição do favicon**

- Agora tem uma fotinha do Sora ao lado do nome do jogo

### **Dias 22/11 e 23/11  - Grandes Mudanças**

Troquei mais medidas de em para vw padronizando todo o código

**Adição de algumas cenas**

- As cenas foram adicionadas e o JS consegue acessar seu local e as coloca no HTML
- Elas ficam em loop até que o jogador responda e passe para a próxima pergunta

**Uso de dois Arquivos JavaScript (Demorei para resolver, mas consegui)**

Usar somente um arquivo de JS estava me incomodando, pois existiam muitas linhas de código que serviam somente para armazenar as perguntas e a localização das imagens

Depois de muitos erros e soluções falhas foi possível criar um arquivo somente para colocar armazenar esse dados deixando o código com uma leitura bem mais simplificada

**Criação da tela de Créditos**

Uma versão da tela de Créditos foi criada. Ainda falta algumas coisas, mas é menos algo para gente fazer

### **Dia 18/12 - Adição de media query**

Adicionei uma media query simples para melhor visualização no celular. Acredito que com isso fique melhor para jogar no celular sem ter que usar ele no modo paisagem. Os testes feitos usando o Dev Tools do Firefox confirmaram que está funcionando muito bem.

## **Coisas que ainda precisam ser feitas**

- [x] Resolver os bugs de tamanho quando a tela é reduzida (Desde que o jogador use o modo paisagem não tem problemas, segundo os testes do Dev Tools)

- [x] Aplicar a paleta de cores correta (A versão inicial se manteve até o momento)

- [x] Testar como as cenas vão aparecer (Funciona - Dia 22/11)

- [x] Pegar o valor do input usando o JS (Completo dia 18/11)

- [x] Mudar o texto com o passar das perguntas (Completo dia 18/11)

- [x] Fazer a tela de finalização (Completo dia 24/11)

- [x] Testar o jogo com outras pessoas (Quase todo dia que uma mudança nova é implementada eu testo)

- [x] Fazer a tela de créditos (Completo dia 24/11)

- [x] Desenvolver o timer para a responder as perguntas (Completo dia 24/11 - Valeu Igor)

- [x] Publicar o jogo na internet e deixar ele disponível para qualquer pessoa (Completo dia 25/11)