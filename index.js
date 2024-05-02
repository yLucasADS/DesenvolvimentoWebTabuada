import http from 'http';
import url,{URLSearchParams} from 'url';


const host = 'localhost';
const porta = 4000;



function responderRequisicao(requisicao,resposta){
    


    
       if(requisicao.method== "GET"){
        

        const dados = new URLSearchParams(url.parse(requisicao.url).query);
        const tabuada = dados.get('tabuada');
        const sequencia = dados.get('sequencia')||10;
        var i ;
        var res;
 


        resposta.setHeader('Content-Type','text/html');
        resposta.write('<html>');

               resposta.write('<head>');
               resposta.write('<meta charset="UTF-8">');

                              resposta.write('<title>');
                             
                              resposta.write('</title>');

               resposta.write('</head>');

                     resposta.write('<body>');

                      resposta.write('<p><h1>TABUADA</h1></p>');

               
                      if(tabuada && sequencia ){
                     
                  
                    for(i=0;i-1<sequencia;i++){
                           
                            res=tabuada*i;
                            resposta.write('<br>');
                            resposta.write("\n"+tabuada + "X"+i+"="+res);
                        }
                 
                    resposta.write('</body>');

        resposta.write('</html>');
        resposta.end();


       }

}


}



const servidor = http.createServer(responderRequisicao);

servidor.listen(porta,host,() =>{
    console.log('servidor escutando em htpp://'+host+':'+porta);

})
