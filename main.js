$(document).ready(function() {
    $('header,button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDanovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li></li>');
        $(`<img src="${enderecoDanovaImagem}"/>`).appenTo(novoItem);
        $(`
            <div class="ouverlay-imagem-link">
                <a href="${enderecoDanovaImagem}" target=_"blank" title="Ver a imagem em tamnho real">
                    Ver a imagem em tamanho real
                </a>
            </div>
        `).appenTo(novoItem);
        $(novoItem).appenTo('ul');
    })
})