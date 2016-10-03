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

        $scope.fechaIni = new Date();
        $scope.fechaSal = new Date();
        var milisegundos=parseInt(15*24*60*60*1000);
        var tiempo = $scope.fechaSal.getTime();
        $scope.fechaSal.setTime(tiempo+milisegundos);

        var diaMinInicial = ("0"+$scope.fechaIni.getDate()).slice(-2);
        var mesMinInicial = ("0"+($scope.fechaIni.getMonth()+1)).slice(-2);
        var anioMinInicial = $scope.fechaIni.getFullYear();
        $scope.fechaMin = anioMinInicial+"-"+mesMinInicial+"-"+diaMinInicial;

        //--------------------------------------
        var milisegundos=parseInt(4*24*60*60*1000);
        var diaSumado = new Date($scope.fechaMin);
        var tiempo = diaSumado.getTime();
        diaSumado.setTime(tiempo+milisegundos);

        var diaMinFinal = ("0"+diaSumado.getDate()).slice(-2);
        var mesMinFinal = ("0"+(diaSumado.getMonth()+1)).slice(-2);
        var anioMinFinal = diaSumado.getFullYear();
        $scope.fechaMinMax = anioMinFinal+"-"+mesMinFinal+"-"+diaMinFinal;
        //--------------------------------------

        Cabanas.traerCabanas().then(function(result){

            //$scope.cabanas = result.data;
            $scope.cabanas = [{"casa":"El Buho","id":2,"nombre":"El Buho","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales"
                              ,"precio":120,"camas":"1","personas":"8","tamanio":"100m2","img":"2El Buho",

                            "reservas":[{"fecha":"2016-10-02"},{"fecha":"2016-10-04"},{"fecha":"2016-10-08"},
                                        {"fecha":"2016-10-01"},{"fecha":"2016-10-02"},{"fecha":"2016-10-04"},
                                        {"fecha":"2016-10-05"},{"fecha":"2016-10-08"},{"fecha":"2016-10-09"},
                                        {"fecha":"2016-10-12"},{"fecha":"2016-10-13"},{"fecha":"2016-10-14"},
                                        {"fecha":"2016-10-16"},{"fecha":"2016-10-17"},{"fecha":"2016-10-19"},
                                        {"fecha":"2016-10-20"},{"fecha":"2016-10-22"}],
                            //array temporada    
                            "temporada":[{"fecha":"2016-10-05","precioTemporada":180,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-06","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-07","precioTemporada":30,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-10","precioTemporada":100,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-15","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-20","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-21","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-24","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-25","precioTemporada":160,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-26","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-27","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-28","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-29","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-30","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-31","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-11-01","precioTemporada":90,"tipoTemporada":"Alta"}],            

                                    "servicios":[{"srv":"iconos-_pileta.jpg"},{"srv":"iconos-_auto.jpg"}]},
                              
                            {"casa":"El Gallo","id":104,"nombre":"El Gallo","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales","precio":400,"camas":"4","personas":"7","tamanio":"","img":"104El Gallo",
                                    
                            "reservas":[{"fecha":"2016-09-27"},{"fecha":"2016-09-28"},{"fecha":"2016-09-30"},
                                        {"fecha":"2016-10-01"},{"fecha":"2016-10-02"},{"fecha":"2016-10-04"},
                                        {"fecha":"2016-10-05"},{"fecha":"2016-10-07"},{"fecha":"2016-10-09"},
                                        {"fecha":"2016-10-12"},{"fecha":"2016-10-13"},{"fecha":"2016-10-14"},
                                        {"fecha":"2016-10-16"},{"fecha":"2016-10-17"},{"fecha":"2016-10-19"},
                                        {"fecha":"2016-10-20"},{"fecha":"2016-10-22"},{"fecha":"2016-10-23"}],
                            //array temporada    
                            "temporada":[{"fecha":"2016-09-29","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-03","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-04","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-08","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-10","precioTemporada":100,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-11","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-15","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-18","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-21","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-24","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-25","precioTemporada":160,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-26","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-27","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-28","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-29","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-30","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-31","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-11-01","precioTemporada":90,"tipoTemporada":"Alta"}],   

                                    "servicios":[{"srv":"iconos-_pileta.jpg"}]},
                              
                            {"casa":"La Paloma","id":98,"nombre":"La Paloma","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales","precio":500,"camas":"4","personas":"8","tamanio":"","img":"98La Paloma",
                                    
                            "reservas":[{"fecha":"2016-09-27"},{"fecha":"2016-09-28"},{"fecha":"2016-09-30"},
                                        {"fecha":"2016-10-01"},{"fecha":"2016-10-02"},{"fecha":"2016-10-04"},
                                        {"fecha":"2016-10-05"},{"fecha":"2016-10-07"},{"fecha":"2016-10-09"},
                                        {"fecha":"2016-10-12"},{"fecha":"2016-10-13"},{"fecha":"2016-10-14"},
                                        {"fecha":"2016-10-16"},{"fecha":"2016-10-17"},{"fecha":"2016-10-19"},
                                        {"fecha":"2016-10-20"},{"fecha":"2016-10-22"},{"fecha":"2016-10-23"}],
                            //array temporada    
                            "temporada":[{"fecha":"2016-09-29","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-03","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-04","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-05","precioTemporada":120,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-06","precioTemporada":100,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-07","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-08","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-09","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-10","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-24","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-25","precioTemporada":160,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-26","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-27","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-28","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-29","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-30","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-31","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-11-01","precioTemporada":90,"tipoTemporada":"Alta"}],   

                            "servicios":[{"srv":"iconos-_market.jpg"}]},
                              
                            {"casa":"El Gato","id":99,"nombre":"El Gato","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales","precio":375,"camas":"4","personas":"8","tamanio":"100m2","img":"99El gato",
                                
                            "reservas":[{"fecha":"2016-09-27"},{"fecha":"2016-09-28"},{"fecha":"2016-09-30"},
                                        {"fecha":"2016-10-01"},{"fecha":"2016-10-02"},{"fecha":"2016-10-04"},
                                        {"fecha":"2016-10-05"},{"fecha":"2016-10-07"},{"fecha":"2016-10-09"},
                                        {"fecha":"2016-10-16"},{"fecha":"2016-10-17"},{"fecha":"2016-10-19"},
                                        {"fecha":"2016-10-20"},{"fecha":"2016-10-22"},{"fecha":"2016-10-23"}],
                            //array temporada    
                            "temporada":[{"fecha":"2016-09-29","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-03","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-06","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-08","precioTemporada":45,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-10","precioTemporada":100,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-11","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-15","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-18","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-21","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-24","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-25","precioTemporada":160,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-26","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-27","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-28","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-29","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-30","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-31","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-11-01","precioTemporada":90,"tipoTemporada":"Alta"}],                                      "servicios":[{"srv":"iconos-_wifi.jpg"},{"srv":"iconos-_auto.jpg"},{"srv":"iconos-_grill.jpg"}]},
                              
                              {"casa":"Casa Real","id":106,"nombre":"Casa Real","descripcion":"200m2, 2 cama matrimoniales, 2 camas individuales","precio":760,"camas":"4","personas":"8","tamanio":"200m2","img":"106Casa Real",
                                    
                            "reservas":[{"fecha":"2016-10-07"},{"fecha":"2016-10-09"},
                                        {"fecha":"2016-10-12"},{"fecha":"2016-10-13"},{"fecha":"2016-10-14"},
                                        {"fecha":"2016-10-16"},{"fecha":"2016-10-17"},{"fecha":"2016-10-19"},
                                        {"fecha":"2016-10-20"},{"fecha":"2016-10-22"},{"fecha":"2016-10-23"}],
                            //array temporada    
                            "temporada":[{"fecha":"2016-10-10","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-11","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-18","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-21","precioTemporada":27,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-20","precioTemporada":100,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-24","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-26","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-27","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-29","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-30","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-31","precioTemporada":160,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-11-01","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-11-02","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-11-03","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-11-05","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-11-07","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-11-08","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-11-09","precioTemporada":90,"tipoTemporada":"Alta"}],   

                                    "servicios":[{"srv":"iconos-_deck.jpg"},{"srv":"iconos-_wifi.jpg"},{"srv":"iconos-_grill.jpg"}]}]
            //$scope.fechaIni = new Date();
            //$scope.fechaSal = new Date(); 
            //var milisegundos=parseInt(15*24*60*60*1000);
            //var tiempo = $scope.fechaSal.getTime();
            //$scope.fechaSal.setTime(tiempo+milisegundos);

            $scope.calcularReservas($scope.fechaIni, $scope.fechaSal,$scope.cabanas);

        },function(){
            $scope.cabanas = 'No hay cabañas..';
        });

        //verifica las fechas en la cual estan reservadas y muestran las que estan libres en ese rango
        $scope.getFechasReservadas = function(fechaInicial, fechaFinal, reservas,temporada) {

            var reservaciones = temporada;
            var diferencia = fechaFinal - fechaInicial;
            var diasDiferencia = Math.round(diferencia/(1000 * 60 * 60 * 24));
            var fechasVerificar =[];
            var cabanasReservadas = [];
            var cabanasSinReservas = [];

            for (var i = 0; i < (diasDiferencia+1) ; i++) {

                for (var t = 0; t < reservas.length; t++) {
                    cabanasReservadas.push(reservas[t].fecha);
                }

                for (var k = 0; k < temporada.length; k++) {
                    cabanasSinReservas.push(temporada[k].fecha);
                }

                //-----------------------------------
                var diaInicialBucle = ("0"+fechaInicial.getDate()).slice(-2);
                var mesInicialBucle = ("0"+(fechaInicial.getMonth()+1)).slice(-2);
                var anioInicialBucle = fechaInicial.getFullYear();
                var fechaPostaBucle = anioInicialBucle+"/"+mesInicialBucle+"/"+diaInicialBucle;

                //------------------------------------
                
                var milisegundos=parseInt(i*24*60*60*1000);
                var diaSumado = new Date(fechaPostaBucle);
                var tiempo = diaSumado.getTime();
                diaSumado.setTime(tiempo+milisegundos);

                var diaInicial = ("0"+diaSumado.getDate()).slice(-2);
                var mesInicial = ("0"+(diaSumado.getMonth()+1)).slice(-2);
                var anioInicial = diaSumado.getFullYear();
                var fechaPosta = anioInicial+"-"+mesInicial+"-"+diaInicial;

                for (var j = 0; j < reservaciones.length ; j++) {

                    var a = {
                            fecha: fechaPosta,
                            precioTemporada: " -",
                            condicion: "Sin Lista",
                            tipoCondicion: true, 
                            tipoTemporada: " -"
                        };

                    var fechaResguardo = reservaciones[j].fecha;
                    //este punto debe darme todos los dias de
                    var n = cabanasReservadas.indexOf(fechaPosta);
                    var x = cabanasSinReservas.indexOf(fechaPosta);

                    if(n >= 0){
                        var a = {
                            fecha: fechaPosta,
                            precioTemporada: " -",
                            condicion: "Reservado",
                            tipoCondicion: true, 
                            tipoTemporada: " -"
                        };
                        break; 
                    }else if(x >= 0){
                        var a = {
                            fecha: fechaPosta,
                            precioTemporada: reservaciones[x].precioTemporada,
                            condicion: "Libre",
                            tipoCondicion: false,
                            tipoTemporada: reservaciones[x].tipoTemporada
                            };
                        break; 
                    }

                }


                fechasVerificar.push(a);

            }


            $scope.fechas = fechasVerificar


        };
        //------------------------------------

        $scope.calcularReservas = function(fechaInicial, fechaFinal, cabanas) {

            var cantidadLoop = cabanas.length;
            $scope.cabanasDisponibles = 0;
            $scope.mostrar = "nomostrar";
            $scope.alertaUno = "";
            $scope.myValue = true;
            var diferencia = fechaFinal - fechaInicial;
            var diasDiferencia = Math.round(diferencia/(1000 * 60 * 60 * 24));
            var diasConsultar = [];

            if((fechaInicial == null)&&(fechaFinal == null)||(fechaInicial == undefined)){
                //alert("Tenes que ingresar las dos fechas culiado o meter una fecha correcta");
                $scope.alertaUno = "Debes ingresar una fecha mayor o igual a hoy";
                $scope.myValue = false;
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

                    var cab = cabanas[i].temporada;
                    var bandera = false;

                    for (var j = 0; j < cab.length; j++) {
                        var fechaResguardo = cab[j].fecha;
                        if((fechaResguardo >= fechaPostaInicial)&(fechaResguardo <= fechaPostaFinal)){
                            //-----------------------
                            bandera = true;
                            //-----------------------
                        }

                    }
                    var ReserTest = [];

                    if (bandera == true){
                        //quiere decir que existe por lo menos una fecha que este entre los reservados

                        //-------------------------
                        ReserTest = cabanas[i].temporada;

                        ReserTest.sort(function(a, b){
                            return a.precioTemporada - b.precioTemporada;
                        });

                        //------------------------
                        var a = {
                                    casa: cabanas[i].casa,
                                    id: cabanas[i].id,
                                    nombre: cabanas[i].nombre,
                                    descripcion: cabanas[i].descripcion,
                                    precio: ReserTest[0].precioTemporada,
                                    camas: cabanas[i].camas,
                                    personas: cabanas[i].personas,
                                    tamanio: cabanas[i].tamanio,
                                    img: cabanas[i].img,
                                    reservas: cabanas[i].reservas,
                                    temporada: cabanas[i].temporada,
                                    servicios: cabanas[i].servicios,
                                    cabanaConreserva: "conReserva",
                                    }
                        cabanaConReserva.push(a);
                    }else{

                        var ReserTest = cabanas[i].temporada;

                        ReserTest.sort(function(a, b){
                            return a.precioTemporada - b.precioTemporada;
                        });

                        var a = {
                                    casa: cabanas[i].casa,
                                    id: cabanas[i].id,
                                    nombre: cabanas[i].nombre,
                                    descripcion: cabanas[i].descripcion,
                                    precio: ReserTest[0].precioTemporada,
                                    camas: cabanas[i].camas,
                                    personas: cabanas[i].personas,
                                    tamanio: cabanas[i].tamanio,
                                    img: cabanas[i].img,
                                    reservas: cabanas[i].reservas,
                                    temporada: cabanas[i].temporada,
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