import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));


const porta = 3000;
const host = '0.0.0.0';

var listaEmpresas = [];

function cadastrodeEmpresasView(req, res) {
    res.send(`
        <html>
<head>
    <title>Cadastro de Empresas</title>
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
        <h1>Cadastro de Empresas</h1>
      <form method="POST" action="/cadastrarEmpresa" class="row g-3" novalidate>

            <div class="col-md-12">
                <label for="nome" class="form-label">Nome do Fornecedor:</label>
                <input type="text" class="form-control" id="nome" name="nome" >
            </div>
            <div class="col-md-6">
                 <label for="cnpj" class="form-label">CNPJ:</label>
                <input type="text" class="form-control" id="cnpj" name="cnpj" >
            </div>
            <div class="col-md-6">
                <label for="nomef" class="form-label">Nome Fantasia:</label>
                <input type="text" class="form-control" id="nomef" name="nomef" >
            </div>
            <div class="col-md-6">
    <label for="Endereco" class="form-label">Endereço:</label>
    <input type="text" class="form-control" id="endereco" name="endereco">
</div>
            <div class="col-md-6">
                <label for="tel" class="form-label">Telefone:</label>
                <input type="text" class="form-control" id="tel" name="tel" >
            </div>
            <div class="col-md-6">
                <label for="email" class="form-label">E-mail:</label>
                <input type="text" class="form-control" id="email" name="email" >
            </div>
            
            <div class="col-md-6">
                <label for="cep" class="form-label">CEP:</label>
                <input type="text" class="form-control" id="cep" name="cep" >
            </div>
            <div class="col-md-6">
                <label for="uf" class="form-label">UF:</label>
               <select class="form-select" id="uf" name="uf">
                    <option value="" selected disabled>Selecione o estado</option>
                    <option value="AC">Acre (AC)</option>
                    <option value="AL">Alagoas (AL)</option>
                    <option value="AP">Amapá (AP)</option>
                    <option value="AM">Amazonas (AM)</option>
                    <option value="BA">Bahia (BA)</option>
                    <option value="CE">Ceará (CE)</option>
                    <option value="DF">Distrito Federal (DF)</option>
                    <option value="ES">Espírito Santo (ES)</option>
                    <option value="GO">Goiás (GO)</option>
                    <option value="MA">Maranhão (MA)</option>
                    <option value="MT">Mato Grosso (MT)</option>
                    <option value="MS">Mato Grosso do Sul (MS)</option>
                    <option value="MG">Minas Gerais (MG)</option>
                    <option value="PA">Pará (PA)</option>
                    <option value="PB">Paraíba (PB)</option>
                    <option value="PR">Paraná (PR)</option>
                    <option value="PE">Pernambuco (PE)</option>
                    <option value="PI">Piauí (PI)</option>
                    <option value="RJ">Rio de Janeiro (RJ)</option>
                    <option value="RN">Rio Grande do Norte (RN)</option>
                    <option value="RS">Rio Grande do Sul (RS)</option>
                    <option value="RO">Rondônia (RO)</option>
                    <option value="RR">Roraima (RR)</option>
                    <option value="SC">Santa Catarina (SC)</option>
                    <option value="SP">São Paulo (SP)</option>
                    <option value="SE">Sergipe (SE)</option>
                    <option value="TO">Tocantins (TO)</option>
                </select>
            </div>
             <div class="col-md-6">
                <label for="cid" class="form-label">Cidade:</label>
                <input type="text" class="form-control" id="cid" name="cid" >
            </div>
            <br>
            <div class="col-12">
                  <button class="btn btn-primary" type="submit">Cadastrar</button>
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
                        <a class="nav-link active" aria-current="page" href="/cadastrarEmpresa">Cadastrar Empresas</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>`)
}

