const detail = document.getElementById("detalle-zapatillas");
const urlParams = new URLSearchParams(window.location.search);
const paramId= urlParams.get("id");
const objeto = JSON.parse(localStorage.getItem("zapatillas"));

let elementoFiltrado = objeto.filter(producto => producto.id == paramId);
elementoFiltrado = elementoFiltrado[0];
detail.innerHTML = detalleProducto();

function detalleProducto() {
    return `
    <div class="row d-flex justify-content-center align-items-center" style="margin: auto;">
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <img src="${elementoFiltrado.imgUrl}" alt="">
                </div>
                <div class="col-12 col-md-6 ps-5">
                    <h1>${elementoFiltrado.name}</h1>
                    <h3 style="font-weight: bold;">$${elementoFiltrado.price}</h3>
                    <p>${elementoFiltrado.detail}</p>
                    <p class="product-detail-p"><i class="fa-solid fa-truck me-2"></i>ENVIO GRATIS A PARTIR $29.999</p>
                    <p class="product-detail-p"><i class="fa-solid fa-lock me-2"></i>¡PAGA HASTA 3 CUOTAS SIN INTERES!</p>
                    <p class="product-detail-p"><i class="fa-solid fa-truck-ramp-box me-2"></i>DEVOLUCIONES GRATIS ¿NO ES TU TALLE? PODÉS DEVOLVERLO EN UN PLAZO DE 60 DÍAS</p>
                    <a style="text-decoration: none; color:black; "href="../pages/error404.html">
                    <button class="uk-button uk-button-default mt-4">AÑADIR AL CARRITO</button></a>
                </div>
            </div>`
};