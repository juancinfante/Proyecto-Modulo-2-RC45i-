let usuariosLocalStorage = JSON.parse(localStorage.getItem('users'))

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let index = usuariosLocalStorage.findIndex(ele => ele.username == evt.target.elements.username.value)
    
    if (index !== -1) {
        
        if (usuariosLocalStorage[index].password == evt.target.elements.password.value) {
            switch (usuariosLocalStorage[index].estado) {
                case "suspendido":
                    swal("Error", "Su cuenta esta suspendida!", "error");
                    evt.target.elements.password.value = "";
                    evt.target.elements.username.value = "";
                  break;
                case "pendiente":
                    swal("Error", "Su cuenta se encuentra en estado pendiente!", "warning");
                    evt.target.elements.password.value = "";
                    evt.target.elements.username.value = "";
                  break;
                  case "admin":
                      swal("Listo!", "Bienvenido "+evt.target.elements.username.value+", logueado con exito!", "success");
                      setTimeout(function() {
                        window.location.href = "../index.html"
                      }, 2000);
                      localStorage.setItem('currentUser',JSON.stringify(usuariosLocalStorage[index]))
                  case "aprobado":
                    swal("Listo!", "Bienvenido "+evt.target.elements.username.value+" Logueado con exito!", "success");
                      localStorage.setItem('currentUser',JSON.stringify(usuariosLocalStorage[index]))
                      setTimeout(function() {
                            window.location.href = "../index.html"
                      }, 1500);                     
                  break;
              }
        }else{
            swal("Error", "Contraseña incorrecta!", "error");
            evt.target.elements.password.value = "";
            evt.target.elements.username.value = "";
        }
    }else{
        swal("Error", "Usuario no registrado!", "error");
        evt.target.elements.password.value = "";
        evt.target.elements.username.value = "";
    }
    
})



