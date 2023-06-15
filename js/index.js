let zapas = JSON.parse(localStorage.getItem('zapatillas'))

let users = [
  {
    id: 1,
    username: "admin",
    password: "admin",
    email: "juaninfantejj@gmail.com",
    estado: "admin"
  },
  {
    id: 2,
    username: "juanc",
    password: "123456",
    email: "mario@gmail.com",
    estado: "aprobado"
  },
  {
    id: 3,
    username: "agus777",
    password: "agus123",
    email: "agus@gmail.com",
    estado: "suspendido"
  },
  {
    id: 4,
    username: "alejo12",
    password: "123asd",
    email: "alejo12@gmail.com",
    estado: "pendiente"
  },
  {
    id: 5,
    username: "josias123",
    password: "cabj0007",
    email: "josias12@gmail.com",
    estado: "pendiente"
  },
  {
    id: 6,
    username: "roberto23d",
    password: "bootcamp",
    email: "roberto13@gmail.com",
    estado: "pendiente"
  }
]

let zapatillas = [
  {
    id: Date.now() + 1,
    name: "FLEX EXPERIENCE RUN 11 NIKE",
    description: "CALZADO ZAPATILLAS NIKE RUNNING FLEX PARA HOMBRE DE RUNNING",
    detail: "Las zapatillas Flex Experience Run 11 de Nike son la elección perfecta para aquellos que buscan un calzado cómodo y versátilpara correr o hacer ejercicio. Con una parte superior de malla transpirable, se ajusta perfectamente al pie y proporciona una mayor ventilación para combatir la sudoración.",
    price: 34999,
    imgUrl: "https://www.digitalsport.com.ar/files/products/634dc2b94d3f1-554191-500x500.jpg",
    published: true,
    category: "Nike"
  },
  {
    id: Date.now() + 2,
    name: "REVOLUTION 6 NIKE",
    description: "CALZADO ZAPATILLAS NIKE RUNNING REVOLUTION PARA HOMBRE DE RUNNING",
    detail:"Las zapatillas Revolution 6 de Nike destacan por su diseño moderno y elegante, además de ofrecer una excelente comodidad y calidad para realizar distintas actividades. La suela gruesa y acolchada protege al pie de los impactos y proporciona una mayor amortiguación.",
    price: 33999,
    imgUrl: "https://www.digitalsport.com.ar/files/products/634dc2982cf38-562554-500x500.jpg",
    published: true,
    category: "Nike"
  },
  {
    id: 1686685868577,
    name: "RESPONSE SUPER 3.0 ADIDAS",
    description: "CALZADO ZAPATILLAS ADIDAS RUNNING RESPONSE PARA HOMBRE DE RUNNING",
    detail:"Las zapatillas Response Super 3.0 de Adidas son un calzado ideal para corredores que buscan un alto rendimiento y confort en sus entrenamientos. Diseñadas con una suela de goma resistente y antideslizante, estas zapatillas garantizan una excelente tracción en cualquier superficie.",
    price: 47899,
    imgUrl: "https://www.digitalsport.com.ar/files/products/640a48817319c-590496-500x500.jpg",
    published: true,
    category: "Adidas"
  },
  {
    id: Date.now() + 4,
    name: "QUESTAR ADIDAS",
    description: "CALZADO ZAPATILLAS ADIDAS CORE SPORT PARA MUJER DE RUNNING",
    detail:"Las zapatillas Questar de Adidas combinan una estética moderna y atractiva con funcionalidad y comodidad en el uso diario. La suela de goma de alta densidad brinda tracción y durabilidad, mientras que la tecnología OrthoLite en la plantilla proporciona una sensación de comodidad y sujeción suave.",
    price: 39999,
    imgUrl: "https://www.digitalsport.com.ar/files/products/634dc37526284-574301-500x500.jpg",
    published: true,
    category: "Adidas"
  },
  {
    id: Date.now() + 5,
    name: "MAGNUS FILA",
    description: "CALZADO ZAPATILLAS FILA CALZADO RUNNING CABALLERO PARA HOMBRE DE RUNNING",
    detail:"Las zapatillas Magnus son unas zapatillas deportivas que ofrecen la comodidad y el soporte necesarios para cualquier actividad física. La suela exterior de caucho proporciona un agarre excelente y la entresuela de EVA brinda una amortiguación constante para una mayor comodidad.",
    price: 19999,
    imgUrl: "https://www.digitalsport.com.ar/files/products/646f3ec93e826-610929-500x500.jpg",
    published: true,
    category: "Fila"
  },
  {
    id: Date.now() + 6,
    name: "RESEARCH FILA",
    description: "CALZADO ZAPATILLAS FILA CALZADO RUNNING DAMA PARA HOMBRE DE TRAINING Y FITNESS",
    detail:"Las zapatillas Research Fila son resistentes y duraderas que ofrecen un gran soporte y protección durante cualquier actividad física. La suela de goma resistente ofrece una tracción superior, mientras que la entre-suela suave y confortable proporciona una sensación de amortiguación y una excelente recuperación de la energía.",
    price: 19299,
    imgUrl: "https://www.digitalsport.com.ar/files/products/646f3ed0ce495-610950-500x500.jpg",
    published: true,
    category: "Fila"
  },
  {
    id: Date.now() + 7,
    name: "ELECTRIFY NITRO 2 PUMA",
    description: "CALZADO ZAPATILLAS PUMA CALZADO RUNNING CABALLERO PARA HOMBRE DE RUNNING",
    detail:"Las zapatillas Electrify Nitro ofrecen una comodidad y soporte excepcionales, un agarre superior, una característica de amortiguación y protección excepcional, y una ventilación adecuada para cualquier actividad física. Son sin duda una excelente elección para cualquier persona que busque una zapatilla deportiva duradera.",
    price: 32199,
    imgUrl: "https://www.digitalsport.com.ar/files/products/640652cec42e5-571260-500x500.jpg",
    published: true,
    category: "Puma"
  },
  {
    id: Date.now() + 8,
    name: "RETALIATE 2 ADP PUMA",
    description: "CALZADO ZAPATILLAS FILA CALZADO RUNNING DAMA PARA HOMBRE DE TRAINING Y FITNESS",
    detail:"Las zapatillas Retaliate son deportivas resistentes y duraderos que ofrecen un gran soporte y protección durante cualquier actividad física. La suela de goma resistente ofrece una tracción superior, mientras que la entre-suela suave y confortable proporciona una sensación de amortiguación y una excelente recuperación de la energía. ",
    price: 19299,
    imgUrl: "https://www.digitalsport.com.ar/files/products/63b8277f48392-571813-500x500.jpg",
    published: true,
    category: "Puma"
  }
]


