angular.module('auction').filter('formatnumber', ['$filter', function($filter) {
  return function(val) {
    var isInteger = function(num) {
      return (num ^ 0) === num;
    };
    var format_number = function(val) {
      return math.format(Number(val), {
        notation: 'fixed',
        precision: 2
      }).replace(/(\d)(?=(\d{3})+\.)/g, "$1'").replace(/\./g, ",");
    };
    if (isInteger(val)) {
      return format_number(math.eval(math.format(math.fraction(val))).toFixed(2));
    }
    return ($filter('number')(val) || "").replace(/,/g, "'") || "";
  };
}]);