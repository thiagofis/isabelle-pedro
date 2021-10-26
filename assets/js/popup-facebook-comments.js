$(window).on('load',function () {
    //setTimeout(hiddeniFrame, 700);


    if(window.location.href.includes("#facebook-comments-page")){
        $('#writealine-trigger').trigger('click');
    }

});

function hiddeniFrame() {
    $("[title='fb:comments Facebook Social Plugin']").css("right", "1000000px");
}

$("#writealine-trigger").click(function () {
    $("[title='fb:comments Facebook Social Plugin']").css("right", "0px");
});

$("#writealine-close").click(function () {
    $("[title='fb:comments Facebook Social Plugin']").css("right", "1000000px");
});