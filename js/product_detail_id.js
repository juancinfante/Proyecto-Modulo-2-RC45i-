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
                <div class="col-12 col-md-6 ps-2">
                    <h1>${elementoFiltrado.name}</h1>
                    <h3 style="font-weight: bold;">$${elementoFiltrado.price}</h3>
                    <p>${elementoFiltrado.detail}</p>
                    <p class="product-detail-p"><i class="fa-solid fa-truck me-2"></i>ENVIO GRATIS A PARTIR $29.999</p>
                    <p class="product-detail-p"><i class="fa-solid fa-lock me-2"></i>¡PAGA HASTA 3 CUOTAS SIN INTERES!</p>
                    <p class="product-detail-p"><i class="fa-solid fa-truck-ramp-box me-2"></i>DEVOLUCIONES GRATIS ¿NO ES TU TALLE? PODÉS DEVOLVERLO EN UN PLAZO DE 60 DÍAS</p>
                    <a style="text-decoration: none; color:black;">
                    <button class="uk-button uk-button-default mt-4" onclick="addCarrito()">AÑADIR AL CARRITO</button></a>
                </div>
            </div>`
};

function addCarrito(){
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    if(carrito !== null){
        carrito.push({
            name: elementoFiltrado.name,
            img: elementoFiltrado.imgUrl,
            price: elementoFiltrado.price,
            id: elementoFiltrado.id
        })
        swal("🛒✅", "Producto agregado!", "success");
        setTimeout(function() {
            location.reload()
          }, 1500);
        localStorage.setItem("carrito",JSON.stringify(carrito))
    }else{
        let carrito = []
        carrito.push({
            name: elementoFiltrado.name,
            img: elementoFiltrado.imgUrl,
            price: elementoFiltrado.price,
            id: elementoFiltrado.id
        })
        renderizarCarrito()
        swal("🛒✅", "Producto agregado!", "success");
        setTimeout(function() {
            location.reload()
          }, 1500);
        localStorage.setItem("carrito",JSON.stringify(carrito))
    }
    
}

