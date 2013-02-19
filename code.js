// Resize the product list according to window size
styleProductList = function(event) {

  var product_list = document.getElementById("product-list");
	var itemList = product_list.getElementsByTagName("ul")[0];
	
	fullWidth = product_list.offsetWidth;
	
	itemList.setAttribute("style", "width:" + fullWidth.toString() + "px");

	itemWidth = 142; // the width of a product item in px
	
	minMarginWidth = 10; // the minimum width between products in px
		
	items = parseInt(fullWidth / (itemWidth + minMarginWidth)); //the number of products on a row
	
	var products = itemList.getElementsByTagName("li");
	len = products.length;
	
	if(len < items)
		items = len;
	
	//console.log(items, "items");
	
	fullMargin = fullWidth - (itemWidth + minMarginWidth) * (items - 1) - itemWidth ; //the total amount of margin that is going to be set on a product row

	itemMargin = fullMargin / (items - 1) + minMarginWidth; // the margin that has to be set for a product


	for (var i = 0, len; i < len; i++ ) {
		if((i+1) % items != 0)
			{
			products[i].setAttribute("style", "margin-right:" + itemMargin.toString() + "px"); //setting the margin for the first n-1 products on a row.
			}
			else
			products[i].setAttribute("style", "margin-right: 0px"); //setting the margin of the last product from a row
			
	}
	
	
}


window.onresize = styleProductList;
window.addEventListener("load", styleProductList, false);
