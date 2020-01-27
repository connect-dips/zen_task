let timeout = 50;
let step = 1;
$( function() {

    $('.reload-control').on('click', function () {
        location.reload();
    })
    /*$('.increase').on('click', function () {
        step++;
    })
    $('.reduce').on('click', function () {
        console.log(step)
        if(step > 1){
            step--;
        }
    })*/

    $( ".sun" ).draggable({
        containment: "document",
        drag: function( event, ui ) {
            let windowH = $(window).height();
            let intensity = parseInt((ui.position.top/windowH)*100);
            console.log(intensity);
            $('.sun .two').css({'opacity': intensity/100})
            $('.gradient.five').css({'opacity': intensity/100})
        },
        start: function( event, ui ) {
            clearInterval(timer);
            timer = null;
            let windowH = $(window).height();
            let intensity = parseInt((ui.position.top/windowH)*100);
            $('.sun .two').css({'opacity': intensity/100})
            $('.gradient.five').css({'opacity': intensity/100})
        },
        stop: function( event, ui ) {
            clearInterval(timer);
            timer = null;
            timerloop(ui.position.top)
        }
    });
    timerloop()

} );
let timer = null;

function timerloop(point) {
    let pos = (point)?point:0;
    timer = setInterval(function () {
        $('.sun').css({'top': pos})
        let windowH = $(window).height();
        let intensity = parseInt((pos/windowH)*100) + 10;
        $('.sun .two').css({'opacity': intensity/100})
        $('.gradient.five').css({'opacity': intensity/100})
        pos = pos + step;

        if(pos >= $(window).height()-100){
            clearInterval(timer);
            timer = null;
            timerloop()
        }
    }, timeout);
}
