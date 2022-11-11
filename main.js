$(document).ready(function() {

$('#telefone').mask('(00) 00000-0000', {
                placeholder: "(xx) xxxxx-xxxx"
            })
$('#cpf').mask('000.000.000-00', {
                placeholder: "xxx.xxx.xxx-xx"
            })
$('#cep').mask('00000-000', {
                placeholder: "xxxxx-xxx"
            })                                       
            
$('form').validate({
		rules:{
			nome: {
				required: true,
				maxlength: 100,
				minlength: 10,
                minwords: 2
            },
            email: {
                required: true,
                email: true
            },
            endereço: {
                required: true,                
            },
            telefone: {
                required: true,                                                    
            }, 
            veiculo: {
                required: true,
            },             
            cep: {
                required: true,
            },
            cpf: {
                required: true,
            }                                 
        },
        messages: {
            nome: 'Por favor insira seu nome'
        },       
        invalidHandler: function(evento, validador){
            let campoIncorretos = validador.numberOfInvalids();
            if(campoIncorretos) {
                alert('Existem ' + campoIncorretos + ' campos sem preencher!!!')
            }
        }        
    })
})