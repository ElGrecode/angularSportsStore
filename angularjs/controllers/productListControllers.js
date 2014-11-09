angular.module("sportsStore")
.constant("productListActiveClass", "btn-primary")
.constant("productListPageCount", 3)
.controller("productListCtrl", function($scope, $filter, productListActiveClass, productListPageCount, cart){

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

	$scope.addProductToCart = function(product){
		// Since we have declared a dependeny on the cart servie and defined a behavior called
		// addProductToCart that takes a product object and uses it to call the addProduct method on the cart service
		cart.addProduct(product.id, product.name, product.price);
	}

});