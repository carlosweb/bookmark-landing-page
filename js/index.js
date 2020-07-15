// let valorDoFrete = 50.00
// let valorDoProduto = 60
// let valorTotal = 0


// if(typeof valorDoProduto === 'number' && typeof valorDoFrete === 'number'){
//     valorTotal = valorDoProduto + valorDoFrete
// }
// console.log(valorTotal)


// tab script
window.addEventListener("load", function() {
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});


// Accordion Script

const accordionBt = document.querySelectorAll('.accordion')
const textTab = document.querySelectorAll('.panel')


accordionBt.forEach((item) => {
	item.addEventListener('click', () => {
		textTab.classList.add('.active')
	})
})



