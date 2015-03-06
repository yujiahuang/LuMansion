app.directive('brick', function () {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      
    }
  }
});

app.directive('stick', function($window) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      angular.element($window).bind("scroll", function() {

        // scroll and stick
        if (this.pageYOffset >= ( element.parent().height() - element.height()) )  {
          scope.stick_instruction = true;
        }
        else {
          scope.stick_instruction = false;
        }
        // console.log(scope.stick_instruction)

        scope.$apply();
      });
    }
  }
});

app.directive('scrollToBricks', function($window) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      // click and scroll
      element.on('click', function() {

        // scroll to bricks
        if(element.offset().top <= $("body").height() - element.height()){
          console.log("blah");
          $("body").animate({scrollTop: element.offset().top - $("#navbar").height() + 1}, "slow");
        }
        else {
          console.log(element.offset().top +" "+ $("#content").height() +" "+ element.height());
          $("body").animate({scrollTop: $("body").scrollTop() + $("#content").height() - element.height() + 1}, "slow");
        }

        // back to top
        if(scope.revert_instruction){
          // console.log("revert");
          $("body").stop().animate({scrollTop: 0}, "fast");
        }
      });

      angular.element($window).bind("scroll", function() {

        // scroll to bottom
        if (this.pageYOffset + $(window).height() > $(document).height() - 100)  {
          scope.revert_instruction = true;
        }
        else {
          scope.revert_instruction = false;
        }        

        scope.$apply();
      });

    }
  }
});






