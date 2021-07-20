angular
  .module("usuariosEduIt", [])
  .constant("urlApi", "http://edu-it-usuario.glitch.me")
  .service("usuariosSrv", function(urlApi, $http) {
    return {
      esUsuario: function() {
        return !!localStorage.getItem("token");
      },
      ingresar: function(usuario, clave) {
        var request = {
          usuario: usuario,
          calve: clave
        };
        return $http
          .post(urlApi + "/login", request)
          .then(function(data) {
            return data.data;
          })
          .catch(function(err) {
            return err.data;
          });
      }
    };
  });