// CARGAR PORTADA
const imgRow = document.getElementById('img-destacada');
const productStar = JSON.parse(localStorage.getItem('productStar'));
if(productStar !== null){
  imgRow.innerHTML = 
        `<div class="col-12 col-md-6 d-flex flex-column p-5">
            <h1>${productStar.name}</h1>
            <p>${productStar.description}</p>
            <h1>$${productStar.price}</h1>
            <div class="col-12">
            <a href="../pages/product_detail.html?id=${productStar.id}"
            style="text-decoration: none; color:black;">
            <button class="uk-button uk-button-default">VER MAS</button>
            </a>           
            </div>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center">
            <img src="${productStar.imgUrl}" alt="">
        </div>`
}


// MUESTRA LOS PRODUCTOS EN LA PAGINA PRINCIPAL
localStorage.setItem('categorySelected', JSON.stringify('All'))
if (zapas == null) {
  localStorage.setItem('zapatillas', JSON.stringify(zapatillas))

} else {
  const table = document.getElementById('zapasTable');
  const zapaz = JSON.parse(localStorage.getItem('zapatillas'))
  table.innerHTML = "";
  zapaz.forEach(element => {
    
    if (element.published) {
      table.innerHTML +=
        `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <a href="../pages/product_detail.html?id=${element.id}" class="card-shoe">
          <div class="uk-card uk-card-default uk-card-hover uk-card-body m-0">
          <img src="${element.imgUrl}"
          onerror="this.onerror=null;this.src='https://th.bing.com/th/id/R.02c67f0a61c1bc8f87ae870f2eebeed6?rik=9on3UWFQ7rZjgg&riu=http%3a%2f%2fwww.labaid.co.jp%2fshop%2fupload%2fsave_image%2f07121131_578456671f103.jpg&ehk=NFeBu6PkE17Jg9dmRK8qROMwN5Ahz2el8hSV6%2fiIkLg%3d&risl=&pid=ImgRaw&r=0';">
     
              <h5>
                  <span>${element.category}</span>
                  <br>${element.name}
              </h5>
              <p>$${element.price}<br>
                  <span style="font-size: 12px;">3 cuotas de $${Math.floor(element.price/3)}</span>
              </p>
          </div>
          </a>
        </div>`
    }
  });
}