function cadastraEmpresa(req, resp) {
    const nome = req.body.nome;
    const cnpj = req.body.cnpj;
    const nomef = req.body.nomef;
    const endereco = req.body.endereco;
    const tel = req.body.tel;
    const email = req.body.email;
    const uf = req.body.uf;
    const cep = req.body.cep;
    const cid = req.body.cid;

    if (nome && cnpj && nomef && endereco && tel && email && uf && cep && cid) {
        const empresa = { nome, cnpj, nomef, endereco, tel, email, uf, cep, cid };
        listaEmpresas.push(empresa);
        resp.write(`<html>
    <head>
        <title>Lista de Empresas</title>
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
            <h1>Lista de Empresas</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Nome da Empresa</th>
                        <th scope="col">CNPJ</th>
                        <th scope="col">Nome Fantasia</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">UF</th>
                        <th scope="col">CEP</th>
                        <th scope="col">Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    ${listaEmpresas.map(Empresa => `
                        <tr>
                            <td>${Empresa.nome}</td>
                            <td>${Empresa.cnpj}</td>
                            <td>${Empresa.nomef}</td>
                            <td>${Empresa.endereco}</td>
                            <td>${Empresa.tel}</td>
                            <td>${Empresa.email}</td>
                            <td>${Empresa.uf}</td>
                            <td>${Empresa.cep}</td>
                            <td>${Empresa.cid}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="d-flex">
                <a class="btn btn-primary" href="/cadastrarEmpresa">Continuar Cadastrando</a>
                <a class="btn btn-secondary" href="/">Voltar ao Menu</a>
            </div>
        </div>
        </center>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>

`);
    } else {
        const ufs = {
            "AC": "Acre (AC)",
            "AL": "Alagoas (AL)",
            "AP": "Amapá (AP)",
            "AM": "Amazonas (AM)",
            "BA": "Bahia (BA)",
            "CE": "Ceará (CE)",
            "DF": "Distrito Federal (DF)",
            "ES": "Espírito Santo (ES)",
            "GO": "Goiás (GO)",
            "MA": "Maranhão (MA)",
            "MT": "Mato Grosso (MT)",
            "MS": "Mato Grosso do Sul (MS)",
            "MG": "Minas Gerais (MG)",
            "PA": "Pará (PA)",
            "PB": "Paraíba (PB)",
            "PR": "Paraná (PR)",
            "PE": "Pernambuco (PE)",
            "PI": "Piauí (PI)",
            "RJ": "Rio de Janeiro (RJ)",
            "RN": "Rio Grande do Norte (RN)",
            "RS": "Rio Grande do Sul (RS)",
            "RO": "Rondônia (RO)",
            "RR": "Roraima (RR)",
            "SC": "Santa Catarina (SC)",
            "SP": "São Paulo (SP)",
            "SE": "Sergipe (SE)",
            "TO": "Tocantins (TO)"
        };

        resp.write(` <html>
<head>
    <title>Cadastro de Empresas</title>
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
        <h1>Cadastro de Empresas</h1>
       <form method="POST" action="/cadastrarEmpresa" class="row g-3" novalidate>

            <div class="col-md-12">
                <label for="nome" class="form-label">Nome do Fornecedor:</label>
                <input type="text" class="form-control" id="nome" name="nome" value="${nome}" >
                `);
        if (!nome) {
            resp.write(`
                        <div>
                           <span><p style="color: red;" >Você deve informar o nome da Empresa</p></span> 
                        </div>`);
        }
        resp.write(`</div>
            <div class="col-md-6">
                 <label for="cnpj" class="form-label">CNPJ:</label>
                <input type="text" class="form-control" id="cnpj" name="cnpj" value="${cnpj}" >`);
        if (!cnpj) {
            resp.write(`
              <div>
                  <span>
                   <p style="color: red;">Você deve informar o CNPJ da Empresa</p>
                  </span> 
             </div>`);
        }
        resp.write(` </div>
            <div class="col-md-6">
                <label for="nomef" class="form-label">Nome Fantasia:</label>
                <input type="text" class="form-control" id="nomef" name="nomef" value="${nomef}" >`);
        if (!nomef) {
            resp.write(`
                        <div>
                           <span><p style="color: red;" >Você deve informar o Nome Fantasia da Empresa</p></span> 
                        </div>`);
        }
        resp.write(` </div>
            <div class="col-md-6">
                <label for="endereco" class="form-label">Endereço:</label>
                <input type="text" class="form-control" id="endereco" name="endereco" value="${endereco}" >`);
        if (!endereco) {
            resp.write(`
                        <div>
                           <span><p  style="color: red;">Você deve informar o endereço da Empresa</p></span> 
                        </div>`);
        }
        resp.write(`</div>
            <div class="col-md-6">
                <label for="tel" class="form-label">Telefone:</label>
                <input type="text" class="form-control" id="tel" name="tel" value="${tel}"  >`);
        if (!tel) {
            resp.write(`
                        <div>
                           <span><p  style="color: red;">Você deve informar o Telefone da Empresa</p></span> 
                        </div>`);
        }
        resp.write(`</div>
            <div class="col-md-6">
                <label for="email" class="form-label">E-mail:</label>
                <input type="text" class="form-control" id="email" name="email"  value="${email}"  >`);
        if (!email) {
            resp.write(`
                        <div>
                           <span><p  style="color: red;">Você deve informar o E-mail da Empresa</p></span> 
                        </div>`);
        }
        resp.write(` </div>
            
            <div class="col-md-6">
                <label for="cep" class="form-label">CEP:</label>
                <input type="text" class="form-control" id="cep" name="cep" value="${cep}"   >`);
        if (!cep) {
            resp.write(`
                        <div>
                           <span><p  style="color: red;">Você deve informar o CEP da Empresa</p></span> 
                        </div>`);
        }
        resp.write(`</div>
            <div class="col-md-6">
                <label for="tipo" class="form-label">Tipo do Produto:</label>
                <select class="form-select" id="tipo" name="tipo">`);

        for (let [sigla, nomeUf] of Object.entries(ufs)) {
            if (sigla == uf) {
                resp.write(`<option selected value ="${sigla}">${nomeUf}</option>`);
            }
            else {
                resp.write(`<option value ="${sigla}">${nomeUf}</option>`);
            }
        }
        resp.write(`</select>`);
        resp.write(`  </div>
             <div class="col-md-6">
                <label for="cid" class="form-label">Cidade:</label>
                <input type="text" class="form-control" id="cid" name="cid"  value="${cid}" >`);
        if (!cid) {
            resp.write(`
                        <div>
                           <span><p  style="color: red;">Você deve informar a Cidade da Empresa</p></span> 
                        </div>`);
        }
        resp.write(` </div>
            <br>
            <div class="col-12">
                <button class="btn btn-primary" type="submit" href="/cadastrarEmpresa">Cadastrar</button>
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
app.get('/cadastrarEmpresa', cadastrodeEmpresasView);
app.post('/cadastrarEmpresa', cadastraEmpresa);




app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});
