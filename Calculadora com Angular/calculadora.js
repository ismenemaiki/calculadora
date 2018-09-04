angular.module("Calculadora", []);
angular.module("Calculadora").controller("Controller-calculadora", function ($scope) {
    $scope.titulo = "Calculadora";
    $scope.frase = "Escolha uma operação"
    $scope.resultadoTela = "Aguardando cálculo...";
    $scope.n1 = '';
    $scope.n2 = '';
    $scope.rAdicao = false;
    $scope.rSubtracao = false;

    $scope.calcular = function () {
        
        if ($scope.n1 == '' && $scope.n2 == '') {
            $scope.resultadoTela = "VOCÊ DEVE INFORMAR OS DOIS CAMPOS PARA EFETUAR O CÁLCULO";
            return;
        }

        if ($scope.n1 == '') {
            $scope.resultadoTela = "Informe o campo 1";
            return;
        } 
        
        if ($scope.n2 == '') {
            $scope.resultadoTela = "Informe o campo 2";
            return;
        } 

        if (isNaN($scope.n1) && isNaN($scope.n2)){
            $scope.resultadoTela = "O VALOR INFORMADO DEVE SER NUMÉRICO";
            return;
        }

        if (isNaN($scope.n1)){
            $scope.resultadoTela = "O primeiro campo deve conter apenas numeros";
            return;
        }

        if (isNaN($scope.n2)){
            $scope.resultadoTela = "O segundo campo deve conter apenas numeros";
            return;
        }
        
        if (rAdicao.checked == false && rSubtracao.checked == false){
            $scope.resultadoTela = "Selecione uma operação!";
            return;
        }

        if (rAdicao.checked == true) {
            resultado = parseFloat($scope.n1) + parseFloat($scope.n2);
            $scope.resultadoTela = resultado;
            return;
        }
        
        if(rSubtracao.checked == true) {
            resultado = parseFloat($scope.n1) - parseFloat($scope.n2);
            $scope.resultadoTela = resultado;
            return;
        }


    };
}); //fim module