function filter(evt) {

  localStorage.setItem('categorySelected', JSON.stringify(evt.target.dataset.cat))

  const table = document.getElementById('zapasTable');
  const zapas = JSON.parse(localStorage.getItem('zapatillas'))
  if (evt.target.dataset.cat == "All") {
    table.innerHTML = "";
    zapas.forEach(element => {
      if (element.published) {
        table.innerHTML +=
          `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <a href="../pages/product_detail.html?id=${element.id}" class="card-shoe">
            <div class="uk-card uk-card-default uk-card-hover uk-card-body ">
                <img src="${element.imgUrl}"
                    alt="">
                <h5>
                    <span>${element.category}</span>
                    <br>${element.name}
                </h5>
                <p>$${element.price}<br>
                    <span style="font-size: 12px;">3 cuotas de $${Math.floor(element.price/3)}</span>
                </p>
            </div>
        </a>
      </div>`
      }
    });
  } else {
    const filtro = zapas.filter((obj) => obj.category == evt.target.dataset.cat)
    table.innerHTML = "";
    filtro.forEach(element => {
      if (element.published) {
        table.innerHTML +=
          `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <a href="../pages/product_detail.html?id=${element.id}" class="card-shoe">
              <div class="uk-card uk-card-default uk-card-hover uk-card-body ">
                  <img src="${element.imgUrl}"
                      alt="img">
                  <h5>
                      <span>${element.category}</span>
                      <br>${element.name}
                  </h5>
                  <p>$${element.price}<br>
                      <span style="font-size: 12px;">3 cuotas de $${Math.floor(element.price/3)}</span>
                  </p>
              </div>
          </a>
        </div>`
      }
    });
  }
}

function orderMay() {
  const table = document.getElementById('zapasTable');
  const zapas = JSON.parse(localStorage.getItem('zapatillas'));
  const categorySelected = JSON.parse(localStorage.getItem('categorySelected'));
  const filtro = zapas.filter((obj) => obj.category == categorySelected)

  if (categorySelected == 'All') {
    const order = zapas.sort((a, b) => b.price - a.price);
    table.innerHTML = "";
    order.forEach(element => {
      if (element.published) {
        table.innerHTML +=
          `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <a href="../pages/product_detail.html?id=${element.id}" class="card-shoe">
            <div class="uk-card uk-card-default uk-card-hover uk-card-body ">
                <img src="${element.imgUrl}"
                    alt="img">
                <h5>
                    <span>${element.category}</span>
                    <br>${element.name}
                </h5>
                <p>$${element.price}<br>
                    <span style="font-size: 12px;">3 cuotas de $${Math.floor(element.price/3)}</span>
                </p>
            </div>
        </a>
      </div>`
      }
    });
  } else {
    table.innerHTML = "";
    const order = filtro.sort((a, b) => b.price - a.price);
    order.forEach(element => {
      if (element.published) {
        table.innerHTML +=
          `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <a href="../pages/product_detail.html?id=${element.id}" class="card-shoe">
            <div class="uk-card uk-card-default uk-card-hover uk-card-body ">
                <img src="${element.imgUrl}"
                    alt="img">
                <h5>
                    <span>${element.category}</span>
                    <br>${element.name}
                </h5>
                <p>$${element.price}<br>
                    <span style="font-size: 12px;">3 cuotas de $${Math.floor(element.price/3)}</span>
                </p>
            </div>
        </a>
      </div>`
      }
    });
  }

}

function orderMen() {
  const table = document.getElementById('zapasTable');
  const zapas = JSON.parse(localStorage.getItem('zapatillas'));
  const categorySelected = JSON.parse(localStorage.getItem('categorySelected'));
  const filtro = zapas.filter((obj) => obj.category == categorySelected)

  if (categorySelected == 'All') {
    const order = zapas.sort((a, b) => a.price - b.price);
    table.innerHTML = "";
    order.forEach(element => {
      if (element.published) {
        table.innerHTML +=
          `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <a href="../pages/product_detail.html?id=${element.id}" class="card-shoe">
            <div class="uk-card uk-card-default uk-card-hover uk-card-body ">
                <img src="${element.imgUrl}"
                    alt="img">
                <h5>
                    <span>${element.category}</span>
                    <br>${element.name}
                </h5>
                <p>$${element.price}<br>
                    <span style="font-size: 12px;">3 cuotas de $${Math.floor(element.price/3)}</span>
                </p>
            </div>
        </a>
      </div>`
      }
    });
  } else {
    table.innerHTML = "";
    const order = filtro.sort((a, b) => a.price - b.price);
    order.forEach(element => {
      if (element.published) {
        table.innerHTML +=
          `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <a href="../pages/product_detail.html?id=${element.id}" class="card-shoe">
            <div class="uk-card uk-card-default uk-card-hover uk-card-body ">
                <img src="${element.imgUrl}"
                    alt="img">
                <h5>
                    <span>${element.category}</span>
                    <br>${element.name}
                </h5>
                <p>$${element.price}<br>
                    <span style="font-size: 12px;">3 cuotas de $${Math.floor(element.price/3)}</span>
                </p>
            </div>
        </a>
      </div>`
      }
    });
  }

}
