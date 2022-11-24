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

- As perguntas mudam depois de que o usuario clica no botão de proximo

**Mudança do tipo de Input**
- O input foi mudado de button para radio

- O radio é escondido usando CSS e é ativado quando o jogador clica no label de resposta 

**Conversão de medidas**
- Mudei algumas medidas de rem para vw por que fica mais responsivo

- O jogo agora fica melhor quando aberto em dispositivos moveis, mas somente se ele estiver em modo paisagem

- Em meus testes o jogo estava jogavel em um celular, mas acho que deveriamos colocar um aviso assim que o jogador entrar para utilizar em modo paisagem

**Adição do favicon**
- Agora tem uma fotinha do Sora ao lado do nome do jogo

### **Dias 22/11 e 23/11  - Grandes Mudanças**

Troquei mais medidas de em para vw padronizando todo o código

**Adição de algumas cenas**
- As cenas foram adicionadas e o JS consegue acessar seu local e as coloca no HTML
- Elas ficam em loop até que o jogador responda e passe para a proxima pergunta

**Uso de dois Arquivos JavaScript (Demorei para resolver, mas consegui)**

Usar somente um arquivo de JS estava me incomodando, pois existiam muitas linhas de código que serviam somente para armazer as perguntas e a localização das imagens

Depois de muitos erros e soluções falhas foi possivel criar um arquivo somente para colocar armazenar esse dados deixando o código com uma leitura bem mais simplificada

**Criação da tela de Créditos**

Uma vesão da tela de Créditos foi criada. Ainda falta algumas coisas, mas é menos algo para gente fazer


## **Coisas que ainda precisam ser feitas**

- [x] Resolver os bugs de tamanho quando a tela é reduzida (Desde que o jogador use o modo paisagem não tem problemas, segundo os testes do Dev Tools)

- [x] Aplicar a paleta de cores correta (A versão incial se manteva até o momento)

- [x] Testar como as cenas vão aparecer (Funciona - Dia 22/11)

- [x] Pegar o valor do input usando o JS (Completo dia 18/11)

- [x] Mudar o texto com o passar das perguntas (Completo dia 18/11)

- [ ] Fazer a tela de finalização

- [x] Testar o jogo com outras pessoas (Quase todo dia que uma mudança nova é implementada eu testo)

- [ ] Fazer a tela de créditos (Ainda falta finalizar)

- [ ] Desenvolver o timer para a responder as perguntas

- [ ] Colocar uma janela de aviso quando o usuario entrar com um dispositivo de tela pequena