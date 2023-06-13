let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let usersLS = JSON.parse(localStorage.getItem('users'))
let tablaUsuarios = document.getElementById('tablaUsuarios')
let tablaAprobar = document.getElementById('tablaAprobar')
let producstTable = document.getElementById('productsTable')
let zapas = JSON.parse(localStorage.getItem('zapatillas'))

if (currentUser !== null) {
    if (currentUser.estado !== "admin") {
        window.location.href = "../index.html"
    } else {
        renderizarTablaUsuarios()
        renderizarTablaAprobar()
        renderProductTable()
    }
} else {
    window.location.href = "../index.html"
}

function renderizarTablaUsuarios() {
    let array = usersLS.filter((obj) => obj.username !== currentUser.username && obj.estado !== "pendiente")
    tablaUsuarios.innerHTML = "";
    array.forEach((element, index) => {
        tablaUsuarios.innerHTML +=
            `<tr>
                    <td data-title="Username">${element.username}</td>
                    <td data-title="Email">${element.email}</td>
                    <td data-title="Estado">${element.estado}</td>
                    <td data-title="Editar">
                    <p>
                    <span class="editUsuarios" 
                    uk-toggle="target: #modal-example3"
                    data-userselected="${element.username}"
                    onclick="userSelected(event)">
                    📝
                    </span>
                    <span class="editUsuarios"
                    uk-toggle="target: #modal-example4"
                    data-userselected="${element.username}"
                    onclick="userSelected(event)">❌</span>
                    </p>
                </td>
            </tr>`
    });
}
function renderizarTablaAprobar() {
    let array = usersLS.filter((obj) => obj.estado == "pendiente")
    tablaAprobar.innerHTML = "";
    array.forEach((element, index) => {
        tablaAprobar.innerHTML +=
            `<tr>
                  <td data-title="Username">${element.username}</td>
                  <td data-title="Email">${element.email}</td>
                  <td data-title="Estado">${element.estado}</td>
                  <td data-title="Editar">
                  <p>
                  <span class="editUsuarios"
                  uk-toggle="target: #modal-example4"
                  data-userselected="${element.username}"
                  onclick="userSelected(event)">❌</span>                        
                  <span class="editUsuarios" 
                  uk-toggle="target: #modal-example5"
                  data-userselected="${element.username}"
                  onclick="userSelected(event)">✅</span>
                  </p>
              </td>
          </tr>`
    });
}
function renderProductTable() {
    const products = JSON.parse(localStorage.getItem('zapatillas'));
    producstTable.innerHTML = "";
    products.forEach((element, index) => {
        let published = "NO";
        if (element.published) {
            published = "SI"
        }
        producstTable.innerHTML += `
        <tr">
            <td data-title="ID">${element.id}</td>
                <td data-title="Nombre">${element.name}</td>
                <td data-title="Categoria">${element.category}</td>
                <td data-title="Descripcion">${element.detail}</td>
                <td data-title="Publicado">${published}</td>
                <td data-title="Precio">$${element.price}</td>
                <td data-title="Editar">
                    <span uk-toggle="target: #modal-example8" data-productid="${element.id}" onclick="editProduct(event)">📝</span>
                    <span uk-toggle="target: #modal-example9" data-productid="${element.id}" onclick="productSelected(event)">❌</span>
                </td>
                <td data-title="Destacar"><i class="fa-solid fa-star" id="star" data-productid="${element.id}" onclick="destacar(event)"></i></td>
        </tr>
    </div>`;
    })

}

// Descatar producto 
function destacar(evt) {
    let star = document.querySelectorAll('#star')

    star.forEach(element => {
        element.classList.remove('yellow')
    })

    evt.target.classList.add('yellow')
    console.log(star[0])
    let productStar = zapas.find((obj) => obj.id == evt.target.dataset.productid)

    localStorage.setItem('productStar', JSON.stringify(productStar))

}
function rememberAddedClass(){
    const productStar = JSON.parse(localStorage.getItem('productStar'));
    if(productStar !== null){
        let star = document.querySelectorAll('#star') 
        star.forEach(element =>{
            if(element.dataset.productid == productStar.id){
                element.classList.add('yellow')
            }
        })
    }
}
rememberAddedClass();

