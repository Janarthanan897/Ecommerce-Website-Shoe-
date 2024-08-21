window.onload = function () {
    const cod = document.getElementById('cod');
    const onlinePayment = document.getElementById('onlinePayment');
    const cardInfo = document.getElementById('cardInfo');

    cod.addEventListener('change', function () {
        if (this.checked) {
            onlinePayment.checked = false;
            cardInfo.style.display = 'none';
        }
    });

    onlinePayment.addEventListener('change', function () {
        if (this.checked) {
            cod.checked = false;
            cardInfo.style.display = 'block';
        } else {
            cardInfo.style.display = 'none';
        }
    });
};
