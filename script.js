Swal.fire({
    title: 'Bienvenido!',
    text: 'Fundacion Adopta Ya!',
    icon: 'info',
    timer: '2000'}
);

//funcion formulario
  function enviarFormulario() {
    var nombre = document.querySelector('input[type="text"]').value;
    var correo = document.querySelector('input[type="email"]').value;
    var telefono = document.querySelector('input[type="number"]').value;
  
    if (nombre === '' || correo === '' || telefono === ''){
        Swal.fire({
            title: 'No se puede enviar, complete los campos!',
            icon: 'error',
            timer: '2000'}
        );
    }
    else{
        swal.fire({
            title: 'Formulario enviado',
            icon: 'success',
            timer: '2000'
        });
    }}
  