function enviarEmail() {
    // Obter os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Configuração do ElasticEmail (substitua com suas credenciais e configurações)
    const apiKey = '017c4685-93d8-4465-ba36-a951039f4cd4'; // Sua chave de API do ElasticEmail
    const fromEmail = 'harlem.claumann@gmail.com'; // Seu email de remetente
    const toEmail = 'harlem.claumann@gmail.com'; // Email do destinatário

    // Construir o corpo da mensagem
    const body = `Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`;

    // Fazer a requisição para o ElasticEmail usando Fetch API
    fetch('https://api.elasticemail.com/v2/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey
        },
        body: JSON.stringify({
            from: fromEmail,
            to: toEmail,
            subject: 'Mensagem do Formulário',
            body: body
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar o email');
        }
        return response.json();
    })
    .then(data => {
        console.log('Email enviado com sucesso:', data);
        // Adicionar uma mensagem de sucesso para o usuário
        alert('Email enviado com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar o email:', error);
        // Adicionar uma mensagem de erro para o usuário
        alert('Ocorreu um erro ao enviar o email. Por favor, tente novamente.');
    });
}