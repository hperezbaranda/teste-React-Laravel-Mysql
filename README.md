Teste de seleção para Dinni Soluções


(CANDIDATO), por favor siga as instruções a seguir para realizar o teste.

O teste consiste em criar uma Aplicação Web utilizando Laravel e algum dos frameworks: Vue.js, Angular ou React.

A aplicação a ser criada deve permitir:

Cadastrar, editar, listar e excluir clientes;
Cadastrar, editar, listar e excluir produtos; e
Cadastrar, editar, listar e excluir compras informando o produto e clientes envolvidos.

1) Começando o teste:
 - Instale as dependências para o Laravel no seu computador, elas estão listadas na documentação do Laravel https://laravel.com/docs/5.7#server-requirements.
 
 - Clone este repositório no seu computador.
 
 - Instale o Laravel e as dependências do projeto utilizando NPM.
 
 1.1 - Para instalar o Laravel globalmente: composer global require "laravel/installer";
 
 1.2 - Instalar as dependências para o Laravel. Dentro da pasta do projeto (onde tem o arquivo composer.json) execute composer install;
 
 1.3 - execute npm install.
 
 
 Dica 1: Você vai ver na lista de requirements que precisa ter o PHP instalado, se não tiver ainda, instale o PHP. Você pode instalar o XAMPP com PHP 7.1 se achar mais fácil.
 
 Dica 2: Após instalar no Node.js você deve instalar o Laravel e então ir na pasta do projeto e instalar as dependências, para isso execute npm install. Existem tutoriais na internet ensinando como fazer, mas também estou à disposição para ajudar, se necessário.

Se tiver qualquer dúvida quanto à configuração pode me procurar.

2) Conhecendo o banco de dados:

 - Criamos um banco de dados no nosso servidor e um usuário para você acessá-lo. O Banco de dados é em MySQL.
 Seguem os dados para accesá-lo:
 
 Host: diana.cou24pqha67b.us-east-1.rds.amazonaws.com
 Port: 3306
 Schema: (BANCO CANDIDATO)
 Username: (CANDIDATO)
 password: (SENHA CANDIDATO)
 
 Conecte no banco de dados e veja as tabelas que foram criadas para ter uma ideia de como deve ser a aplicação.
 
 Dica: Utilizamos o Workbench para trabalhar com Mysql, se quiser utilizá-lo pode baixar pelo site https://www.mysql.com/products/workbench/.
 
 3) Começando a desenvolver:
 
 Para desenvolver a aplicação, sugerimos que utilize o padrão de projeto MVC, na documentação do Laravel existe uma explicação sobre como funciona esse padrão, você pode encontrar mais informações na internet também.
 
 3.1) Back-end
 
 Para o back-end você deve utilizar o Laravel 5 (qualquer versão a partir da 5, no projeto está incluída a versão 5.7).
 
 - Crie os Models para as tabelas produtos e clientes;
 - Crie os Controllers que achar necessário para a aplicação
 - Crie nos controllers as funções para cadastrar, listar, editar e excluir produtos e clientes;
 - Crie as rotas para acessar essas funções;

3.2) Front-end

Para o front-end gostaríamos que você utilizasse um dos frameworks: Vue.js, Angular.js, Angular ou React. Porém se você quiser utilizar os próprios recursos do Laravel.

 - Crie o layout para as páginas de listagem e cadastros de produtos e clientes;
 - Crie as funções que devem consumir as rotas criadas para cadastrar, editar, listar e excluir produtos e clientes;
 
 Imaginamos que a aplicação deve ter então um Menu de navegação, um formulário de cadastro para produtos e outro para clientes e uma tela para listar produtos e outra para clientes.
 
 3.3) Aprofundando um pouco mais
 
  Após desenvolver os módulos necessários para cadastrar, editar, excluir e listar produtos e clientes, faça com que a aplicação permita cadastrar compras de produtos pelos clientes cadastrados. Isto é, deve ter então uma página para cadastrar as compras realizadas pelos clientes.
  
  - Crie a tabela compras no banco de dados com as colunas que achar necessário;
  - Crie o Model da tabela no Laravel;
  - Crie o Controller para compras;
  - Crie as funções e rotas para cadastrar, editar, listar e excluir compras;
  - Desenvolva o layout e funções no front-end para compras.
  
  Queremos que a aplicação permita ao usuário visualizar as compras realizadas por cada cliente, com pelo menos data, produtos comprados e valor total da compra, por exemplo.

4) Trabalhando com as regras de negócios

 Desenvolva a aplicação pensando na consistência dos dados. Temos uma regra de negócio que é, o cliente não pode ser menor (ter menos que 18 anos). Esperamos que a aplicação valide essa informação e outras que você julgar necessárias.
 
 5) Organizando o trabalho
 
 Como trabalhamos sempre em equipe e com projetos complexos, é interessante utilizar o github para organizar o seu trabalho, assim que finalizar uma atividade, crie um commit e atualize o repositório. Assim você evita o risco de perder o trabalho já realizado e nos permitirá acompanhá-lo.
 
 6) Fique à vontade para solicitar ajuda se achar necessário.
 
 Você terá 1 (uma) semana para desenvolver a aplicação, siga os passos sugeridos e nos envie o código mesmo se não conseguir realizar todos os passos. Sabemos que boa parte pode ser novidade para você, mas essa é uma maneira também de você conhecer um pouco como deve ser o seu trabalho caso se una à nossa equipe.
 
 Bom trabalho!
 
 Leo (leo@dinnisoft.com.br)
