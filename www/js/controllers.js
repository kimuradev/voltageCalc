angular.module('voltageCalculator.controllers', [])

.controller('AppCtrl', function($scope) {
        
    
})

.controller('IndexCtrl', function($scope) {
    $scope.voltage = {
        entrada : null,
        resistor1: null,
        resistor2: null,
        saida: null
    };
    $scope.result = 0; 
    
    $scope.calcularVoltagem = function(){
        // calcular resistor de entrada -> I = O * (R1 + R2) / R2
        if(($scope.voltage.resistor1 != '' && $scope.voltage.resistor1 != null) && ($scope.voltage.resistor2 != '' && $scope.voltage.resistor2 != null) && ($scope.voltage.saida != '' && $scope.voltage.saida != null)){
            $scope.result = $scope.voltage.saida * ($scope.voltage.resistor1 + $scope.voltage.resistor2) / $scope.voltage.resistor2;
             $scope.unit = " volts";
        }
        // calcular resistor 1 -> R1 = (I * R2 / O) - R2
        else if(($scope.voltage.entrada != '' && $scope.voltage.entrada != null) && ($scope.voltage.resistor2 != '' && $scope.voltage.resistor2 != null) && ($scope.voltage.saida != '' && $scope.voltage.saida != null)){
            $scope.result = ($scope.voltage.entrada * $scope.voltage.resistor2 / $scope.voltage.saida) - $scope.voltage.resistor2 ;
             $scope.unit = " ohms";
        }
        // calcular resistor 2 -> R2 = O * R1 / (I - O)   
        else if(($scope.voltage.resistor1 != '' && $scope.voltage.resistor1 != null) && ($scope.voltage.entrada != '' && $scope.voltage.entrada != null) && ($scope.voltage.saida != '' && $scope.voltage.saida != null)){
            $scope.result =  $scope.voltage.saida * $scope.voltage.resistor1 / ($scope.voltage.entrada - $scope.voltage.saida);
            $scope.unit = " ohms";
        }
        //calcular resistor de saída ->  O = I * R2 / (R1 + R2)
        else if(($scope.voltage.resistor1 != '' && $scope.voltage.resistor1 != null) && ($scope.voltage.resistor2 != '' && $scope.voltage.resistor2 != null) && ($scope.voltage.entrada != '' && $scope.voltage.entrada != null)){
            $scope.result = $scope.voltage.entrada * $scope.voltage.resistor2 / ($scope.voltage.resistor1 + $scope.voltage.resistor2);
            $scope.unit = " volts";
        }
    }
    
     $scope.clear = function(){
       $scope.voltage = {
            entrada : null,
            resistor1: null,
            resistor2: null,
            saida: null
        };
        $scope.result = 0; 
    }
    
    
    $scope.checkCalculateButton = function(){
        // calcular resistor de entrada -> I = O * (R1 + R2) / R2
        if(($scope.voltage.resistor1 != '' && $scope.voltage.resistor1 != null) && ($scope.voltage.resistor2 != '' && $scope.voltage.resistor2 != null) && ($scope.voltage.saida != '' && $scope.voltage.saida != null)){
            return false;
        }
        // calcular resistor 1 -> R1 = (I * R2 / O) - R2
        else if(($scope.voltage.entrada != '' && $scope.voltage.entrada != null) && ($scope.voltage.resistor2 != '' && $scope.voltage.resistor2 != null) && ($scope.voltage.saida != '' && $scope.voltage.saida != null)){
            return false;
        }
        // calcular resistor 2 -> R2 = O * R1 / (I - O)   
        else if(($scope.voltage.resistor1 != '' && $scope.voltage.resistor1 != null) && ($scope.voltage.entrada != '' && $scope.voltage.entrada != null) && ($scope.voltage.saida != '' && $scope.voltage.saida != null)){
            return false;
        }
        //calcular resistor de saída ->  O = I * R2 / (R1 + R2)
        else if(($scope.voltage.resistor1 != '' && $scope.voltage.resistor1 != null) && ($scope.voltage.resistor2 != '' && $scope.voltage.resistor2 != null) && ($scope.voltage.entrada != '' && $scope.voltage.entrada != null)){
            return false;
        }else {
            return true;
        }
    }

});
