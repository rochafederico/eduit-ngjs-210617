angular.module("eduitServices").service("territoriosService", [
  "ciudades",
  function(ciudades) {
    var paises = [];
    var provinciasPorPais = [];
    var ciudadesPorProv = [];

    for (let i = 0; i < ciudades.length; i++) {
      const ciudad = ciudades[i];
      const paisDesc = ciudad.pais_descripcion;
      const provDesc = ciudad.pcia_descripcion;
      // buscamos paises
      if (paises.indexOf(paisDesc)) {
        paises.push(paisDesc);
      }
      // buscamos provincias
      if (!provinciasPorPais[paisDesc]) {
        provinciasPorPais[paisDesc] = [];
      }
      if (provinciasPorPais[paisDesc].indexOf(provDesc) === -1) {
        provinciasPorPais[paisDesc].push(provDesc);
      }
      // buscamos ciudades
      if (!ciudadesPorProv[provDesc]) {
        ciudadesPorProv[provDesc] = [];
      }
      if (ciudadesPorProv[provDesc].indexOf(ciudad) === -1) {
        ciudadesPorProv[provDesc].push(ciudad);
      }
    }
    return {
      obtenerPaises: function() {
        return paises;
      },
      obtenerProvincias: function(pais) {
        return provinciasPorPais[pais];
      },
      obtenerCiudades: function(provincia) {
        return ciudadesPorProv[provincia];
      },
    };
  },
]);
