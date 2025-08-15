<?php

// Habilitar exibição de erros pode ajudar a depurar (remova em produção)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// --- 1. Captura dos dados do formulário simplificado ---
$nome = $_POST['Nome'] ?? '';
$email = $_POST['E-mail'] ?? '';
$telefone = $_POST['Telefone'] ?? '';
$empresa = $_POST['Empresa'] ?? '';
$cnpj = $_POST['CNPJ'] ?? '';

// Em PHP, nomes de campos com espaços vindos de um POST são convertidos para underscores.
$setor = $_POST['Setor_de_Atuação'] ?? $_POST['Setor de Atuação'] ?? '';
$solucao = $_POST['Solução_de_Interesse'] ?? $_POST['Solução de Interesse'] ?? '';
$mensagem = $_POST['Mensagem'] ?? '';

// --- 2. Construção do corpo do e-mail em HTML (atualizado) ---
$corpo = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { width: 100%; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }
    .header { background-color: #f4f4f4; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
    th { background-color: #f9f9f9; font-weight: bold; width: 30%; }
    .message-box { margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #4A90E2; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h2>Novo Lead Recebido do Site Notreve Tecnologia</h2>
    </div>
    <div class='content'>
      <h3>Dados do Contato</h3>
      <table>
        <tr><th>Nome</th><td>$nome</td></tr>
        <tr><th>E-mail</th><td>$email</td></tr>
        <tr><th>Telefone</th><td>$telefone</td></tr>
      </table>
      <br>
      <h3>Dados da Empresa</h3>
      <table>
        <tr><th>Empresa</th><td>$empresa</td></tr>
        <tr><th>CNPJ / CPF</th><td>$cnpj</td></tr>
        <tr><th>Setor de Atuação</th><td>$setor</td></tr>
        <tr><th>Solução de Interesse</th><td>$solucao</td></tr>
      </table>
      <div class='message-box'>
        <strong>Mensagem do Cliente:</strong><br>
        <p>" . nl2br(htmlspecialchars($mensagem)) . "</p>
      </div>
    </div>
  </div>
</body>
</html>
";

// --- 3. Lógica de Envio para a API da Brevo ---

// Endpoint da API
$url = 'https://api.brevo.com/v3/smtp/email';

// ##################################################################
// # IMPORTANTE: COLOQUE SUA CHAVE DA API DA BREVO AQUI             #
// # Você pode obter a chave em: https://app.brevo.com/settings/keys/smtp
// ##################################################################
// Sua chave da API (usando variável de ambiente, que é a forma correta)
//$apiKey = getenv('BREVO_API_KEY');
$apiKey = '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';

// Dados do e-mail
$data = [
    'sender' => [
        'name' => 'Site Notreve Tecnologia',
        'email' => 'desenvolvimento@notrevetech.com.br' // Este e-mail precisa estar validado na Brevo
    ],
    'to' => [
        ['email' => 'overhighdevelopment@gmail.com', 'name' => 'Comercial Notreve']
    ],
    'replyTo' => [
        'email' => $email,
        'name' => $nome
    ],
    'subject' => "Novo Lead do Site Notreve Tecnologia - $empresa",
    'htmlContent' => $corpo
];

// Enviando via cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'accept: application/json',
    'api-key: ' . $apiKey,
    'content-type: application/json'
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Verifica resposta e redireciona
if ($httpCode >= 200 && $httpCode < 300) {
    header("Location: obrigado.html");
    exit;
} else {
    // Para depuração, mostra o erro. Em produção, você pode querer logar isso em um arquivo.
    echo "Erro ao enviar o e-mail. Código de status: $httpCode<br>Resposta da API: $response";
}
?>
