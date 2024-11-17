import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }))

const porta = 3000;
const host = '0.0.0.0';

var listaProdutos = [];

function cadastroProdutoView(req, res) {
    res.send(`
        <html>
<head>
    <title>Cadastro de Produto</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXhW+ALEwIH" crossorigin="anonymous">
    <meta charset="utf-8">
    <style>
      
        body {
            font-family: Georgia, serif;
            background-color: #f7f9fc;
            color: #343a40;
        }

      
        .container {
            max-width: 600px;
            margin-top: 50px;
            padding: 30px;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }

        
        h1 {
            font-size: 1.8em;
            color: #2c3e50;
            text-align: center;
            margin-bottom: 20px;
            font-weight: bold;
        }
        .btn-primary {
            background-color: #2c3e50;;
            color: white;
            font-weight: bold;
            transition: background-color 0.3s ease;
            width: 50%;
        }

        .btn-primary:hover {
            background-color: #C0C0C0;
        }

       
        .form-label {
            font-weight: 500;
            color: #555;
        }

        .form-control, .form-select {
            border-radius: 4px;
        }
    </style>
</head>
<body>
<center>
    <div class="container">
        <h1>Cadastro de Produto</h1>
        <form method="POST" action="/cadastrarProduto" class="row g-3" novalidate>
            <div class="col-md-12">
                <label for="nome" class="form-label">Nome do Produto:</label>
                <input type="text" class="form-control" id="nome" name="nome" >
            </div>
            <div class="col-md-6">
                <label for="cod" class="form-label">Código:</label>
                <input type="number" class="form-control" id="cod" name="cod" >
            </div>
            <div class="col-md-6">
                <label for="quant" class="form-label">Quantidade:</label>
                <input type="number" class="form-control" id="quant" name="quant" >
            </div>
            <div class="col-md-6">
                <label for="valor" class="form-label">Valor por unidade:</label>
                <input type="number" class="form-control" id="valor" name="valor" step="0.01" >
            </div>
            <div class="col-md-6">
                <label for="tipo" class="form-label">Tipo do Produto:</label>
                <select class="form-select" id="tipo" name="tipo" >
                    <option selected value="">Escolha</option>
                    <option>Perecíveis</option>
                    <option>Não Perecíveis</option>
                    <option>Limpeza</option>
                    <option>Hortifruti</option>
                    <option>Higiene</option>
                    <option>Bebidas</option>
                    <option>Congelados</option>
                    <option>Produtos Pets</option>
                </select>
            </div>
            <br>
            <div class="col-12">
                <button class="btn btn-primary" type="submit" href="/cadastrarProduto">Cadastrar</button>
            </div>
        </form>
    </div>
        </center>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
    `);
}

function menuView(req, resp) {
    resp.send(` <html>
<head>
    <title>Menu</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXhW+ALEwIH" crossorigin="anonymous">
    <meta charset="utf-8">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f6f9;
            color: #343a40;
        }

        .navbar-custom {
            background-color: #ffffff;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            padding: 1rem;
        }

        .navbar-brand {
            font-weight: bold;
            font-size: 1.5em;
            color: #2c3e50;
            transition: color 0.3s;
        }

        .navbar-brand:hover {
            color: #1e90ff;
        }

        .navbar-nav .nav-link {
            font-weight: 500;
            color: #343a40;
            transition: color 0.3s;
        }

        .navbar-nav .nav-link:hover, 
        .navbar-nav .nav-link.active {
            color: #1e90ff;
            font-weight: 600;
        }

        .navbar-nav .nav-item {
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Menu</a>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/cadastrarProduto">Cadastrar Produtos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>`)
}

