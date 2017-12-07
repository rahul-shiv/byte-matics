var app = angular.module('sumApp', []);
app.controller('control',function($scope,$window){
    console.log($window);
    $scope.start=true;
    $scope.see=false;
    $scope.ans=false;
    $window.onclick=function(event){
        var x= document.getElementById('myModal');
        if(event.target==x)
        {
            $scope.myForm.$setPristine();
            $scope.myForm.$setUntouched();
            $scope.start=true;
            $scope.see=false;
            $scope.$apply();
        }
    }
    $scope.disp=function(){
        $scope.see=true;
        $scope.start=false;
    }
    $scope.dispans=function(){
        if($scope.myForm.num1.$error.pattern || $scope.myForm.num2.$error.pattern || $scope.myForm.num1.$error.required || $scope.myForm.num2.$error.required){
            alert('Enter valid numbers');
        }
        else{
            console.log($scope.myForm.num1.$error.pattern);
            $scope.see=false;
            $scope.num1=Number($scope.num1);
            $scope.num2=Number($scope.num2);
            $scope.ans=true;
        }
    }
});

app.directive('popup',function(){
    return{
        template:  "<form name='myForm' class='popup animate-show-hide'>\
                    <input type='text' class='inp' ng-pattern='/^[0-9]+(.[0-9]+)?$/' ng-model='num1' name='num1' required></input>\
                    <span class='warning' data-ng-show='myForm.num1.$error.pattern||(myForm.num1.$touched&&myForm.num1.$error.required)'>Enter A Valid Number</span><br><br>\
                    <input type = 'text' class='inp' ng-model='num2' ng-pattern='/^[0-9]+(.[0-9]+)?$/' name='num2' required></input>\
                    <span class='warning' data-ng-show='myForm.num2.$error.pattern||(myForm.num2.$touched&&myForm.num2.$error.required)'>Enter A Valid Number</span><br>\
                    <input class= 'start' style='position:relative;left:30%;top:15px' type='button' value='Perform Addition' data-ng-click='dispans()'></input>\
                    </form>\
                    "
    }
});

app.directive('display',function(){
    return{
        template:  "<div id=sum>SUM = {{num1+num2}}</div>\
                    <br><span class= 'start' style='position:absolute;left:45%;top:70%;padding:5px 0px' type='button'><a href='main.html' style='margin:30px'>Retry</a></span>\
        "
    }
});
