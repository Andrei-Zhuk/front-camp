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
    $scope.articles = [
        {
            title: 'eat mooooooooooooooooooooooooooooooooore',
            content: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
            editMode: false
        }
    ]
    $scope.newArticleTitle = "";
    $scope.newArticleContent = "";
    $scope.addingArticle = false;

    $scope.openCloseAddingArticle = () => {
        $scope.addingArticle = !$scope.addingArticle;
    }

    $scope.turnOnEditMode = (title) => {
        let index = $scope.articles.findIndex((article) => article.title === title)
        $scope.articles[index].editMode = true;
    }

    $scope.turnOffEditMode = (title) => {
        let index = $scope.articles.findIndex((article) => article.title === title)
        $scope.articles[index].editMode = false;
    }

    $scope.saveArticle = (title, content) => {
        if (!title || !content) {
            return;
        }
        if (!$scope.articles.some((article) => article.title === title)) {
            $scope.articles.push({
                title,
                content,
                editMode: false
            });
            // $scope.newArticleTitle = "";
            // $scope.newArticleContent = "";
            $scope.addingArticle = false;
        }
    }
}])