function cadastraProduto(req, resp) {

    const nome = req.body.nome;
    const codigo = req.body.cod;
    const quantidade = req.body.quant;
    const valor = req.body.valor;
    const tipo = req.body.tipo;




    if (nome && codigo > 0 && quantidade > 0 && valor > 0 & tipo) {

        const produto = { nome, codigo, quantidade, valor, tipo };


        listaProdutos.push(produto);
        resp.write(`<html>
    <head>
        <title>Lista de Produtos</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXhW+ALEwIH" crossorigin="anonymous">
        <meta charset="utf-8">
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f4f6f9;
                color: #343a40;
            }
            .container {
                max-width: 900px;
                margin-top: 50px;
                background-color: #ffffff;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            h1 {
                color: #2c3e50;
                text-align: center;
                margin-bottom: 20px;
                font-size: 1.8em;
            }
            .table {
                margin-top: 20px;
                border-collapse: collapse;
            }
            .table thead {
                background-color: #2c3e50;
                color: #ffffff;
                text-align: left;
            }
            .table th, .table td {
                padding: 12px 15px;
            }
            .table tbody tr {
                transition: background-color 0.3s ease;
            }
            .table tbody tr:hover {
                background-color: #f1f3f5;
            }
            .btn {
                margin-top: 20px;
                padding: 10px 20px;
                border-radius: 5px;
                font-size: 1em;
            }
            .btn-primary {
                background-color: #1e90ff;
                border: none;
                transition: background-color 0.3s;
                 color: white;

            }
            .btn-primary:hover {
                background-color: #0066cc;
                 color: white;
            }
            .btn-secondary {
                background-color: #6c757d;
                border: none;
                transition: background-color 0.3s;
                 color: white;
            }
            .btn-secondary:hover {
                background-color: #5a6268;
                 color: white;
            }
            .d-flex {
                justify-content: space-between;
                align-items: center;
            }
                
        </style>
    </head>
    <body>
    <center>
        <div class="container">
            <h1>Lista de Produtos</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Nome do Produto</th>
                        <th scope="col">Código</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    ${listaProdutos.map(produto => `
                        <tr>
                            <td>${produto.nome}</td>
                            <td>${produto.codigo}</td>
                            <td>${produto.quantidade}</td>
                            <td>R$ ${parseFloat(produto.valor).toFixed(2)}</td>
                            <td>${produto.tipo}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="d-flex">
                <a class="btn btn-primary" href="/cadastrarProduto">Continuar Cadastrando</a>
                <a class="btn btn-secondary" href="/">Voltar ao Menu</a>
            </div>
        </div>
        </center>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>

`);
    } else {
        const tp = {
            "Perecíveis": "Perecíveis",
            "Não Perecíveis": "Não Perecíveis",
            "Limpeza": "Limpeza",
            "Hortifruti": "Hortifruti",
            "Higiene": "Higiene",
            "Bebidas": "Bebidas",
            "Congelados": "Congelados",
            "Produtos Pets": "Produtos Pets",
        }
        resp.write(` <html>
<head>
    <title>Cadastro de Produto</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXhW+ALEwIH" crossorigin="anonymous">
    <meta charset="utf-8">
    <style>
      
        body {
            font-family: Georgia, serif;
            background-color: #f7f9fc;
            color: #343a40;
        }

      
        .container {
            max-width: 600px;
            margin-top: 50px;
            padding: 30px;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }

        
        h1 {
            font-size: 1.8em;
            color: #2c3e50;
            text-align: center;
            margin-bottom: 20px;
            font-weight: bold;
        }
        .btn-primary {
            background-color: #2c3e50;;
            color: white;
            font-weight: bold;
            transition: background-color 0.3s ease;
            width: 50%;
        }

        .btn-primary:hover {
            background-color: #C0C0C0;
        }

       
        .form-label {
            font-weight: 500;
            color: #555;
        }

        .form-control, .form-select {
            border-radius: 4px;
        }
    </style>
</head>
<body>
<center>
    <div class="container">
        <h1>Cadastro de Produto</h1>
        <form method="POST" action="/cadastrarProduto" class="row g-3" novalidate>
            <div class="col-md-12">
                <label for="nome" class="form-label">Nome do Produto:</label>
                <input type="text" class="form-control" id="nome" name="nome" value="${nome}" >
                `);
        if (!nome) {
            resp.write(`
                        <div>
                           <span><p style="color: red;" >Você deve informar o nome do produto</p></span> 
                        </div>`);
        }
        resp.write(`</div>
            <div class="col-md-6">
                <label for="cod" class="form-label">Código:</label>
                <input type="number" class="form-control" id="cod" name="cod" value="${codigo}">`);
        if (!codigo) {
            resp.write(`
              <div>
                  <span>
                   <p style="color: red;">Você deve informar o código do produto</p>
                  </span> 
             </div>`);
        }
        resp.write(`</div>
            <div class="col-md-6">
                <label for="quant" class="form-label">Quantidade:</label>
                <input type="number" class="form-control" id="quant" name="quant" value="${quantidade}">`);
        if (!quantidade) {
            resp.write(`
                        <div>
                           <span><p style="color: red;" >Você deve informar a quantidade do produto</p></span> 
                        </div>`);
        }
        resp.write(`</div>
            <div class="col-md-6">
                <label for="valor" class="form-label">Valor por unidade:</label>
                <input type="number" class="form-control" id="valor" name="valor" step="0.01" value="${valor}" >`);
        if (!valor) {
            resp.write(`
                        <div>
                           <span><p  style="color: red;">Você deve informar o valor do produto</p></span> 
                        </div>`);
        }
        resp.write(`</div>
            <div class="col-md-6">
                <label for="tipo" class="form-label">Tipo do Produto:</label>
                <select class="form-select" id="tipo" name="tipo">`);

        for (let [sigla, nomeTipo] of Object.entries(tp)) {
            if (sigla == tipo) {
                resp.write(`<option selected value ="${sigla}">${nomeTipo}</option>`);
            }
            else {
                resp.write(`<option value ="${sigla}">${nomeTipo}</option>`);
            }
        }
        resp.write(`</select>`);
        resp.write(` </div>
            <br>
            <div class="col-12">
                <button class="btn btn-primary" type="submit" href="/cadastrarProduto">Cadastrar</button>
            </div>
        </form>
    </div>
        </center>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>`);
    }
    resp.end();
}


app.get('/', menuView);
app.get('/cadastrarProduto', cadastroProdutoView);
app.post('/cadastrarProduto', cadastraProduto);


app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em execução no endereço http://${host}:${porta}`);
});
