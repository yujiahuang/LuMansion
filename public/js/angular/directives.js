app.directive('brick', function () {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      
    }
  }
});

app.directive('scrollToBricks', function($window) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      // click and scroll
      element.on('click', function() {
        if(element.offset().top > $("#navbar").height())
          $("body").animate({scrollTop: element.offset().top - $("#navbar").height()}, "slow");
        if(element.hasClass("revert")){
          console.log("revert");
          $("body").animate({scrollTop: 0}, "fast");
        }
      });

      angular.element($window).bind("scroll", function() {

        // scroll and stick
        if (this.pageYOffset >= ( $("body").height() - $("#navbar").height() - element.height()) )  {
          scope.stick_instruction = true;
        }
        else {
          scope.stick_instruction = false;
        }

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

