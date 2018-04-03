const app = angular.module("todoApp", [])

app.directive('text', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.text = function(modelValue, viewValue) {
                return viewValue.length >= 20;
            };
        }
    };
});

app.controller("todoController", ['$scope', function ($scope) {
    $scope.tasks = [
        {
            name: 'eat mooooooooooooooooooooooooooooooooore',
            date: new Date(),
            checked: false,
            editMode: false
        }
    ]
    $scope.newTodo = "";
    $scope.daysOld = null;
    $scope.sortOrder = null;

    $scope.sortBy = (type) => {
        $scope.sortOrder = type;
    }

    $scope.turnOnEditMode = (name) => {
        let index = $scope.tasks.findIndex((task) => task.name === name)
        $scope.tasks[index].editMode = true;
    }

    $scope.turnOffEditMode = (name) => {
        let index = $scope.tasks.findIndex((task) => task.name === name)
        $scope.tasks[index].editMode = false;
    }

    $scope.filterByDaysUncompletedTodos = (val, i, arr) => {
        if ($scope.daysOld === null) {
            return val.checked === false
        } else {
            return val.checked === false && Math.floor((+new Date() - +val.date)/86400000) === $scope.daysOld;
        }
    }

    $scope.filterByDaysCompletedTodos = (val, i, arr) => {
        if ($scope.daysOld === null) {
            return val.checked === true
        } else {
            return val.checked === true && Math.floor((+new Date() - +val.date)/86400000) === $scope.daysOld;
        }
    }

    $scope.addTodo = () => {
        let name = $scope.newTodo;
        if (!name) {
            return;
        }
        if (!$scope.tasks.some((task) => task.name === name)) {
            $scope.tasks.push({
                name,
                date: new Date(),
                checked: false,
                editMode: false
            });
            $scope.newTodo = "";
        }
    }

    $scope.removeTodo = (index) => {
        $scope.tasks.splice(index, 1)
    }
}])