// EDIT USERS
function editarUsuario() {
    let username = JSON.parse(localStorage.getItem('userSelected'))
    let index = usersLS.findIndex((obj) => obj.username == username)

    let select = document.getElementById('select-edit')
    let indexSelected = select.options.selectedIndex;
    console.log(select.options[indexSelected].value)

    usersLS[index].estado = select.options[indexSelected].value;
    localStorage.setItem('users', JSON.stringify(usersLS));

    renderizarTablaUsuarios()
}
function aceptarSolicitud() {
    let username = JSON.parse(localStorage.getItem('userSelected'))
    let index = usersLS.findIndex((obj) => obj.username == username)
    usersLS[index].estado = "aprobado";
    localStorage.setItem('users', JSON.stringify(usersLS))
    renderizarTablaAprobar()
    renderizarTablaUsuarios()
}
function eliminarUsuario() {
    let username = JSON.parse(localStorage.getItem('userSelected'))
    let index = usersLS.findIndex((obj) => obj.username == username)
    usersLS.splice(index, 1)
    localStorage.setItem('users', JSON.stringify(usersLS))
    renderizarTablaAprobar()
    renderizarTablaUsuarios()
}
function userSelected(evt) {
    localStorage.setItem('userSelected', JSON.stringify(evt.target.dataset.userselected))
}

//////////// PRODUCTS FUNCTIONS ////////////

// ADD PRODUCT 
const addProductForm = document.getElementById('addProduct-form');
addProductForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let boolean = true;
    if (evt.target.elements.productPublished.value !== "true") {
        boolean = false;
    }
    zapas.push({
        id: Date.now(),
        name: evt.target.elements.productName.value,
        description: evt.target.elements.productDescription.value,
        category: evt.target.elements.productCategory.value,
        price: evt.target.elements.productPrice.value,
        imgUrl: evt.target.elements.productImage.value,
        published: boolean
    })
    localStorage.setItem('zapatillas', JSON.stringify(zapas))
    renderProductTable()
    swal("Listo!", "Producto agregado!", "success");
    const img = document.getElementById('urlAddReplace')
    img.setAttribute("src", "")
    evt.target.elements.productName.value = "";
    evt.target.elements.productDescription.value = "";
    evt.target.elements.productPrice.value = "";
    evt.target.elements.productImage.value = "";
})

// EDIT PRODUCT
const editProductForm = document.getElementById('editProduct-form');
editProductForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let boolean = true;
    if (evt.target.elements.productPublishedEdit.value !== "true") {
        boolean = false;
    }
    let idProduct = JSON.parse(localStorage.getItem('productSelectedID'));
    let productIndex = zapas.findIndex((obj) => obj.id == idProduct)
    zapas[productIndex].name = evt.target.elements.productNameEdit.value;
    zapas[productIndex].description = evt.target.elements.productDescriptionEdit.value;
    zapas[productIndex].price = evt.target.elements.productPriceEdit.value;
    zapas[productIndex].published = boolean;
    zapas[productIndex].category = evt.target.elements.productCategoryEdit.value;
    zapas[productIndex].imgUrl = evt.target.elements.productImageEdit.value;
    localStorage.setItem('zapatillas', JSON.stringify(zapas))
    renderProductTable()
    swal("Listo!", "Producto editado y guardado!", "success");

})

// Completa el formulario para editar un producto con los datos de ese producto seleccionado.
function editProduct(evt) {

    localStorage.setItem('productSelectedID', JSON.stringify(evt.target.dataset.productid))
    let product = zapas.find((obj) => obj.id == evt.target.dataset.productid)
    const urlReplace = document.getElementById('urlReplace');
    urlReplace.setAttribute("src", product.imgUrl)
    let productName = document.getElementsByName('productNameEdit');
    let productDescription = document.getElementsByName('productDescriptionEdit');
    let productPrice = document.getElementsByName('productPriceEdit');
    let productImage = document.getElementsByName('productImageEdit');
    let productCategory = document.getElementsByName('productCategoryEdit');
    let productPublished = document.getElementsByName('productPublishedEdit');

    productName[0].value = product.name;
    productDescription[0].value = product.description;
    productPrice[0].value = product.price;
    productImage[0].value = product.imgUrl;
    productCategory[0].value = product.category;
    productPublished[0].value = product.published;

}

function productSelected(evt) {
    localStorage.setItem('productSelectedID', JSON.stringify(evt.target.dataset.productid))
}

function deleteProduct() {
    let productID = JSON.parse(localStorage.getItem('productSelectedID'))
    let productIndex = zapas.findIndex((obj) => obj.id == productID)
    zapas.splice(productIndex, 1);
    localStorage.setItem('zapatillas', JSON.stringify(zapas))
    renderProductTable()
}

function updateAddProductImage() {
    const urlNewImage = document.getElementById('urlAddNewProduct');
    const urlReplace = document.getElementById('urlAddReplace');
    urlReplace.setAttribute("src", urlNewImage.value)
}

function updateImage() {
    const urlNewImage = document.getElementById('urlNewImg');
    const urlReplace = document.getElementById('urlReplace');
    urlReplace.setAttribute("src", urlNewImage.value)
}