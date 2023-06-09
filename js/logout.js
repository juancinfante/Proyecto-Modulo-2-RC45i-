function logout(){
    swal({
        text: "Estas seguro que deseas salir?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Vuelve pronto!", {
            icon: "success",
          });
          localStorage.removeItem('currentUser')
          setTimeout(function() {
            // Code to be executed after the delay
            window.location.href = "../index.html"
          }, 1500);
        }
      });
}