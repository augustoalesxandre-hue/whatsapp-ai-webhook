const express=require("express");
const app=express();
app.use(express.json());

app.get("/",(req,res)=>res.send("OK"));

app.get("/webhook",(req,res)=>{
if(req.query["hub.verify_token"]===process.env.VERIFY_TOKEN){
return res.send(req.query["hub.challenge"]);
}
res.sendStatus(403);
});

app.post("/webhook",(req,res)=>{
console.log(req.body);
res.sendStatus(200);
});
app.get("/privacy", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Política de Privacidade - Genora IA</title>
      </head>
      <body style="font-family: Arial; max-width: 800px; margin: 40px auto; line-height: 1.6;">
        <h1>Política de Privacidade - Genora IA</h1>

        <p>A Genora IA utiliza informações fornecidas pelos usuários exclusivamente para atendimento, comunicação e prestação de serviços por meio do WhatsApp.</p>

        <p>Os dados podem incluir nome, telefone, mensagens enviadas e demais informações fornecidas voluntariamente durante o atendimento.</p>

        <p>Os dados não são vendidos nem comercializados com terceiros.</p>

        <p>As informações podem ser processadas por serviços necessários ao funcionamento da plataforma, incluindo infraestrutura de hospedagem, serviços de inteligência artificial e a plataforma WhatsApp Business da Meta.</p>

        <p>O usuário poderá solicitar informações, correção ou exclusão de seus dados entrando em contato com o responsável pela Genora IA.</p>

        <p>Esta política poderá ser atualizada para refletir melhorias no serviço ou alterações legais.</p>

        <p>Última atualização: setembro de 2026.</p>
      </body>
    </html>
  `);
});
app.get("/delete-data", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Exclusão de Dados - Genora IA</title>
      </head>
      <body style="font-family: Arial; max-width: 800px; margin: 40px auto; line-height: 1.6;">
        <h1>Exclusão de Dados - Genora IA</h1>

        <p>O usuário pode solicitar a exclusão de seus dados pessoais tratados pela Genora IA.</p>

        <p>Para solicitar a exclusão, entre em contato com o responsável pela Genora IA e informe o número de telefone utilizado no atendimento pelo WhatsApp.</p>

        <p>Após a confirmação da identidade do solicitante, os dados elegíveis para exclusão serão removidos dos sistemas utilizados pela Genora IA, respeitando obrigações legais e regulatórias aplicáveis.</p>

        <p>Também poderão ser excluídos registros de atendimento, mensagens armazenadas e demais informações vinculadas ao usuário, quando permitido por lei.</p>

        <p>Última atualização: setembro de 2026.</p>
      </body>
    </html>
  `);
});
app.listen(process.env.PORT||10000);
