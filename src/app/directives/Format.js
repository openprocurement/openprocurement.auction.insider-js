angular.module('auction').directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) {
                return;
            }

            ctrl.$formatters.unshift(function () {
                // this func is called when value is loaded from model
                return $filter('floor')(ctrl.$modelValue, 2);
            });

            ctrl.$parsers.unshift(function (viewValue) {
                // this func is called when value is loaded from input
                var plainNumber = viewValue.replace(/[^\d\,\.]/g, '');

                if (plainNumber.indexOf(".") !== -1) {
                    // for inputs like 1,000.55 (in case Ctr+V)
                    plainNumber = plainNumber.replace(/[\,]/g, '');
                } else {
                    // for inputs like 1000,55
                    plainNumber = plainNumber.replace(/[\,]/g, '.');
                }

                plainNumber = plainNumber.replace(/\.(?=.*\.)/, '');

                var formattedNumber = $filter('floor')(plainNumber);  // 20 000

                elem.val(formattedNumber);
                return plainNumber;
            });
        }
    };
}]);