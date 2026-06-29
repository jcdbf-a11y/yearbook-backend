// Middleware de log — registra cada requisição no terminal
export default function logger(req, res, next) {
  const inicio = Date.now();                          
  const agora = new Date().toISOString();             
  const metodo = req.method;                          
  const url = req.originalUrl;                        

  
  res.on('finish', () => {
    const duracao = Date.now() - inicio;              
    const status = res.statusCode;                    
    
    console.log(`[${agora}] ${metodo} ${url} | Status: ${status} | Tempo: ${duracao}ms`);
  });

  next(); 
}