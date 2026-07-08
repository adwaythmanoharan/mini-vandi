const products = {

    dodge: {

        name: "Dodge Challenger With Stand",

        price: 199,

        description:
        "Premium 1:64 scale Dodge Challenger die-cast model with stand.",

        colors: {

            Blue: "images/bluedod.jpeg",

            Red: "images/reddod.jpeg",

            Black: "images/bldod.jpeg"

        }

    },

    porsche: {

        name: "Porsche 911 Inspired",

        price: 179,

        description:
        "Premium Porsche 911 inspired die-cast model.",

        colors: {

            Yellow: "images/ye.jpg",
            Red: "images/ree.jpg",
            Black: "images/blaa.jpg",
            Green: "images/gree.jpg"
            

        }

    },

    stand: {

        name: "1:64 Stand",

        price: 25,

        description:
        "Premium display stand for 1:64 die-cast models.",

        colors: {

            Black: "images/blacksta.jpg"

        }

    },

    bmwM4: {

        name: "CCA BMW M4",

        price: 450,

        description:
        "Premium CCA BMW M4 die-cast model.",

        colors: {

            Green: ["images/m4f.jpg",
                "images/m4s1.jpg",
                "images/m4s2.jpg"
            ]

        }

    },

     bmwM4gt3: {

        name: "CCA BMW M4 GT3",

        price: 599,

        description:
        "Premium CCA BMW M4 GT3 die-cast model.",

        colors: {

            Yellow: ["images/gt3m.jpg",
                "images/gt3s.jpg",
                "images/gt3f1.jpg",
                "images/gt3s1.jpg"
            ]

        }

    },

     mustang: {

        name: "Mustang Inspired",

        price: 220,

        description:
        "Premium Mustang Inspired die-cast model.",

        colors: {

            Black: ["images/musb.jpg",
                "images/musbs.jpg",
            ],

            Red:
            ["images/musred.jpg",
               "images/musredsid.jpg",
                
            ]

        }

    },

    stand2: {

        name: "Double Car Stand",

        price: 60,

        description:
        "Premium Double Car Stand die-cast model.",

        colors: {

            Black: ["images/stand2b.jpg",
                "images/stand2a.jpg",
            ],

            

        }

    },

    mercedes: {

        name: "1:48 Mercedes-AMG GT3",

        price: 220,

        description:
        "Premium Mercedes-AMG GT3 die-cast model.",

        colors: {

            Blue: ["images/mercblue.jpg",
                "images/merceblue2.jpg",
            ],

             Silver: ["images/mercsilv.jpg",
                "images/mercesilv1.jpg",
            ],

             Yellow: ["images/mercyell1.jpg",
                "images/merceyellofront.jpg"
            ],

            

        }

    },



};


const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

let currentProduct = null;

const productPage =
    document.getElementById("product-name");

if (productPage && productId && products[productId]) {

    function changeColor() {

    if (!currentProduct) return;

    const color =
        document.getElementById("color").value;

    const images =
        currentProduct.colors[color];

    document.getElementById("main-image").src =
        images[0];

    const container =
        document.getElementById("thumbnail-container");

    container.innerHTML = "";

    images.forEach((img)=>{

        const thumb =
            document.createElement("img");

        thumb.src = img;

        thumb.onclick = ()=>{

            document.getElementById("main-image").src = img;

        };

        container.appendChild(thumb);

    });

}

function updateTotal() {

    if (!currentProduct) return;

    const qty = parseInt(document.getElementById("qty").value);

    const total = (currentProduct.price * qty) + 50;

    document.getElementById("total-price").innerHTML =
        `<strong>Total: ₹${total}</strong>`;
}

function buyProduct() {

    if (!currentProduct) return;

    const color = document.getElementById("color").value;
    const qty = parseInt(document.getElementById("qty").value);

    const total = (currentProduct.price * qty) + 50;

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






    currentProduct = products[productId];

    document.title = currentProduct.name + " | Mini Vandi";

    document.getElementById("product-name").textContent =
        currentProduct.name;

    document.getElementById("product-price").textContent =
        "₹" + currentProduct.price;

    document.getElementById("product-description").textContent =
        currentProduct.description;

    const colorSelect = document.getElementById("color");

    colorSelect.innerHTML = "";

    for (const color in currentProduct.colors) {

        const option = document.createElement("option");

        option.value = color;

        option.textContent = color;

        colorSelect.appendChild(option);

    }

    changeColor();
    updateTotal();

}

function scrollProducts() {

    const products = document.getElementById("products");

    if (products) {
        products.scrollIntoView({   
            behavior: "smooth"
        });
    }

}

window.addEventListener("scroll", () => {

    document.querySelectorAll(".reveal").forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            element.classList.add("active");
        }

    });

});




