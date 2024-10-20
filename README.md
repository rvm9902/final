<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Usuários</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Cadastro de Usuários</h1>
        <form id="registrationForm">
            <input type="text" id="name" placeholder="Nome" required>
            <input type="email" id="email" placeholder="E-mail" required>
            <button type="submit">Cadastrar</button>
        </form>
        
        <h2>Usuários Cadastrados</h2>
        <table id="userTable">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                <!-- Os cadastros aparecerão aqui -->
            </tbody>
        </table>
   
