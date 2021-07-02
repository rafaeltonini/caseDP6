// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//seletor para facilitar o codigo.
const c = (el)=>{
    return document.querySelector(el);
};

const cs = (el)=>{
    return document.querySelectorAll(el);
};

//Tratamento do envio do link "entre em contato"
c('.menu-lista-contato').addEventListener('click', (e) => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
      });
});

//Tratamento do envio do link "download"
c('.menu-lista-download').addEventListener('click', (e) => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
      });
});

//Tratamento do envio dos botoes da pagina de analise
cs('.card.card-montadoras').forEach( item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let nomeBotao = item.getAttribute('data-name'); //pego o atributo para saber qual botao esta enviando dados.
        
        ga('send', {
            hitType: 'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: nomeBotao
          });
        console.log(`Nome: ${nomeBotao} Elemento: ${e}`);
    });
    
});

//Tratamento dos eventos de formulario(botao submit esta sendo tratado no main.js):
const form = document.querySelector('form.contato');
if (form != null) {
    form.addEventListener('focusout', (e) => {
        if (e.target.id.length > 0) {
            ga('send', {
                hitType: 'event',
                eventCategory: 'contato',
                eventAction: e.target.id,
                eventLabel: 'preencheu'
            });
        }
    });
}