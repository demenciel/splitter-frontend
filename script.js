let totalText = document.querySelector('#total-amount-person');
let buttonList = document.querySelectorAll(".tip-button");



$('#people-amount').keyup(function () {
    buttonList.forEach(function (i) {
        i.addEventListener("click", function (e) {
            // Change bckgrnd color
            $(i).addClass('buttonClicked');

            var tip = e.target.id;
            var tipPrice = ((($('#bill-amount').val() / 100 * tip)) / $('#people-amount').val());
            var roundTipPrice = tipPrice.toFixed(2);
            var stringtoFloat = parseFloat(roundTipPrice)
            // Change Text
            $('#tip-amount-person').text('$' + stringtoFloat);

            var amountPerson = (($('#bill-amount').val()) / $('#people-amount').val());
            var amountPlusTip = parseFloat(amountPerson) + stringtoFloat;
            var plusTipRounded = Math.round(amountPlusTip * 100) / 100;
            // Change Text
            $('#total-amount-person').text('$' + plusTipRounded);
        })
    });
});

// $('#custom').click(() => {

// });

$('.button').click(() => {
    window.location.reload()
});



