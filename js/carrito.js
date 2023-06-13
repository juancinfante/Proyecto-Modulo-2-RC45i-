// CARGAR CARRITO
let carritoLS = JSON.parse(localStorage.getItem("carrito"));
let carritoTable = document.getElementById("carrito");
let totalPrice = carritoLS.reduce((accumulator, product) => accumulator + product.price, 0);

function renderizarCarrito(){
    if(carritoLS !== null){
        carritoTable.innerHTML =""
      carritoLS.forEach(element => {
        carritoTable.innerHTML += 
        `<div class="product-carrito d-flex justify-content-center align-items-center">
            <img src="${element.img}" alt=""
                style="width: 80px;">
            <p class="ps-3">${element.name}</p>
            <p>$${element.price}</p>
            <span class="ms-2" onclick="eliminarProd(${element.id})">❌</span>
        </div>`
      });
      carritoTable.innerHTML += 
      `<p>TOTAL: $${totalPrice}</p>
      <button onclick="comprar()">COMPRAR</button>`
    }else if(carritoLS.lenght == 0){
        carritoTable.innerHTML += 
        `<div class="product-carrito d-flex justify-content-center align-items-center">
            <p>Carrito Vacio</p>
        </div>`
    }
}

function eliminarProd(id){
    console.log(id)
    let index = carritoLS.findIndex((obj) => obj.id == id)
    carritoLS.splice(index,1)
    localStorage.setItem("carrito",JSON.stringify(carritoLS))
    renderizarCarrito()
}

renderizarCarrito()