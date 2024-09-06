# Themed HTTP Codes

Este projeto exibe uma lista de cards, onde você pode descobrir e pesquisar por diferentes códigos de resposta HTTP de uma forma divertida, ajudando a tornar conceitos técnicos mais acessíveis e memoráveis. Cada card contém uma imagem temática correspondente ao código, e você pode personalizar as ilustrações exibidas alternando entre os três temas disponíveis: *Cachorros* :dog:, *Gatos* :cat: ou *Cabras* :goat:.

## O que são códigos de resposta HTTP?

Os códigos de status de resposta HTTP indicam se uma solicitação HTTP específica foi concluída com êxito. As respostas são agrupadas em cinco classes:

- Respostas informativas (100 – 199)
- Respostas bem-sucedidas (200 – 299)
- Mensagens de redirecionamento (300 – 399)
- Respostas de erro do cliente (400 – 499)
- Respostas de erro do servidor (500 – 599)

## Desenvolvimento

O site foi desenvolvido com HTML, CSS e JavaScript, com uma interface simples e acessível, mantendo os princípios de código limpo e responsividade. O design é intuitivo para o usuário e fácil de navegar, sem sobrecarregar a experiência com elementos desnecessários.

## Funcionalidades

- Exibição dos principais códigos de resposta HTTP.
- Pesquisa por código (numérico) e nome da resposta.
- Cada código é representado por um card com uma imagem correspondente ao tema selecionado.
- Alternância de tema entre cachorros, gatos e cabras com um simples clique (o tema é salvo no localStorage do navegador).
- As imagens mudam dinamicamente de acordo com o tema selecionado.

#### Exemplo

Se o tema selecionado for "Cachorros", o código 200 (OK) exibirá uma imagem de um cachorro feliz, o código 404 (Not Found) exibirá um cachorro confuso, etc. Ao mudar o tema para "Gatos" ou "Cabras", as imagens serão substituídas por fotos de gatos ou cabras que representem os códigos.

## Acessar o site

Acesse diretamente pelo link https://themed-http-codes.vercel.app/

Ou se preferir executar localmente, siga o guia abaixo:

## Executar o projeto localmente

1. Clone o repositório:
   
```bash
   git clone https://github.com/matheusgesser/themed-http-codes.git
```

2. Navegue até o diretório do projeto:
   
```bash
   cd themed-http-codes
```

3. Abra o arquivo `index.html` em seu navegador para visualizar a página inicial.

## Contato

- **Email**: matheusmvg@hotmail.com
- **LinkedIn**: [Matheus Vinícius Gesser](https://www.linkedin.com/in/matheusgesser/)