(function(){
'use strict';

angular.module("ShoppingListCheckOff",[])
	.controller("ToBuyController",ToBuyController)
	.controller("AlreadyBoughtController",AlreadyBoughtController)
	.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

	ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService)
	{
		var toBuyList=this;
		toBuyList.items=ShoppingListCheckOffService.getToBuyItems();
		toBuyList.buyItem=function(itemIndex)
		{
			ShoppingListCheckOffService.buyItem(itemIndex);
		};
	}

	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService)
	{
		var boughtList=this;
		boughtList.items=ShoppingListCheckOffService.getBoughtItems();
		
	}
	
	function ShoppingListCheckOffService()
	{
		var service=this;
		var toBuyItems=[
			{name:"cookies",quantity:10},
			{name:"chips",quantity:5},
			{name:"cokes",quantity:2},
			{name:"apple",quantity:6},
			{name:"banana",quantity:6},
		];
		
		var boughtItems=[];
		
		service.buyItem=function(itemIndex)
		{
			var item=toBuyItems[itemIndex];
			boughtItems.push(item);
			toBuyItems.splice(itemIndex,1);
		};
		
		service.getToBuyItems=function()
		{
			return toBuyItems;
		};
		
		service.getBoughtItems=function()
		{
			return boughtItems;
		};
		
	}

})();