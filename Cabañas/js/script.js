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

                            "reservas":[{"fecha":"2016-09-19","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-20","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-21","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-21","precioTemporada":30,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-22","precioTemporada":100,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-23","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-24","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-25","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-26","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-27","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-28","precioTemporada":160,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-29","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-30","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-01","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-02","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-03","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-04","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-05","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-06","precioTemporada":90,"tipoTemporada":"Alta"}],

                                    "servicios":[{"srv":"iconos-_pileta.jpg"},{"srv":"iconos-_auto.jpg"}]},
                              
                              {"casa":"El Gallo","id":104,"nombre":"El Gallo","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales","precio":400,"camas":"4","personas":"7","tamanio":"","img":"104El Gallo",
                                    
                            "reservas":[{"fecha":"2016-09-19","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-20","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-21","precioTemporada":20,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-21","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-22","precioTemporada":100,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-23","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-24","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-25","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-26","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-27","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-28","precioTemporada":160,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-29","precioTemporada":140,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-30","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-01","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-02","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-03","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-04","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-05","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-06","precioTemporada":90,"tipoTemporada":"Alta"}],

                                    "servicios":[{"srv":"iconos-_pileta.jpg"}]},
                              
                              {"casa":"La Paloma","id":98,"nombre":"La Paloma","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales","precio":500,"camas":"4","personas":"8","tamanio":"","img":"98La Paloma",
                                    
                            "reservas":[{"fecha":"2016-09-19","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-20","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-21","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-21","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-22","precioTemporada":100,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-23","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-24","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-25","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-26","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-27","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-28","precioTemporada":160,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-29","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-30","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-01","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-02","precioTemporada":80,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-03","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-04","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-05","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-06","precioTemporada":35,"tipoTemporada":"Alta"}],

                                    "servicios":[{"srv":"iconos-_market.jpg"}]},
                              
                            {"casa":"El Gato","id":99,"nombre":"El Gato","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales","precio":375,"camas":"4","personas":"8","tamanio":"100m2","img":"99El gato",
                                
                            "reservas":[{"fecha":"2016-09-19","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-20","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-21","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-21","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-22","precioTemporada":100,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-09-23","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-24","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-25","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-26","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-27","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-28","precioTemporada":45,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-29","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-09-30","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-01","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-02","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-03","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-04","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-05","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-06","precioTemporada":90,"tipoTemporada":"Alta"}],                                   "servicios":[{"srv":"iconos-_wifi.jpg"},{"srv":"iconos-_auto.jpg"},{"srv":"iconos-_grill.jpg"}]},
                              
                              {"casa":"Casa Real","id":106,"nombre":"Casa Real","descripcion":"200m2, 2 cama matrimoniales, 2 camas individuales","precio":760,"camas":"4","personas":"8","tamanio":"200m2","img":"106Casa Real",
                                    
                            "reservas":[{"fecha":"2016-10-04","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-05","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-06","precioTemporada":90,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-07","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-08","precioTemporada":100,"tipoTemporada":"Alta"},
                                        {"fecha":"2016-10-09","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-10","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-11","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-12","precioTemporada":90,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-13","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-14","precioTemporada":160,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-15","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-16","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-17","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-18","precioTemporada":100,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-20","precioTemporada":150,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-21","precioTemporada":200,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-22","precioTemporada":50,"tipoTemporada":"Baja"},
                                        {"fecha":"2016-10-23","precioTemporada":90,"tipoTemporada":"Alta"}],

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
        $scope.getFechasReservadas = function(fechaInicial, fechaFinal, reservas) {

            var reservaciones = reservas;
            var diferencia = fechaFinal - fechaInicial;
            var diasDiferencia = Math.round(diferencia/(1000 * 60 * 60 * 24));
            var fechasVerificar =[];

            for (var i = 0; i < (diasDiferencia+1) ; i++) {

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
                    //este punto debe darme todos los dias de
                    var a = {
                            fecha: fechaPosta,
                            precioTemporada: "0",
                            condicion: "Libre",
                            tipoTemporada: reservaciones[j].tipoTemporada
                        };
                    
                    var fechaResguardo = reservaciones[j].fecha;

                    if(fechaPosta == fechaResguardo){
                        var a = {
                            fecha: fechaPosta,
                            precioTemporada: reservaciones[j].precioTemporada,
                            condicion: "Reservado",
                            tipoTemporada: reservaciones[j].tipoTemporada
                            };
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
            $scope.alertaUno = "";
            $scope.myValue = true;

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
                    var ReserTest = [];

                    if (bandera == true){
                        //quiere decir que existe por lo menos una fecha que este entre los reservados

                        //-------------------------
                        ReserTest = cabanas[i].reservas;

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
                                    servicios: cabanas[i].servicios,
                                    cabanaConreserva: "conReserva",
                                    }
                        cabanaConReserva.push(a);
                    }else{

                        var ReserTest = cabanas[i].reservas;

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