// An array of possible quotes
var quotes = [
		'"Só pelo amor o homem se realiza plenamente." - Platão',
		'"A parte que ignoramos é muito maior que tudo quanto sabemos." - Platão',
		'"Se temos a possibilidade de tornar mais feliz e mais sereno um ser humano, devemos fazê-lo sempre." - Herman Hesse',
		'"O mal surge quando o amor não é suficiente." - Herman Hesse',
		'"Só aquele que sabe amar é feliz." - Herman Hesse',
		'"Cautela com o amanhã, se não fores virtuoso hoje." - Hesíodo',
		'"Dura é a luta contra o desejo, que compra o que quer à custa da alma." - Heráclito',
		'"O caminho que desce e o caminho que sobe são os mesmos." - Heráclito',
		'"O homem é uma prisão em que a alma permanece livre." - Victor Hugo',
		'"O diabo pode citar as escrituras quando isso lhe convém." - Shakespeare',
		'"É preciso dizer a verdade apenas a quem está disposto a ouvi-la." - Séneca',
		'"A parte mais importante do progresso é o desejo de progredir." - Séneca',
		'"Os males de que foges estão em ti." - Séneca',
		'"O tempo revela a verdade." - Séneca',
		'"Conhece-te a ti mesmo e conhecerás o universo e os deuses." - Sócrates',
		'"Não é livre aquele que não obteve o domínio sobre si próprio." - Pitágoras',
		'"A razão vos é dada para discernir o bem e o mal." - Dante Alighieri',
		'"Não há religião superior à verdade." - H. P. Blavatsky',
		'"O homem comum é exigente com os outros, o homem superior é exigente consigo mesmo." - Marco Aurélio',
		'"Nem todos podem ser ilustres, mas todos podem ser bons." - Confúcio',
		'"De todas as sociedades nenhuma será mais nobre e mais estável, que aquela em que os homens estejam unidos pelo amor." - Cícero',
		'"Por meio do serviço desinteressado pode-se imprimir no mundo material a vibração das esferas celestes." - Clemente',
		'"Não se pode exprimir por palavras a passagem do estado humano ao divino." - Dante Alighieri',
		'"Se queres conhecer uma pessoa, não lhe perguntes o que pensa mas sim o que ela ama." - Santo Agostinho',
		'"O reino de Deus está dentro de vós." - Jesus Cristo',
		'"A habilidade em não coagir a vontade do próximo é um dos testes mais dificeis." - Mestre Morya',
		'"Aquele que honras acima de todas as coisas terá domínio sobre ti. Mas se te entregares ao domínio de Deus dominarás todas as coisas." - Pitágoras',
		'"A força dos números não dá alegria senão ao medroso. Aquele que é corajoso em espírito sente-se glorioso por combater sozinho." - Gandhi',
		'"O fogo ilumina com êxito, pois ele não irradia para si mesmo." - Mestre Morya',
		'"O verdadeiro sábio é um eterno aprendiz. Não existe verdadeira inteligência sem bondade." - Beethoven',
		'"Não basta combater o mal, é necessário ser activo no Bem." - Krishnamurti',
		'"O Tao nunca leva a cabo nenhuma acção. Porém, não deixa nada por fazer." - Lao Tsé',
		'"Não sabeis vós que sois o templo de Deus e que o Espírito de Deus habita em vós?" - Paulo de Tarso'];
var currentQuote = 0;

function nextQuote(showImmediately) {
    // We can use a promise to make sure that we don't switch the
    // quote out until the text is hidden
    var hidden = $.Deferred();

    if (!showImmediately)
        $('#quotescla').fadeOut('slow', function() { hidden.resolve(); });
    else
        hidden.resolve();

    // Once the promise is resolved, go ahead and modify the DOM
    hidden.promise().done(function() {

        // Get a quote that's not the current one
        // (we may need to try a few times if it's a small array
        var randomIndex = currentQuote;
        while (randomIndex == currentQuote) {
            randomIndex = (Math.floor(Math.random() * quotes.length));
        }

        // Now switch it out and fade back in
        $('#quotescla').html(quotes[randomIndex]);
        $('#quotescla').fadeIn('slow');
        currentQuote = randomIndex;
    });
}

setTimeout(function() { nextQuote(false); }, 500);
setInterval(function() { nextQuote(false); }, 9000);


// Change active link as we scroll.
// Cache selectors
var lastId,
    topMenu = $("#navbar"),
    topMenuHeight = topMenu.outerHeight()+56,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});



// Adjust navbar link position to compensate navbar height.
$('li#linavini').click(function(){
 positionquem = $('#landing').offset().top - 55; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionquem}, '500', 'swing');
})
$('li#linavque').click(function(){
 positionquem = $('#quemsomos').offset().top - 55; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionquem}, '500', 'swing');
})
$('li#linaveve').click(function(){
 positioneve = $('#eventos').offset().top - 55; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positioneve}, '500', 'swing');
})
$('li#linavage').click(function(){
 positioneve = $('#agenda').offset().top - 55; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positioneve}, '500', 'swing');
})
$('li#linavcon').click(function(){
 positioncon = $('#contactos').offset().top - 55; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positioncon}, '500', 'swing');
})

// Adjust height of message field in contact form.
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}



// Checkbox filters

var sections = $('.eventoslayoutsm');
function updateContentVisibility(){
    var checked = $(".checkbox :checkbox:checked");
    if(checked.length){
        sections.hide();
        checked.each(function(){
            $("." + $(this).val()).show();
        });
    } else {
        sections.show();
    }
}

$(".checkbox :checkbox").click(updateContentVisibility);
updateContentVisibility();


// Navbar collapse
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


// Musica

var yourAudio = document.getElementsByTagName('audio')[0];
    ctrl = document.getElementById('pauseplay');

ctrl.onclick = function () {

    pause_html='<img src="img/redon.png">';
    play_html='<img src="img/redoff.png">';

    // Update the Button
    var pause = ctrl.innerHTML === pause_html;
    ctrl.innerHTML = pause ? play_html : pause_html;

    // Update the Audio
    var method = pause ? 'play' : 'pause';
    yourAudio[method]();

    // Prevent Default Action
    return false;
};

document.getElementsByTagName('audio')[0].addEventListener('ended', function(){
  ctrl.innerHTML=play_html;
});
