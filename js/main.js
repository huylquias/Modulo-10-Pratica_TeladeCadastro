$(document).ready(function () {
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(12) 34567-8910'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder:'123.456.789-00'
    })
    $('#cep').mask('00000-000', {
        placeholder:'12345-678'
    })
    


    $('form').validate({
        rules:{ 
            nome:{
            required: true
        },
        email:{
            required: true,
            email: true,
        },
        telefone:{
            required: true
        },
        cpf:{ 
            required: true
        },
        endereco:{
            required: true
        },
        cep:{ 
            required: true
        },
        },
        messages:{
            nome:'<span class="erro">* Este campo é obrigatório.</span>',
            email:'<span class="erro">* Este campo é obrigatório.</span>',
            telefone:'<span class="erro">* Este campo é obrigatório.</span>',
            cpf:'<span class="erro">* Este campo é obrigatório.</span>',
            cep:'<span class="erro">* Este campo é obrigatório.</span>',
            endereco:'<span class="erro">* Este campo é obrigatório.</span>',
        },
        submitHandler: function(form) { 
            alert('Cadastro Realizado com sucesso!');
            form.submit();
        },
        invalidHandler: function(evento, validador) { 
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
    }
})

});