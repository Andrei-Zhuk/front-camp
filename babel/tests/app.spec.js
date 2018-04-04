describe('Articles', () => {
    const article = {
        title: 'birthday of Jane',
        content: 'cool',
        editMode: false
    };
    let $scope, ctrl;

    beforeEach(angular.mock.module('todoApp'));

    beforeEach(inject(($rootScope, $controller) => {
        $scope = $rootScope.$new();
        ctrl = $controller('todoController', {
            $scope
        })
    }));

    it('should exist', () => {
        expect($scope.articles).toBeDefined();
    });

    describe('.saveArticle()', () => {
        it('should exist', () => {
            expect($scope.saveArticle).toBeDefined();
        });

        it('should save article', () => {
            $scope.saveArticle('boring title', 'boring content')
            expect($scope.articles.length).toBe(2);
        });
    });

    describe('.openCloseAddingArticle()', () => {
        it('should exist', () => {
            expect($scope.openCloseAddingArticle).toBeDefined();
        });

        it('should toggle adding of article', () => {
            expect($scope.addingArticle).toBe(false);
            $scope.openCloseAddingArticle()
            expect($scope.addingArticle).toBe(true);
        });
    });

    describe('.turnOnEditMode()', () => {
        it('should exist', () => {
            expect($scope.turnOnEditMode).toBeDefined();
        });

        it('should turn on edit mode for specific article', () => {
            $scope.saveArticle('boring title', 'boring content')
            expect($scope.articles[1].editMode).toBe(false);
            $scope.turnOnEditMode('boring title')
            expect($scope.articles[1].editMode).toBe(true);
        });
    });

    describe('.turnOffEditMode()', () => {
        it('should exist', () => {
            expect($scope.turnOffEditMode).toBeDefined();
        });

        it('should turn off edit mode for specific article', () => {
            $scope.saveArticle('boring title', 'boring content')
            expect($scope.articles[1].editMode).toBe(false);
            $scope.turnOnEditMode('boring title')
            expect($scope.articles[1].editMode).toBe(true);
            $scope.turnOffEditMode('boring title')
            expect($scope.articles[1].editMode).toBe(false);
        });
    });
});
