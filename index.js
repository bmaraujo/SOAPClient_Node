const soap = require('soap');

const wsdlURL = 'http://brickset.com/api/v2.asmx?WSDL';

function callSOAP(){
	soap.createClient(wsdlURL, function(err,client){
		if(err){
			console.log("####### ERRO: " + err);
		}

		//Aqui são os elementos do método que vou chamar
		//no caso só o apiKey é obrigatorio, estou passando um qualquer, por isto um erro no retorno
		var args = {
                apiKey:'123',
                userHash:'',
                query:'',
                theme:'',
                subtheme:'',
                setNumber:'',
                year:year,
                owned:'',
                wanted:'',
                orderBy:'',
                pageSize:'1',
                pageNumber:'1',
                userName:''
            }

        client.getSets(args, function(err,result){
	        if(err){
				console.log("------- ERRO: " + err);
			}

			console.log('results:' + result.getSetsResult.sets.length);
        });
	});
}

exports.callSOAP = callSOAP;