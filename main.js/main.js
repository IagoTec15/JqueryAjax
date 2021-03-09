function ConsultaCEP(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value; // Variável cep recebe o id "cep" do index.html e retorna o valor.
    var url = "https://viacep.com.br/ws/" + cep + "/json/"  // O valor do cep é concatenado ao url.
    console.log(url)
    $.ajax({ /*Chamando o AJAX. Ele já é uma função do jQuery.*/
        url: url,
        type: "GET", /*Requisição do navegador usando tipo GET */
        success: function(response){ // No caso de sucesso, uma função traz o parâmetro response.
            console.log(response); // Utilizando o "$" nós acionamos o AJAX. Console mostra a resposta da requisição(response).
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#titulo_cep").html("CEP " + response.cep)
            $(".cep").show();
            $(".barra-progresso").hide();
            /*
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            */
        }
    })
}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})
