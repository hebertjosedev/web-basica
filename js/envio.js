let formulario = document.querySelector("#formulario");
let exito = document.querySelector("#exito");
let error = document.querySelector("#error");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  let datos = new FormData(formulario);

  console.log(datos);
  console.log(datos.get("nombre"));
  console.log(datos.get("email"));
  console.log(datos.get("consulta"));

  fetch("enviar.php", {
    method: "POST",
    body: datos,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data === 'error') {
        exito.style.display="none";
        error.style.display="block";
        error.innerHTML = `
            <div class="alert alert-danger" role="alert">
               Llena todos los campos!
           </div>
            `
            console.log(error);
      }else{
        error.style.display="none";
        exito.style.display="block";
          exito.innerHTML = `
        <div class="alert alert-success" role="alert">
           Envio con exito!
       </div>
        `
        limpiarFormulario();
      }

  function limpiarFormulario() {
    formulario.reset();
  }
    });
});