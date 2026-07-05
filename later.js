function changeColor() {

    if (!currentProduct) return;

    const color =
        document.getElementById("color").value;

    document.getElementById("main-image").src =
        currentProduct.colors[color];

}

function updateTotal() {

    if (!currentProduct) return;

    const qty =
        parseInt(document.getElementById("qty").value);

    const total =
        (currentProduct.price * qty) + 50;

    document.getElementById("total-price").innerHTML =
        `<strong>Total: ₹${total}</strong>`;
}

function buyProduct() {

    if (!currentProduct) return;

    const color =
        document.getElementById("color").value;

    const qty =
        document.getElementById("qty").value;

    const total =
        (currentProduct.price * qty) + 50;

    const message =
`Hi, I would like to order.

Product: ${currentProduct.name}
Color: ${color}
Quantity: ${qty}

Total Amount: ₹${total}`;

    window.open(
        `https://wa.me/917012817684?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}


function scrollProductss() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

window.addEventListener("scroll", () => {

    document.querySelectorAll(".reveal").forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            element.classList.add("active");
        }

    });

});

function changeColor() {

    const color = document.getElementById("color").value;
    const image = document.getElementById("main-image");

    if (color === "blue") {
        image.src = "images/bluedod.jpeg";
    }
    else if (color === "red") {
        image.src = "images/reddod.jpeg";
    }
    else if (color === "black") {
        image.src = "images/bldod.jpeg";
    }

}

function changeColorPorsche() {
const color = document.getElementById("color").value;
    const image = document.getElementById("main-image");

    if (color === "blue") {
        image.src = "images/blaa.jpg";
    }
    else if (color === "red") {
        image.src = "images/ree.jpg";
    }
    else if (color === "yellow") {
        image.src = "images/ye.jpg";
    }
     else if (color === "green") {
        image.src = "images/gree.jpg";
    }


}

function buyProduct() {

    const color = document.getElementById("color").value;

     

    const qty =
        parseInt(document.getElementById("qty").value);

    const total =
        (199 * qty) + 50;
        
    const message =
`Hi, I want to order the Dodge Challenger With Stand.

Color: ${color}
Quantity: ${qty}

Total Amount: ₹${total}`;    

    window.open(
        `https://wa.me/917012817684?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}

function buyProductStand() {

    const qty =
        parseInt(document.getElementById("qty").value);

    const total =
        (25 * qty) + 50;
        
    const messageStand =
`Hi I want to order the 1:64 Stand.

Quantity: ${qty}

Total Amount: ₹${total}`; 


     window.open(
        `https://wa.me/917012817684?text=${encodeURIComponent(messageStand)}`,
        "_blank"
    );
}

function buyProductPorsche() {

    const color = document.getElementById("color").value;


    const qty =
        parseInt(document.getElementById("qty").value);

    const total =
        (179 * qty) + 50;
        
    const message =
`Hi, I want to order the Porsche 911 car.

Color: ${color}
Quantity: ${qty}

Total Amount: ₹${total}`;  

     window.open(
        `https://wa.me/917012817684?text=${encodeURIComponent(message)}`,
        "_blank"
    );    

}

function changeImage(src) {
            document.getElementById("main-image").src = src;
        }

        /*function buyProduct() {

            const color = document.getElementById("color").value;

            const message =
                `Hi, I want to order the Dodge Challenger With Stand.\nColor: ${color}`;

            window.open(
                `https://wa.me/917012817684?text=${encodeURIComponent(message)}`,
                "_blank"
            );
        }*/

        const productPriceDodge= 199;
        const productPriceStand= 25;
        const productPricePorsche= 179;
        const deliveryCharge= 50;

        function updateTotal() {

    const qty = parseInt(
        document.getElementById("qty").value
    );

    const total =
        (productPriceDodge * qty) + deliveryCharge;

    document.getElementById("total-price").innerText =
        `Total: ₹${total}`;
}

    function updateTotalStand() {

          const qty = parseInt(
        document.getElementById("qty").value
    );

    const total =
        (productPriceStand * qty) + deliveryCharge;

    document.getElementById("total-price").innerText =
        `Total: ₹${total}`;

    }

    function updateTotalPorsche() {

        const qty = parseInt(
        document.getElementById("qty").value
    );

    const total =
        (productPricePorsche * qty) + deliveryCharge;

    document.getElementById("total-price").innerText =
        `Total: ₹${total}`;

    }