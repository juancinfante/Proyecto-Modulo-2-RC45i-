let currentUseR = JSON.parse(localStorage.getItem('currentUser'))
let admin_link = document.querySelectorAll('#admin-link')
let login_link = document.querySelectorAll('#login-link')
let registrar_link = document.querySelectorAll('#registrar-link')
let logout_link = document.querySelectorAll('#logout-link')

if (currentUseR == null) {
  admin_link.forEach(e =>{
    e.classList.add('d-none')
  })
  logout_link.forEach(e =>{
    e.classList.add('d-none')
  })
  localStorage.setItem('users', JSON.stringify(users))
} else {
  if (currentUseR.estado !== "admin") {
    admin_link.forEach(e =>{
      e.classList.add('d-none')
    })
    login_link.forEach(e =>{
      e.classList.add('d-none')
    })
    registrar_link.forEach(e =>{
      e.classList.add('d-none')
    })
  } else {
    login_link.forEach(e =>{
      e.classList.add('d-none')
    })
    registrar_link.forEach(e =>{
      e.classList.add('d-none')
    })
  }
}