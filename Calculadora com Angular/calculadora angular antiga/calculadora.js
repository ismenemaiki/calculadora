angular.module("Calculadora", []);
        angular.module("Calculadora").controller("Controller", function($scope){
            $scope.titulo = "Calculadora";
            $scope.frase = "Escolha uma operação"
            $scope.resultadoTela = "Aguardando cálculo...";
            $scope.n1='';
            $scope.n2='';
            $scope.soma = function (){
                
                if ($scope.n1 == "" && $scope.n2 == "") {
                    console.log("ENTREI");
                    $scope.resultadoTela = "campo 1 e 2 vazios!";
                } else if ($scope.n2 == "") {
                    $scope.resultadoTela = "campo 2 vazio!";
                } else if ($scope.n1 == "") {
                    $scope.resultadoTela = "campo 1 vazio!";
                }
        
                resultado = parseInt($scope.n1) + parseInt($scope.n2);
                $scope.resultadoTela = 'A soma dos numero é: '+resultado;
                    
            };
            $scope.subtracao = function (){
                resultado = parseInt($scope.n1) - parseInt($scope.n2);
                $scope.resultadoTela = 'A subtração dos numero é: '+resultado;
            };
            $scope.divisao = function (){
                resultado = parseInt($scope.n1) / parseInt($scope.n2);
                $scope.resultadoTela = 'A divisão dos numero é: '+resultado.toFixed(2);
            };
            $scope.multiplicacao = function (){
                resultado = parseInt($scope.n1) * parseInt($scope.n2);
                $scope.resultadoTela = 'A multiplicação dos numero é: '+resultado;
            };
                        
        });