let usersLocalS = JSON.parse(localStorage.getItem('users'))

const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (evt) =>{
    evt.preventDefault()
    let index = usersLocalS.findIndex(ele => ele.username == evt.target.elements.username.value)
    if(index == -1){    
        if(findEmail(evt.target.elements.email.value) == -1){
            usersLocalS.push(
                {
                    id: 123,
                    username: evt.target.elements.username.value,
                    password: evt.target.elements.password.value,
                    email: evt.target.elements.email.value,
                    estado: "pendiente"
                }
                )
                localStorage.setItem('users',JSON.stringify(usersLocalS))
                swal("Listo!", "Registrado con exito! Debes esperar que un admin te acepte.", "success");
                evt.target.elements.username.value = "";
                evt.target.elements.password.value = "";
                evt.target.elements.email.value = "";
        }else{
            swal("Error", "Email ya existe!", "error");
        }
    }else{
        swal("Error", "Nombre de usuario ya existe!", "error");
    }
})

function findEmail(email){
    let index = usersLocalS.findIndex((obj) => obj.email == email)
    return index
}