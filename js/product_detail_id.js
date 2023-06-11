const detail = document.getElementById("detalle-zapatillas");
const urlParams = new URLSearchParams(window.location.search);
const paramId= urlParams.get("id");
const objeto = JSON.parse(localStorage.getItem("zapatillas"));

let elementoFiltrado = objeto.filter(producto => producto.id === paramId);
elementoFiltrado = elementoFiltrado[0];
detail.innerHTML = detalleProducto();

function detalleProducto() {
    return `<div class = "contenedor-detalle-producto"> 
    <div class="card mb-3 mx-auto" style="max-width: 1540px;">
       <div class="row g-0">
         <div class="col-md-4">
           <img src="${elementoFiltrado.imgUrl}" class="img-fluid rounded-start" alt="..." id="imagen-producto-detalle">
         </div>
         <div class="col-md-8">
           <div class="card-body ">
             <h2 class="card-title">${elementoFiltrado.name}</h2>
             <p class="card-text precio">$${elementoFiltrado.price}</p>
             <p class="card-text"> 3 cuotas <strong>sin interés</strong> de $${elementoFiltrado.price / 3}</p>
             <br><h3>Descripcion del producto</h3><br>
             <p> ${elementoFiltrado.detail} </p>
             <div class="d-grid gap-2 col-6 mx-auto">
               <br>
               <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#Carrito" type="button">
               <a href="../pages/error404.html">AGREGAR AL CARRITO</a></button>
             </div>
           </div>
         </div>
       </div>
     </div>
     </div>`
};