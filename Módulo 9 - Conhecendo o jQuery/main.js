$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();           // comando para deslizar para baixo o formulário
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();         // comando para deslizar para cima o formulário
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaImagemNova = $('#endereco-imagem-nova').val();    // js == value   JQuery == val
        const novoItem  = $('<li style="dis"></li>');
        $(`<img src="${enderecoDaImagemNova}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaImagemNova}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(3000);
        $('#endereco-imagem-nova').val('')
    })
})


/*
comando para chamar a ação em 2 clicks
$('header button').dblclick(function(){
    alert('Expandir formulário')
})
*/
