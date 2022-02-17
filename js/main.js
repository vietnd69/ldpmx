$(document).ready(function(){
    "use strict"

    $(".nd article").overlayScrollbars({ });

    var item = $("ul.item li"),
    form1 = $(".form1"),
    form2 = $(".form2"),
    form3 = $(".form3"),
    tem = $(".tem"),
    tem1 = $(".tem1"),
    tem2 = $(".tem2"),
    eclip = $(".eclip"),
    btn1 = $(".btn1"),
    btn2 = $(".btn2"),
    btn3 = $(".btn3"),
    formBox = $(".form-box"),
    nd = $(".nd"),
    bG = $(".b-g"),
    fr = $(".fr"),
    check = true;

    item.click(function(){
        item.removeClass("active");
        $(this).addClass("active");
        tem.addClass("hide");
        tem1.addClass("hide");
        tem2.addClass("hide");
        form1.addClass("active");
        eclip.addClass("active");
        bG.addClass("active");
        fr.addClass("active");
        nd.removeClass("active");
        formBox.removeClass("hide");
    })

    btn1.click(function(){
        if (check) {
            form1.removeClass("active");
            form2.addClass("active")
        }
    })

    btn2.click(function(){
        if (check) {
            form2.removeClass("active");
            form3.addClass("active")
        }
    })

    btn3.click(function(){
        if (check) {
            form3.removeClass("active");
            formBox.addClass("hide");
            nd.addClass("active")
        }
    })
    
})