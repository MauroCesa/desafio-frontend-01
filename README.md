# desafio-frontend-01
Desafio estagiário: HTML/CSS/JS

Olá, boa tarde!

RESUMO DO QUE FOI FEITO:

HTML: 
Eu adicionei um "h2" para destacar o "LOGIN", um parágrafo abaixo ou "p" com id "credenciais", dois "input" com o placeholder "username" e o outro com "password", um "button" onde eu utilizo o comando "onclick:"logar()" e um id "botao" e por fim outro parágrafo "p" com um id "registro" e um "a" onde demonstra um link.

CSS:
"body" alterando a fonte, mudando o background e o tamanho da fonte.
"main", modifiquei a posição de tudo para o centro utilizando "text-align", "position:absolute", "top", "left" e "transform", além de adicionar a box-shadow para um sombreamento de leve em volta e dei um limite de espaço vertical com "max-width" em 400 pixels.
"input" Retirei a borda usando "border:none", deixei o background com o rgb #f2f2f2, alterando o tamanho do input com "padding", right, bottom, top e left.
"#botao" Esse foi um id criado especificamente para mudar o "button", na qual eu pus um "background-image linear-gradient to right" , deixei a cor da letra branca para destaque, modifiquei o tamanho com "padding" e retirei a borda com "border:none".
"#botao:active" Utilizando "filter" e diminuindo o "brightness" fiz com que o botão, caso seja pressionado, a cor dele escurece.
"#registro" Modificando o primeiro parágrafo, fazendo com que ele tenha o rgb #b3b4b3, alterei a distância do parágrafo em relação ao "button" acima dele com "padding-top" e aumentei a fonte com "font-size".
"#registro a" Apenas utilizado para alterar o "a", onde alterei o rgb para #50af51 e retirei a decoração do texto com "text-decoration:none".
 
JAVASCRIPT:
Utilizando uma "function", onde, ao clicar no "button" que está implementado o "logar()", comando na qual ativa a ação da function, na qual coleta o que foi digitado nos inputs com "getElementById" em que se refere a eles com os ids "username" e "password", utilizando o comando "if" faço com que o username seja apenas confirmado se for digitado "username" no primeiro "input", e que o password apenas seja confirmada se for digitada "password" no segundo "input", caso as credenciais estejam corretas, uma mensagem será emitida com o comando "alert" na qual diz "Login Successful!" demonstrando que o login foi certo e as credenciais estão exatas, com o comando "else" ele demonstra que o "if" não foi ativado, então apenas enviará um "alert" com a mensagem "Username or Password incorrect. Try again."
