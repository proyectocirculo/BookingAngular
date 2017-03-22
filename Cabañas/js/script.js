(function(){
    "use strict";

    angular.module('Proyecto',[
        ])


    .factory('Cabanas',function($http,$q){
        var cabanas = null;

        var getCabanas = function(){
            var deferred = $q.defer();

            if(cabanas == null){
                $http.get('https://colinadelmanzano.com.ar/pruebas/todos/jsoncabaniasdos')
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

    .controller('MainController',function($scope,Cabanas,$http,$location){

        $scope.mostrar = "nomostrar";

        //---------                        
            var url = $location.absUrl();
            var totalUrl = url.length;
            var varNinos = url.substring((totalUrl-8),(totalUrl-2));
            if(varNinos == "ninios"){
                var nroNinos = url.substring((totalUrl-1),totalUrl);
                var nroMayor = url.substring((totalUrl-9),(totalUrl-10));
                //fecha inicial
                var nroDiaIni = parseInt(url.substring((totalUrl-45),(totalUrl-47)));
                var nroMesIni = parseInt(url.substring((totalUrl-38),(totalUrl-44)));
                var nroAnioIni = parseInt(url.substring((totalUrl-35),(totalUrl-41)));
                var totalFechaInicial = nroAnioIni+"-"+nroMesIni+"-"+nroDiaIni;
                //---------
                //fecha final
                var nroDia = parseInt(url.substring((totalUrl-27),(totalUrl-29)));
                var nroMes = parseInt(url.substring((totalUrl-24),(totalUrl-26)));
                var nroAnio = parseInt(url.substring((totalUrl-19),(totalUrl-23)));
                var totalFechaFinal = nroAnio+"-"+nroMes+"-"+nroDia;
                //-------
                
                //seteo los valores por GET
                $scope.fechaIni = new Date(totalFechaInicial);
                var mil = parseInt(1*24*60*60*1000);
                var tiempoIni = $scope.fechaIni.getTime();
                $scope.fechaIni.setTime(tiempoIni+mil);

                $scope.fechaSal = new Date(totalFechaFinal);
                var tiempoSal = $scope.fechaSal.getTime();
                $scope.fechaSal.setTime(tiempoSal+mil);

                $scope.nroAdulto = parseInt(nroMayor);
                $scope.nroMenor = parseInt(nroNinos);
            }else{
                $scope.fechaIni = new Date();
                $scope.fechaSal = new Date();
                $scope.nroAdulto = 2;
                $scope.nroMenor = 0;
                $scope.desayuno = false;

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
            }
            //---------


        Cabanas.traerCabanas().then(function(result){

            
            //$scope.cabanas = result.data;

            $scope.cabanas = [{"casa":"ElBuho","id":2,"nombre":"El Buho","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales"
                              ,"precio":120,"camas":"1","personas":"6","tamanio":"100m2","img":"2El Buho",

                            "reservas":[{"fecha":"2017-02-06"},{"fecha":"2017-02-07"},
                                        {"fecha":"2017-02-08"},{"fecha":"2016-12-09"},
                                        {"fecha":"2017-02-13"}],
                            //array temporada    
                            "temporada": [
            
            {
                "fecha": "2017-03-22",
                "precioTemporada": "1000",
                "precioDesayuno": "1111",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1000"},{"3pax": "2000"},
                               {"4pax": "3000"},{"5pax": "4000"}],
                "preciosDesa": [{"2pax": "1111"},{"3pax": "2222"},
                                {"4pax": "3333"},{"5pax": "4444"}]                

            },
            {
                "fecha": "2017-03-23",
                "precioTemporada": "900",
                "precioDesayuno": "4444",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "900"},{"3pax": "4000"},
                               {"4pax": "5000"},{"5pax": "6000"}],

                "preciosDesa": [{"2pax": "4444"},{"3pax": "5555"},
                                {"4pax": "6666"},{"5pax": "7777"}]
            },
            
            {
                "fecha": "2017-03-24",
                "precioTemporada": "1736",
                "precioDesayuno": "2000",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1736"},{"3pax": "2096"}],
                "preciosDesa": [{"2pax": "2000"},{"3pax": "3000"}]
            },

            {
                "fecha": "2017-03-25",
                "precioTemporada": "1736",
                "precioDesayuno": "2000",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1736"},{"3pax": "2096"}],
                "preciosDesa": [{"2pax": "2000"},{"3pax": "3000"}]
            }

        ],

                                    "servicios":[{"srv":"iconos-_pileta.jpg"},{"srv":"iconos-_auto.jpg"}]},
                              
                            {"casa":"ElGallo","id":104,"nombre":"El Gallote","descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales","precio":400,"camas":"4",
                            "personas":"4","tamanio":"","img":"104El Gallo",
                                    
                            "reservas":[{"fecha":"2016-10-26"},{"fecha":"2016-10-27"},{"fecha":"2016-11-01"},
                                        {"fecha":"2016-10-06"},{"fecha":"2016-11-07"}],
                            //array temporada    
                            "temporada":[
                                        {
                                            "fecha": "2017-03-11",
                                            "precioTemporada": "1000",
                                            "precioDesayuno": "1111",
                                            "tipoTemporada": "Media",
                                            "preciosPax": [{"2pax": "1000"},{"3pax": "2000"},
                                                           {"4pax": "3000"},{"5pax": "4000"}],
                                            "preciosDesa": [{"2pax": "1111"},{"3pax": "2222"},
                                                            {"4pax": "3333"},{"5pax": "4444"}]                

                                        },
                                        {
                                            "fecha": "2017-03-12",
                                            "precioTemporada": "1000",
                                            "precioDesayuno": "1111",
                                            "tipoTemporada": "Media",
                                            "preciosPax": [{"2pax": "1000"},{"3pax": "2000"},
                                                           {"4pax": "3000"},{"5pax": "4000"}],
                                            "preciosDesa": [{"2pax": "1111"},{"3pax": "2222"},
                                                            {"4pax": "3333"},{"5pax": "4444"}]                

                                        },
                                        {
                                            "fecha": "2017-03-16",
                                            "precioTemporada": "1000",
                                            "precioDesayuno": "1111",
                                            "tipoTemporada": "Media",
                                            "preciosPax": [{"2pax": "1000"},{"3pax": "2000"},
                                                           {"4pax": "3000"},{"5pax": "4000"}],
                                            "preciosDesa": [{"2pax": "1111"},{"3pax": "2222"},
                                                            {"4pax": "3333"},{"5pax": "4444"}]                

                                        },
                                        {
                                            "fecha": "2017-03-19",
                                            "precioTemporada": "1000",
                                            "precioDesayuno": "1111",
                                            "tipoTemporada": "Media",
                                            "preciosPax": [{"2pax": "1000"},{"3pax": "2000"},
                                                           {"4pax": "3000"},{"5pax": "4000"}],
                                            "preciosDesa": [{"2pax": "1111"},{"3pax": "2222"},
                                                            {"4pax": "3333"},{"5pax": "4444"}]                

                                        }

                                        ],            

                                    "servicios":[{"srv":"iconos-_pileta.jpg"}]},
                              
                            {"casa":"LaPaloma","id":98,"nombre":"La Paloma",
                            "descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales",
                            "precio":500,"camas":"5","personas":"6","tamanio":"","img":"98La Paloma",
                                    
                            "reservas":[{"fecha":"2016-12-13"},{"fecha":"2016-12-15"},{"fecha":"2016-12-16"},
                                        {"fecha":"2016-12-17"},{"fecha":"2016-12-18"},{"fecha":"2016-12-19"},
                                        {"fecha":"2016-12-20"},{"fecha":"2016-12-21"},{"fecha":"2016-12-22"},
                                        {"fecha":"2016-12-23"},{"fecha":"2016-12-24"},{"fecha":"2016-12-25"},
                                        {"fecha":"2016-12-26"},{"fecha":"2016-12-27"},{"fecha":"2016-12-28"},
                                        {"fecha":"2016-12-29"}],
                            //array temporada    
                            "temporada": [
            
            {
                "fecha": "2017-03-07",
                "precioTemporada": "1000",
                "precioDesayuno": "1111",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1000"},{"3pax": "2000"},
                               {"4pax": "3000"},{"5pax": "4000"}],
                "preciosDesa": [{"2pax": "1111"},{"3pax": "2222"},
                                {"4pax": "3333"},{"5pax": "4444"}]                

            },
            {
                "fecha": "2017-03-08",
                "precioTemporada": "900",
                "precioDesayuno": "4444",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "900"},{"3pax": "4000"},
                               {"4pax": "5000"},{"5pax": "6000"}],

                "preciosDesa": [{"2pax": "4444"},{"3pax": "5555"},
                                {"4pax": "6666"},{"5pax": "7777"}]
            },
            
            {
                "fecha": "2017-03-09",
                "precioTemporada": "1736",
                "precioDesayuno": "2000",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1736"},{"3pax": "2096"}],
                "preciosDesa": [{"2pax": "2000"},{"3pax": "3000"}]
            },

            {
                "fecha": "2017-02-10",
                "precioTemporada": "1736",
                "precioDesayuno": "2000",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1736"},{"3pax": "2096"}],
                "preciosDesa": [{"2pax": "2000"},{"3pax": "3000"}]
            }

        ],
                            "servicios":[{"srv":"iconos-_market.jpg"}]},
                              
                            {"casa":"ElGato","id":99,"nombre":"El Gatito",
                            "descripcion":"100m2 1 Cama Matrimoniales, 3 Camas individuales",
                            "precio":375,"camas":"4","personas":"5","tamanio":"100m2","img":"99El gato",
                                
                            "reservas":[{"fecha":"2016-10-23"},{"fecha":"2016-10-24"},{"fecha":"2016-10-25"},
                                        {"fecha":"2016-10-29"},{"fecha":"2016-11-01"},{"fecha":"2016-11-04"}],
                            //array temporada    
                            "temporada": [
            
            {
                "fecha": "2017-03-07",
                "precioTemporada": "1000",
                "precioDesayuno": "1111",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1000"},{"3pax": "2000"},
                               {"4pax": "3000"},{"5pax": "4000"}],
                "preciosDesa": [{"2pax": "1111"},{"3pax": "2222"},
                                {"4pax": "3333"},{"5pax": "4444"}]                

            },
            {
                "fecha": "2017-03-08",
                "precioTemporada": "900",
                "precioDesayuno": "4444",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "900"},{"3pax": "4000"},
                               {"4pax": "5000"},{"5pax": "6000"}],

                "preciosDesa": [{"2pax": "4444"},{"3pax": "5555"},
                                {"4pax": "6666"},{"5pax": "7777"}]
            },
            
            {
                "fecha": "2017-03-09",
                "precioTemporada": "1736",
                "precioDesayuno": "2000",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1736"},{"3pax": "2096"}],
                "preciosDesa": [{"2pax": "2000"},{"3pax": "3000"}]
            },

            {
                "fecha": "2017-02-10",
                "precioTemporada": "1736",
                "precioDesayuno": "2000",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1736"},{"3pax": "2096"}],
                "preciosDesa": [{"2pax": "2000"},{"3pax": "3000"}]
            }

        ],           

                                        "servicios":[{"srv":"iconos-_wifi.jpg"},{"srv":"iconos-_auto.jpg"},{"srv":"iconos-_grill.jpg"}]},
                              
                              {"casa":"CasaReal","id":106,"nombre":"Casa Real",
                              "descripcion":"200m2, 2 cama matrimoniales, 2 camas individuales",
                              "precio":760,"camas":"4","personas":"6","tamanio":"200m2","img":"106Casa Real",
                                    
                            "reservas":[{"fecha":"2016-11-02"},{"fecha":"2016-11-03"},
                                        {"fecha":"2016-11-04"},{"fecha":"2016-11-05"}],
                            //array temporada    
                            "temporada": [
            
            {
                "fecha": "2017-03-07",
                "precioTemporada": "1000",
                "precioDesayuno": "1111",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1000"},{"3pax": "2000"},
                               {"4pax": "3000"},{"5pax": "4000"}],
                "preciosDesa": [{"2pax": "1111"},{"3pax": "2222"},
                                {"4pax": "3333"},{"5pax": "4444"}]                

            },
            {
                "fecha": "2017-03-08",
                "precioTemporada": "900",
                "precioDesayuno": "4444",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "900"},{"3pax": "4000"},
                               {"4pax": "5000"},{"5pax": "6000"}],

                "preciosDesa": [{"2pax": "4444"},{"3pax": "5555"},
                                {"4pax": "6666"},{"5pax": "7777"}]
            },
            
            {
                "fecha": "2017-03-09",
                "precioTemporada": "1736",
                "precioDesayuno": "2000",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1736"},{"3pax": "2096"}],
                "preciosDesa": [{"2pax": "2000"},{"3pax": "3000"}]
            },

            {
                "fecha": "2017-02-10",
                "precioTemporada": "1736",
                "precioDesayuno": "2000",
                "tipoTemporada": "Media",
                "preciosPax": [{"2pax": "1736"},{"3pax": "2096"}],
                "preciosDesa": [{"2pax": "2000"},{"3pax": "3000"}]
            }

        ],   

                                    "servicios":[{"srv":"iconos-_deck.jpg"},{"srv":"iconos-_wifi.jpg"},{"srv":"iconos-_grill.jpg"}]}]
            
            
            
            $scope.cartelTarifas = "Precione las fechas para ver los precios."
            //------
            $scope.CabanasFull = $scope.cabanas;
            
            $scope.calcularReservas($scope.fechaIni, $scope.fechaSal,$scope.cabanas,$scope.desayuno,$scope.nroAdulto,$scope.nroMenor);

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

            for (var i = 0; i < (diasDiferencia) ; i++) {

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

                var mesEscrito;

                switch (mesInicial) {
                    case "01":
                        mesEscrito = "Enero";
                        break;
                    case "02":
                        mesEscrito = "Febrero";
                        break;
                    case "03":
                        mesEscrito = "Marzo";
                        break;
                    case "04":
                        mesEscrito = "Abril";
                        break;
                    case "05":
                        mesEscrito = "Mayo";
                        break;
                    case "06":
                        mesEscrito = "Junio";
                        break;
                    case "07":
                        mesEscrito = "Julio";
                        break;
                    case "08":
                        mesEscrito = "Agosto";
                        break;
                    case "09":
                        mesEscrito = "Septiembre";
                        break;                                
                    case "10":
                        mesEscrito = "Octubre";
                        break;
                    case "11":
                        mesEscrito = "Noviembre";
                        break;
                    case "12":
                        mesEscrito = "Diciembre";
                        break;    
                }


                for (var j = 0; j < reservaciones.length ; j++) {

                    var a = {
                            dia: diaInicial,
                            mes: mesEscrito,
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
                            dia: diaInicial,
                            mes: mesEscrito,
                            fecha: fechaPosta,
                            precioTemporada: " -",
                            condicion: "Reservado",
                            tipoCondicion: true, 
                            tipoTemporada: " -"
                        };
                        break; 
                    }else if(x >= 0){

                        var a = {
                            dia: diaInicial,
                            mes: mesEscrito,
                            fecha: fechaPosta,
                            precioTemporada: reservaciones[x].precioTemporada,
                            precioDesayuno: reservaciones[x].precioDesayuno,
                            condicion: "Libre",
                            tipoCondicion: false,
                            tipoTemporada: reservaciones[x].tipoTemporada,
                            preciosPax: reservaciones[x].preciosPax,
                            preciosDesa : reservaciones[x].preciosDesa
                            };

                        break; 
                    }

                }


                fechasVerificar.push(a);

            }


            $scope.fechas = fechasVerificar


        };
        //------------------------------------

        //-------------
        $scope.getPreciosPax = function(nroAdulto,nroMenor,preciosPax,mes,dia,desayuno,preciosDesa) {

            $scope.tituloPerMas = "";
            $scope.cartelTarifas = "";
            $scope.verTarifas = "Tarifas para el dia ";
            var totalPersonas;
            if(nroMenor == null){
                totalPersonas = nroAdulto
            }else{
                totalPersonas = nroAdulto + nroMenor;
            }

            var arrayPrecios = preciosPax;

            if(desayuno){
                arrayPrecios = preciosDesa
            }

            var preciosFinal = [];
            $scope.myValor = true;
            $scope.alertaAdulto = "";

            if(( nroAdulto == null ) || (nroAdulto <= 1) ){
                $scope.alertaAdulto = "Debes ingresar dos o más personas.";
                $scope.myValor = false;

            }else{

                if(totalPersonas > 6){
                    $scope.tituloPerMas = "No hay esa cantidad de personas para esa cabaña.";
                }

                $scope.tituloMes = mes;
                $scope.tituloDia = dia;
                $scope.myValor = true;
                var nroPax = 2;
                for (var i = 0; i < arrayPrecios.length ; i++) {
                    
                    var cper = "";
                    var precioPrevio= JSON.stringify(arrayPrecios[i]);
                    precioPrevio = precioPrevio.substring(9);
                    var numeroString = precioPrevio.length;
                    numeroString = numeroString - 2;

                    var precioTest = precioPrevio.substring(0,numeroString);

                    if(totalPersonas == i+nroPax){
                        cper = "verdad";
                    }else{
                        cper = "noverdad"
                    }
                    var a = {
                            nroPersonas: nroPax+i,
                            fechasp: precioTest,
                            cantper: cper
                        };

                    preciosFinal.push(a);   

                }
            }
            $scope.preciosP = preciosFinal;        

        }

        //-----------resetea los elementos----------
        $scope.resetAllElemet = function() {
            $scope.cartelTarifas = "Precione las fechas para ver los precios.";
            $scope.verTarifas = "";
            $scope.tituloMes = "";
            $scope.tituloDia = "";
            $scope.preciosP = "";
        }

        //------------------------------------

        $scope.calcularReservas = function(fechaInicial, fechaFinal, cabanas, desayuno,nroAdulto,nroMenor) {

            cabanas = $scope.CabanasFull;

            var totalPer = nroAdulto + nroMenor;
            $scope.myValor = true;
            var cantidadLoop = cabanas.length;
            $scope.cabanasDisponibles = 0;
            $scope.mostrar = "nomostrar";
            $scope.alertaUno = "";
            $scope.myValue = true;
            var diferencia = fechaFinal - fechaInicial;
            var diasDiferencia = Math.round(diferencia/(1000 * 60 * 60 * 24));
            var diasConsultar = [];

            if((fechaInicial == null)&&(fechaFinal == null)||(fechaInicial == undefined)||(diasDiferencia<=0)||(totalPer>6)){
                //alert("Tenes que ingresar las dos fechas culiado o meter una fecha correcta");
                $scope.alertaUno = "Debes ingresar una fecha mayor o igual a hoy";
                if(diasDiferencia <= 0){
                    $scope.alertaUno = "La fecha de ingreso tiene que ser menor a la de salida";
                }

                if(totalPer > 6){
                    $scope.alertaUno = "El total de personas debe ser 6 o menos.";
                }
                
                $scope.myValue = false;
            }else{

                $scope.cartelTarifas = "Precione las fechas para ver los precios.";
                $scope.verTarifas = "";
                $scope.tituloMes = "";
                $scope.tituloDia = "";
                $scope.preciosP = "";

                var cabanaConReserva = [];
                var cabanaSinReserva = [];
                var cabanaDispo = [];
                var fechaPostaInicial;
                    
                for (var i=0 ; i<cantidadLoop ; i++) {

                    var cantidadPersonas = cabanas[i].personas;
                    if(cantidadPersonas >= totalPer){

                        if(desayuno){
                            $scope.cartelDesa = "Desayuno incluido.";
                        }else{
                            $scope.cartelDesa = "Sin desayuno.";
                        }

                        var cabanasReservas = [];
                        var cab = [];
                        cab = cabanas[i].reservas;
                        var caba = []; 
                        caba = cabanas[i].temporada;
                        var cabanasDias = [];
                        var banderaReservas = false;
                        var banderaTemporada = false;
                        var banderaNofecha = false;

                        //saco los dias de las cabanas que estan reservadas
                        for (var k = 0; k < cab.length; k++) {
                            cabanasReservas.push(cab[k].fecha);
                        }
                        //saco los dias de la fecha 
                        for (var m = 0; m < caba.length; m++) {
                            cabanasDias.push(caba[m].fecha);
                        }
                        //--------------------------------

                        for (var j = 0; j < (diasDiferencia + 1); j++) {
                            // sumar dias tras dia
                            var diaInicialBucle = ("0"+fechaInicial.getDate()).slice(-2);
                            var mesInicialBucle = ("0"+(fechaInicial.getMonth()+1)).slice(-2);
                            var anioInicialBucle = fechaInicial.getFullYear();
                            var fechaPostaBucle = anioInicialBucle+"/"+mesInicialBucle+"/"+diaInicialBucle;

                            var milisegundos=parseInt(j*24*60*60*1000);
                            var diaSumado = new Date(fechaPostaBucle);
                            var tiempo = diaSumado.getTime();
                            diaSumado.setTime(tiempo+milisegundos);

                            var diaInicial = ("0"+diaSumado.getDate()).slice(-2);
                            var mesInicial = ("0"+(diaSumado.getMonth()+1)).slice(-2);
                            var anioInicial = diaSumado.getFullYear();

                            fechaPostaInicial = anioInicial+"-"+mesInicial+"-"+diaInicial;
                            //------
                            var n = cabanasReservas.indexOf(fechaPostaInicial);
                            var e = cabanasDias.indexOf(fechaPostaInicial);
                            if(n >= 0){
                                banderaReservas = true;
                                //break;
                            }else{
                                if(e >= 0){
                                    banderaTemporada = true;
                                    //break;
                                }else{
                                    banderaNofecha = true;
                                }
                            }
                            

                        }

                    var ReserTest = [];
                    ReserTest = cabanas[i].temporada;
                    var diaInicialPrecio = ("0"+fechaInicial.getDate()).slice(-2);
                    var mesInicialPrecio = ("0"+(fechaInicial.getMonth()+1)).slice(-2);
                    mesInicialPrecio = mesInicialPrecio - 1;
                    var anioInicialPrecio = fechaInicial.getFullYear();
                    var fechaPrecioInicial = new Date(anioInicialPrecio,mesInicialPrecio,diaInicialPrecio);

                    var diaFinalPrecio = ("0"+fechaFinal.getDate()).slice(-2);
                    var mesFinalPrecio = ("0"+(fechaFinal.getMonth()+1)).slice(-2);
                    var anioFinalPrecio = fechaFinal.getFullYear();
                    mesFinalPrecio = mesFinalPrecio - 1;
                    var fechaPrecioFinal = new Date(anioFinalPrecio,mesFinalPrecio,diaFinalPrecio)
                    //--extraigo las fecha consultadas-------------------------
                    var arrayfechaPrecio = [];
                    for (var k = 0; k < ReserTest.length ; k++) {
                        
                        var t = ReserTest[k].fecha;
                        var aniot = t.substring(0,4);
                        var mest = t.substring(5,7);
                        mest = mest - 1;
                        var diat = t.substring(8,10);
                        var fechat = new Date(aniot,mest,diat);

                        if( (fechat >= fechaPrecioInicial) && (fechat <= fechaPrecioFinal) ){
                            arrayfechaPrecio.push(ReserTest[k]);
                        }
                        
                    }

                    if( arrayfechaPrecio.length > 0 ){
                        ReserTest = arrayfechaPrecio;
                    }
                    //---------------------------

                    if (
                        ((banderaReservas == true)&&(banderaTemporada == false)&&(banderaNofecha == true))
                        ||((banderaReservas == false)&&(banderaTemporada == false)&&(banderaNofecha == true))
                        ||((banderaReservas == true)&&(banderaTemporada == false)&&(banderaNofecha == false))
                        ){
                        //quiere decir que existe por lo menos una fecha que este entre los reservados

                        ReserTest.sort(function(a, b){
                            return a.precioTemporada - b.precioTemporada;
                        });

                        var precioCartelito = ReserTest[0].precioTemporada;

                        if(desayuno){
                            ReserTest.sort(function(c, d){
                                return c.precioDesayuno - d.precioDesayuno;
                            });
                            precioCartelito = ReserTest[0].precioDesayuno;
                        }

                        

                        //------------------------
                        var a = {
                                    casa: cabanas[i].casa,
                                    id: cabanas[i].id,
                                    primero: "",
                                    nombre: cabanas[i].nombre,
                                    descripcion: cabanas[i].descripcion,
                                    precio: precioCartelito,
                                    camas: cabanas[i].camas,
                                    personas: cabanas[i].personas,
                                    tamanio: cabanas[i].tamanio,
                                    img: cabanas[i].img,
                                    reservas: cabanas[i].reservas,
                                    temporada: cabanas[i].temporada,
                                    servicios: cabanas[i].servicios,
                                    cabanaConreserva: "conReserva",
                                    estado: "Sin Fechas Reservadas",
                                    }
                        cabanaConReserva.push(a);
                    }else{

                        var elEstado = "";
                        if((banderaReservas == true)&&(banderaTemporada == true)&&(banderaNofecha == true)
                         ||(banderaReservas == false)&&(banderaTemporada == true)&&(banderaNofecha == true)
                         ||(banderaReservas == true)&&(banderaTemporada == true)&&(banderaNofecha == false)
                            ){
                            //cabañas de fechas disponibles
                            
                            ReserTest.sort(function(a, b){
                            return a.precioTemporada - b.precioTemporada;
                            });

                            var precioCartelito = ReserTest[0].precioTemporada;

                            if(desayuno){
                                ReserTest.sort(function(c, d){
                                    return c.precioDesayuno - d.precioDesayuno;
                                });
                                precioCartelito = ReserTest[0].precioDesayuno;
                            }

                            var a = {
                                    casa: cabanas[i].casa,
                                    id: cabanas[i].id,
                                    primero: "",
                                    nombre: cabanas[i].nombre,
                                    descripcion: cabanas[i].descripcion,
                                    precio: precioCartelito,
                                    camas: cabanas[i].camas,
                                    personas: cabanas[i].personas,
                                    tamanio: cabanas[i].tamanio,
                                    img: cabanas[i].img,
                                    reservas: cabanas[i].reservas,
                                    temporada: cabanas[i].temporada,
                                    servicios: cabanas[i].servicios,
                                    cabanaConreserva: "disponibles",
                                    estado: "Fechas Disponibles"
                                    }
                                cabanaDispo.push(a);
                            //cabañas de fechas disponibles----------    
                        }

                        if((banderaReservas == false)&&(banderaTemporada == true)&&(banderaNofecha == false)){
                            elEstado = "Cabañas Disponibles";
                            
                            ReserTest.sort(function(a, b){
                            return a.precioTemporada - b.precioTemporada;
                            });

                            var precioCartelito = ReserTest[0].precioTemporada;

                            if(desayuno){
                                ReserTest.sort(function(c, d){
                                    return c.precioDesayuno - d.precioDesayuno;
                                });
                                precioCartelito = ReserTest[0].precioDesayuno;
                            }

                            var a = {
                                    casa: cabanas[i].casa,
                                    id: cabanas[i].id,
                                    primero: "",
                                    nombre: cabanas[i].nombre,
                                    descripcion: cabanas[i].descripcion,
                                    precio: precioCartelito,
                                    camas: cabanas[i].camas,
                                    personas: cabanas[i].personas,
                                    tamanio: cabanas[i].tamanio,
                                    img: cabanas[i].img,
                                    reservas: cabanas[i].reservas,
                                    temporada: cabanas[i].temporada,
                                    servicios: cabanas[i].servicios,
                                    cabanaConreserva: "sinReserva",
                                    estado: elEstado
                                    }
                            cabanaSinReserva.push(a);
                            $scope.cabanasDisponibles += 1;
                        }
                        

                    }

                    }

                }
                //hasta aca


                if($scope.cabanasDisponibles > 0){
                    //alert("Existen "+$scope.cabanasDisponibles);
                    $scope.mostrar = "mostrar";
                    cabanaSinReserva.sort(function(a, b){
                        return a.precio - b.precio;
                    });
                    cabanaDispo.sort(function(a, b){
                        return a.precio - b.precio;
                    });
                    cabanaSinReserva[0].primero = "in";
                    $scope.cabanas = cabanaSinReserva;
                    $scope.cabanas = $scope.cabanas.concat(cabanaDispo);
                    $scope.cabanas = $scope.cabanas.concat(cabanaConReserva);

                }else{
                    cabanaDispo.sort(function(a, b){
                        return a.precio - b.precio;
                    });
                    //cabanaDispo[0].primero = "in";
                    $scope.cabanas = cabanaSinReserva;
                    $scope.cabanas = $scope.cabanas.concat(cabanaDispo);
                    $scope.cabanas = $scope.cabanas.concat(cabanaConReserva);
                }


            }

        };

        //-----------Mandar por POST los datos para reservar----------
        $scope.sendPost = function(fechaIni,fechaSal,nroAdulto,nroMenor, reservas, temporada) {
            
            $scope.getFechasReservadas(fechaIni, fechaSal, reservas, temporada);
            
            var obj = {}
            obj.fechaInicio = fechaIni;
            obj.fechaSalida = fechaSal;
            obj.cantidadTotal =  nroAdulto + nroMenor;
            obj.listaFechas =  $scope.fechas;

            $http.post(
                //cambiar url por la que corresponda
                'js/recivePost.php', 
                {
                    data: obj
                }).success(function(data){
                 alert("Se envio correctamente.");
                }).error(function(){
                    alert('Error al intentar enviar los datos.');
                });

        }


    })
    


})();