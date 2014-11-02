angular.module("sportsStore")
.constant("productListActiveClass", "btn-primary")
.constant("productListPageCount", 3)
.controller("productListCtrl", function($scope, $filter, productListActiveClass, productListPageCount){

	var selectedCategory = null;

	$scope.selectedPage = 1;
	$scope.pageSize = productListPageCount;

	// Every time we click on a category button we invoke a new selectCategory
	$scope.selectCategory = function (newCategory){
		selectedCategory = newCategory;
		// Always reset to the first page
		$scope.selectedPage = 1;
	}

	$scope.selectPage = function(newPage){
		$scope.selectedPage = newPage;
	}

	// This function acts as an accessor to the current selectedCategory
	$scope.categoryFilterFn = function(product){
		return selectedCategory == null || product.category == selectedCategory;
	}

	// Getters
	$scope.getCategoryClass = function(category){
		return selectedCategory == category ? productListActiveClass : "";
	}

	$scope.getPageClass = function(page){
		return $scope.selectedPage == page ? productListActiveClass : "";
	}



});