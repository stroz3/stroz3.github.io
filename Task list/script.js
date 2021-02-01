
var clock = document.getElementById('clock');
function hexoClock() {
	var time = new Date();
	var h = time.getHours().toString();
	var m = time.getMinutes().toString();
	var y = time.getFullYear().toString();
	var mounth = time.getMonth().toString();
	var dat = time.getDate().toString();
	if (h.length < 2) {
		h = '0' + h;
	}
	if (m.length < 2) {
		m = '0' + m;
	}
	var clockString = h + ':' + m;
	var dateString = y + '/' + mounth + '/' + dat;
	clock.textContent = clockString;
}
$('.input2').click(function (e) {

});
hexoClock();

// function tabActive() {
// 	let tabNav = document.querySelectorAll('.quest-list-li'),
// 		tabContent = document.querySelectorAll('.full'),
// 		tabName;

// 	tabContent.forEach(item => {
// 		item.classList.add('full')
// 		if (item.className === 'quest-full full block_0') {
// 			item.classList.add('active')
// 			item.classList.remove('full')
// 		}
// 	})

// 	tabNav.forEach(item => {
// 		if (item.className === 'quest-list-li block_0') {
// 			item.classList.add('select')
// 		}
// 		item.addEventListener('click', selectTab)
// 	})
// 	function selectTab() {
// 		tabNav.forEach(item => {
// 			item.classList.remove('select')
// 		});
// 		this.classList.add('select')
// 		tabName = this.getAttribute('data-tab-name');
// 		selectTabContent(tabName)
// 	}
// 	function selectTabContent(tabName) {
// 		tabContent.forEach(item => {
// 			if (item.classList.contains(tabName)) {
// 				item.classList.add('active')
// 				item.classList.remove('full')
// 			} else {
// 				item.classList.remove('active')
// 				item.classList.add('full')
// 			}
// 		})
// 	}
// }
// tabActive()