$(document).ready(function () {
    $("body").css("display", "none").fadeIn(1000);
    
    $("a").click(function(e){
        goTo = this.href;
        $("body").fadeOut(1000);
        setTimeout(redirect, 900);
        function redirect(){
            window.location = goTo;
        }

        e.preventDefault();
    }
    )



});

