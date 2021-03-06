angular.module("customFilters", [])
.filter("unique", function(){
	return function (data, propertyName){
		// data is a reference to our entire object
		if (angular.isArray(data) && angular.isString(propertyName)){
			var results = [];
			var keys = {};
			// Iterating over our data array and value propertyNames to an object.
			// We push this property into our array and return the object
			for (var i = 0; i < data.length; i++){
				var val = data[i][propertyName];
				if (angular.isUndefined(keys[val])){
					keys[val] = true;
					results.push(val);
				}
			}
			return results;
		} else {
			return data;
		}
	}
})
.filter("range", function($filter){
	return function (data, page, size){
		if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)){
			var start_index = (page - 1) * size;
			if(data.length < start_index){
				return [];
			} else {
				console.log(data.slice(start_index, size));
				return $filter("limitTo")(data.splice(start_index), size);
			}
		} else { 
			return data;
		}
	}
})
.filter("pageCount", function(){
	return function(data, size){
		if (angular.isArray(data)){
			var result = [];
			for (var i = 0; i < Math.ceil(data.length / size); i++){
				result.push(i);
			}
			return result;
		} else {
			return data;
		}
	}
})