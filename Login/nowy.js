$(document).scroll(function() {
    var lol = $('#lol')
    var img1 = $('#img1')
    if($(window).scrollTop() > 400){

     lol.removeClass('black').addClass("pink");
     img1.removeClass('blind').addClass('sample');

    }
    var lol2 = $('#lol2')
    var img2 = $('#img2')
    if($(window).scrollTop() > 950){

     lol2.removeClass('black').addClass("pink");
     img2.removeClass('blind').addClass('sample');

    }
    var lol3 = $('#lol3')
    var img3 = $('#img3')
    if($(window).scrollTop() > 1250){

     lol3.removeClass('black').addClass("pink");
     img3.removeClass('blind').addClass('sample');

    }
    
    var scon = $('#text')
    if($(window).scrollTop() > 500 && $(window).scrollTop() <= 2450){

     scon.removeClass('text').removeClass('text2').addClass("textsticky");

    }else if($(window).scrollTop() > 2450){
        scon.removeClass('textsticky').removeClass('text').addClass("text2");
    }
    else if($(window).scrollTop() < 500){
     scon.removeClass('textsticky').removeClass('text2').addClass("text");
    }

});

$(document).scroll(function(){
    var one = $('#one')
    if($(window).scrollTop() < 400 ){
        one.removeClass('two').addClass("one");
        $(".tekst").html('');
    }
    else if($(window).scrollTop() > 400 && $(window).scrollTop() < 800){
        one.removeClass('one').addClass("two");
        $(".nag").html('Pokój klasy ...');
        $(".tekst").html('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin arcu a turpis pellentesque dictum. Quisque cursus posuere lectus, sed placerat metus sollicitudin eget. Pellentesque pellentesque lobortis nisi, vel ullamcorper diam ullamcorper a. Aenean a auctor metus. Quisque tortor magna, sodales et sapien vitae, consequat sagittis dolor. Aenean rhoncus nibh ut nulla consectetur, ac gravida nisl dignissim. Mauris in lacinia mi, quis pulvinar massa.');
    }
    else if($(window).scrollTop() > 800 && $(window).scrollTop() < 1300 ){
        one.removeClass('two').addClass("one");
    }
    else if($(window).scrollTop() > 1300 && $(window).scrollTop() < 1700){
        one.removeClass('one').addClass("two");
        $(".nag").html('Pokój klasy ...');
        $(".tekst").html('Duis facilisis pretium elit gravida aliquam. Quisque hendrerit, leo a gravida laoreet, mi risus pretium dui, non vestibulum magna purus at arcu. Nullam dignissim rutrum justo quis lacinia. Cras nec augue consequat, convallis diam nec, consectetur magna. Ut interdum placerat rhoncus. Suspendisse at dolor ipsum. Fusce facilisis lorem quis tincidunt dapibus.');
    }
    else if($(window).scrollTop() > 1700 && $(window).scrollTop() < 2200 ){
        one.removeClass('two').addClass("one");
    }
    else if($(window).scrollTop() > 2200 && $(window).scrollTop() < 2600){
        one.removeClass('one').addClass("two");
        $(".nag").html('Pokój klasy ...');
        $(".tekst").html('Duis ipsum arcu, dictum non ipsum ut, volutpat finibus purus. Morbi sit amet arcu et ex ultrices sagittis. Sed ac neque nec lectus lacinia vehicula. Vestibulum velit diam, lobortis eu elit id, pharetra hendrerit tortor.');
    }

});