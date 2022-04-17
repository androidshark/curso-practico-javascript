// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/ 100;

    return precioConDescuento;
}



// console.log({
// precioOriginal,
// descuento,
// porcentajePrecioConDescuento,
// precioConDescuento,
// })



function onClickButtonPriceDiscount(){
    const priceValue = document.getElementById("InputPrice").value;
    const discountValue = document.getElementById("InputDiscount").value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

const resultP = document.getElementById("resultp");
// cambia el contenido de los elementos en html 
resultP.innerText = `El precio con descuento es $ ${precioConDescuento}`;

}


// VERSION 1 Y 2
// verificacion de cupon
// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ];


const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];


function onClickButtonPriceCoupon() {
    const inputPrice = document.getElementById("InputPrice2");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
   
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
  
    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("resultp2");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}


// const inputCoupon = document.getElementById("InputCoupon");
// const couponValue = inputCoupon.value;

// SOLUCION 1

    // switch(couponValue) {
    //   case coupons[0]: // "JuanDC_es_Batman"
    //     descuento = 15;
    //   break;
    //   case coupons[1]: // "pero_no_le_digas_a_nadie"
    //     descuento = 30;
    //   break;
    //   case coupons[2]: // "es_un_secreto"
    //     descuento = 25;
    //   break;
    // }

    // SOLUCION 2 (si no lo incluye en el array)
    // if (!coupons.includes(couponValue)) {
    //     alert("El cupón " + couponValue + "no es válido");
    //  } else if (couponValue === "JuanDC_es_Batman") {
    //     descuento = 15;
    //  } else if (couponValue === "pero_no_le_digas_a_nadie") {
    //     descuento = 30;
    //  } else if (couponValue === "es_un_secreto") {
    //     descuento = 25;
    //  }



    // VERSION 1 Y 2
    // const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    // console.log({
    //     priceValue,
    //     descuento,
    //     precioConDescuento
    // });



    // const resultP = document.getElementById("resultp2");
    // resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
 
