angular
  .module("laboratorio", ["usuariosEduIt"])
  .run(function(usuariosSrv, $location) {
    if (usuariosSrv.esUsuario()) {
      location.href = "/Laboratorio/pages/emepleados.html";
    } else {
      location.href = "/Laboratorio/pages/login.html";
    }
  });
