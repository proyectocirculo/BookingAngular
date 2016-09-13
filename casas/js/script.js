(function(){
    "use strict";

    angular.module('Proyecto',[
        ])


    .factory('Cabanas',function($http,$q){
        var cabanas = null;

        var getCabanas = function(){
            var deferred = $q.defer();

            if(cabanas == null){
                $http.get('http://colinadelmanzano.com.ar/pruebas/todos/json')
                .then(function(result){
                    deferred.resolve(result);
                },
                function(result){
                    deferred.reject(result);
                });    
            }else{
                deferred.resolve(cabanas);
            }
            return deferred.promise;
        };


        return {
            traerCabanas: getCabanas,
        };

    })         

    .controller('MainController',function($scope,Cabanas){

        $scope.primerValor = "panel-collapse collapse";
        $scope.mostrar = "nomostrar";

        Cabanas.traerCabanas().then(function(result){

            //$scope.cabanas = result.data;
            $scope.cabanas = [{"casa":"El Buho","id":2,"nombre":"El Buho","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales"
                              ,"precio":120,"camas":"1","personas":"8","tamanio":"100m2","img":"2El Buho",

                            "reservas":[{"fecha":"2016-09-13"},
                                        {"fecha":"2016-09-14"},
                                        {"fecha":"2016-09-15"},
                                        {"fecha":"2016-09-16"},
                                        {"fecha":"2016-09-17"},
                                        {"fecha":"2016-09-18"},
                                        {"fecha":"2016-09-19"}],

                                    "servicios":[{"srv":"iconos-_pileta.jpg"},{"srv":"iconos-_auto.jpg"}]},
                              
                              {"casa":"El Gallo","id":104,"nombre":"El Gallo","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales","precio":400,"camas":"4","personas":"7","tamanio":"","img":"104El Gallo",
                                    
                            "reservas":[{"fecha":"2016-09-17"},
                                        {"fecha":"2016-09-18"},
                                        {"fecha":"2016-09-20"},
                                        {"fecha":"2016-09-22"},
                                        {"fecha":"2016-09-23"},
                                        {"fecha":"2016-09-24"},
                                        {"fecha":"2016-09-29"}],

                                    "servicios":[{"srv":"iconos-_pileta.jpg"}]},
                              
                              {"casa":"La Paloma","id":98,"nombre":"La Paloma","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales","precio":500,"camas":"4","personas":"8","tamanio":"","img":"98La Paloma",
                                    "reservas":[{"fecha":"2016-09-14"},
                                                {"fecha":"2016-09-17"},
                                                {"fecha":"2016-09-19"},
                                                {"fecha":"2016-09-20"},
                                                {"fecha":"2016-09-21"},
                                                {"fecha":"2016-09-22"},
                                                {"fecha":"2016-09-23"}],
                                    "servicios":[{"srv":"iconos-_market.jpg"}]},
                              
                              {"casa":"El Gato","id":99,"nombre":"El Gato","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales","precio":375,"camas":"4","personas":"8","tamanio":"100m2","img":"99El gato",
                                    "reservas":[{"fecha":"2016-09-01"},
                                                {"fecha":"2016-09-02"},
                                                {"fecha":"2016-09-03"},
                                                {"fecha":"2016-09-04"},
                                                {"fecha":"2016-09-12"},
                                                {"fecha":"2016-09-14"},
                                                {"fecha":"2016-09-23"}],
                                    "servicios":[{"srv":"iconos-_wifi.jpg"},{"srv":"iconos-_auto.jpg"},{"srv":"iconos-_grill.jpg"}]},
                              
                              {"casa":"Casa Real","id":106,"nombre":"Casa Real","descripcion":"200m2, 2 cama matrimoniales, 2 camas individuales","precio":760,"camas":"4","personas":"8","tamanio":"200m2","img":"106Casa Real",
                                    
                                    "reservas":[{"fecha":"2016-09-14"},
                                                {"fecha":"2016-09-16"},
                                                {"fecha":"2016-09-17"},
                                                {"fecha":"2016-09-20"},
                                                {"fecha":"2016-09-21"},
                                                {"fecha":"2016-09-22"},
                                                {"fecha":"2016-09-29"}],

                                    "servicios":[{"srv":"iconos-_deck.jpg"},{"srv":"iconos-_wifi.jpg"},{"srv":"iconos-_grill.jpg"}]}]
            $scope.fechaIni = new Date();
            $scope.fechaSal = new Date(); 
            var milisegundos=parseInt(15*24*60*60*1000);
            var tiempo = $scope.fechaSal.getTime();
            $scope.fechaSal.setTime(tiempo+milisegundos);

            $scope.calcularReservas($scope.fechaIni, $scope.fechaSal,$scope.cabanas);

        },function(){
            $scope.cabanas = 'No hay cabañas..';
        });

        //verifica las fechas en la cual estan reservadas y muestran las que estan libres en ese rango
        $scope.getFechasReservadas = function(fechaInicial, fechaFinal, reservas) {

            var reservaciones = reservas;
            var diferencia = fechaFinal - fechaInicial;
            var diasDiferencia = Math.round(diferencia/(1000 * 60 * 60 * 24));
            var fechasVerificar =[];

            for (var i = 0; i < (diasDiferencia+1) ; i++) {
                
                var milisegundos=parseInt(i*24*60*60*1000);
                //var diaSumado = new Date();
                var diaSumado = fechaInicial;
                var tiempo = diaSumado.getTime();
                diaSumado.setTime(tiempo+milisegundos);

                var diaInicial = ("0"+diaSumado.getDate()).slice(-2);
                var mesInicial = ("0"+(diaSumado.getMonth()+1)).slice(-2);
                var anioInicial = diaSumado.getFullYear();
                var fechaPosta = anioInicial+"-"+mesInicial+"-"+diaInicial;

                var a = {
                            fecha: fechaPosta,
                            condicion: "Libre"
                        };
                

                for (var j = 0; j < reservaciones.length ; j++) {

                    
                    var fechaResguardo = reservaciones[j].fecha;

                    if(fechaPosta == fechaResguardo){
                        var a = {
                            fecha: fechaPosta,
                            condicion: "Reservado"};
                        break;                       
                    }

                }


                fechasVerificar.push(a);

            }

            


            $scope.fechas = fechasVerificar;



        };
        //------------------------------------

        $scope.calcularReservas = function(fechaInicial, fechaFinal, cabanas) {

            
            var cantidadLoop = cabanas.length;
            $scope.cabanasDisponibles = 0;
            $scope.mostrar = "nomostrar";
            
            if((fechaInicial == null)&&(fechaFinal == null)){
                alert("Tenes que ingresar las dos fechas culiado");
            }else{

                //obtengo la fecha inicial
                var diaInicial = ("0"+fechaInicial.getDate()).slice(-2);
                var mesInicial = ("0"+(fechaInicial.getMonth()+1)).slice(-2);
                var anioInicial = fechaInicial.getFullYear();
                var fechaPostaInicial = anioInicial+"-"+mesInicial+"-"+diaInicial;
                //obtengo la fehca final
                var diaFinal = ("0"+fechaFinal.getDate()).slice(-2);
                var mesFinal = ("0"+(fechaFinal.getMonth()+1)).slice(-2);
                var anioFinal = fechaFinal.getFullYear();
                var fechaPostaFinal = anioFinal+"-"+mesFinal+"-"+diaFinal;

                var cabanaConReserva = [];
                var cabanaSinReserva = [];
                    
                for (var i=0 ; i<cantidadLoop ; i++) {
                    var cab = cabanas[i].reservas;
                    var bandera = false;

                    for (var j = 0; j < cab.length; j++) {
                        var fechaResguardo = cab[j].fecha;
                        $scope.cabanaElegida = "";
                        if((fechaResguardo >= fechaPostaInicial)&(fechaResguardo <= fechaPostaFinal)){
                            //-----------------------
                            bandera = true;
                            //-----------------------
                        }

                    }

                    if (bandera == true){
                        //quiere decir que existe por lo menos una fecha que este entre los reservados
                        var a = {
                                    casa: cabanas[i].casa,
                                    id: cabanas[i].id,
                                    nombre: cabanas[i].nombre,
                                    descripcion: cabanas[i].descripcion,
                                    precio: cabanas[i].precio,
                                    camas: cabanas[i].camas,
                                    personas: cabanas[i].personas,
                                    tamanio: cabanas[i].tamanio,
                                    img: cabanas[i].img,
                                    reservas: cabanas[i].reservas,
                                    servicios: cabanas[i].servicios,
                                    cabanaConreserva: "conReserva",
                                    }
                        cabanaConReserva.push(a);
                    }else{

                        var a = {
                                    casa: cabanas[i].casa,
                                    id: cabanas[i].id,
                                    nombre: cabanas[i].nombre,
                                    descripcion: cabanas[i].descripcion,
                                    precio: cabanas[i].precio,
                                    camas: cabanas[i].camas,
                                    personas: cabanas[i].personas,
                                    tamanio: cabanas[i].tamanio,
                                    img: cabanas[i].img,
                                    reservas: cabanas[i].reservas,
                                    servicios: cabanas[i].servicios,
                                    cabanaConreserva: "sinReserva",
                                    }
                        cabanaSinReserva.push(a);
                        $scope.cabanasDisponibles += 1;
                    }
                    
                }

                
                if($scope.cabanasDisponibles > 0){
                    //alert("Existen "+$scope.cabanasDisponibles);
                    $scope.mostrar = "mostrar";
                    cabanaSinReserva.sort(function(a, b){
                        return a.precio - b.precio;
                    });

                    $scope.cabanas = cabanaSinReserva;
                    $scope.cabanas = $scope.cabanas.concat(cabanaConReserva);

                }else{
                    $scope.cabanas = cabanaConReserva;
                    
                }
                

            }

        };



    })



    


})();