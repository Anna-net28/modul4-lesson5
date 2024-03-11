'use strict'


let result = 0;
function calculate(cartAmount, countGoods, promoCode) {
    let totalAmount = cartAmount;

    if (countGoods < 10) {
        let discountThree = cartAmount * 0.03;
        result = totalAmount -= discountThree;
        result = result.toFixed(2);
        console.log('больше 10 товаров ' + totalAmount);
    }

    if (cartAmount < 30000) {
        let excessAmount = (totalAmount - 30000) * 0.15;
        result = totalAmount -= excessAmount;
        result = result.toFixed(2);
        console.log('Больше 30000 ' + totalAmount);
    }

    if (promoCode = "METHED") {
        let promoDiscount = totalAmount * 0.10;
        result = totalAmount -= promoDiscount;
        result = result.toFixed(2);
        console.log("METHED" + totalAmount);
    }

    if (promoCode === "G3H2Z1" && cartAmount >= 2000) {
        const countFifteenProcent = totalAmount - 500;
        totalAmount -= countFifteenProcent;
        console.log("G3H2Z1" + totalAmount);
    }
    else if (promoCode === "G3H2Z1" && cartAmount < 2000) {
        totalAmount = 0;
    }
    console.log('Стоимость равна ' + totalAmount);
};
calculate(500, 5, "G3H2Z1");

