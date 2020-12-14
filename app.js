angular.module('plunker', ['toastr'])

  .controller('MainCtrl', function($scope,$compile,$sce, toastr) {
    $scope.foo = {
      bar: 'world'
    };
    $scope.yesno=false;

    $scope.yes = function(){
       $scope.yesno=true;
    }
    
    $scope.no = function(){
       $scope.yesno=false;
    }
  var html = "<br /><br /><button type='button' class='btn clear'>Yes</button><button type='button' class='btn clear'>No</button>";
                  
    
    toastr.success(html,'Are You Sure?',
    {
      allowHtml: true,
      timeOut: 50000,
      tapToDismiss: false,
      extendedTimeOut: 100000,
      onShown: function (toast) {
        angular.element( toast.el[0]).find("button")[0].onclick = $scope.yes;
        angular.element( toast.el[1]).find("button")[1].onclick = $scope.no;
      },
      onTap:function(){
        alert(($scope.yesno==true)? 'Yes':'No');
      }
    });
  });
