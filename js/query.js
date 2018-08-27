$(document).ready(function () {
    $('.message a').click(function () {
        $('.driver-form').hide();
        $('.register-form').hide();
        $('.login-form').hide();
        $('.option-button-container').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });

    $('.option-button-container #Btn1').click(function () {
        $('.driver-form').hide();
        $('.register-form').hide();
        $('.option-button-container').hide();
        $('.login-form').hide();
        $('.register-form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });

    $('.option-button-container #Btn2').click(function () {
        $('.driver-form').hide();
        $('.register-form').hide();
        $('.option-button-container').hide();
        $('.login-form').hide();
        $('.driver-form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
})