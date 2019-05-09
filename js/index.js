$(document).ready(function () {
	$(window).scroll(function () {
		var navScroll = $(this).scrollTop();
		if (navScroll >= 100) {
			$('.proof').fadeIn();
			$('.topbtn').fadeIn();
		}else {
			$('.proof').fadeOut();
			$('.topbtn').fadeOut();
		}
		
	});
	$('.topbtn').click(function () {
			$('html,body').animate({scrollTop:0},600);
			return false;
	});
});
	
function openTab(event, id) {
    // Declare all variables
    var i, tabcontent, tabs;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tabs");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(id).style.display = "block";
    event.currentTarget.className += " active";
}
var slider = document.querySelectorAll('.slider1');
var currentSlider = 0;
	var interval = setInterval(moveSlider, 8000);
	window.addEventListener("keydown", slideShow, false);
	function slideShow(e) {
		if (e.keyCode == "38" || e.keyCode == "37") {
			prevSlider();
		} else if (e.keyCode == "40" || e.keyCode == "39") {
			moveSlider();
		}
	}
	function moveSlider() {
		slider[currentSlider].setAttribute('class', 'slider1');
		currentSlider= (currentSlider + 1) % slider.length;
		slider[currentSlider].setAttribute('class', 'slider1 show');
	}
	function prevSlider() {
		if (currentSlider != 0) {
			slider[currentSlider].setAttribute('class', 'slider1');
			currentSlider= (currentSlider - 1) % slider.length;
			slider[currentSlider].setAttribute('class', 'slider1 show');
		} else {
			slider[currentSlider].setAttribute('class', 'slider1');
			currentSlider = slider.length;
			currentSlider= (currentSlider - 1) % slider.length;
			slider[currentSlider].setAttribute('class', 'slider1 show');
		}
	}
	function slideNav(){
		document.getElementById('menu').style.right = 0;
		document.getElementById('menu1').style.visibility = "visible";
		document.getElementById('menu1').style.backgroundColor = "rgba(0,0,0,0.4)";
		document.getElementById('span').style.transform = "rotate(360deg)";
	}
	function closeNav() {
		document.getElementById('menu').style.right = '-300px';
		document.getElementById('menu1').style.visibility = "hidden";
		document.getElementById('menu1').style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById('span').style.backgroundColor = "rotate(360deg)";
	}
function initMap() {
	var option = {
		zoom: 8,
		center: {lat: 6.4297618, lng: 7.4940821}
	}
	var map = new google.maps.Map(document.getElementById('map'), option);
	var marker = new google.maps.Marker({
		position: {lat: 6.4297618, lng: 7.4940821},
		map: map
	});

}

function pay_type() {
	if (document.payment.pay[0].checked == true) {
		$('#item1').slideDown();
	} else {
		$('#item1').slideUp();
	}
	if (document.payment.pay[1].checked == true) {
		$('#item2').slideDown();
	} else {
		$('#item2').slideUp();
	}
	if (document.payment.pay[2].checked == true) {
		$('#item3').slideDown();
	} else {
		$('#item3').slideUp();
	}
}
function calc(id1, id2, id3) {
	var quantity = id1.value;
	var price = document.getElementById(id3).innerHTML;
	var total = document.getElementById(id2);
	total.innerHTML = '&#8358;'+ (quantity * price);

}
function add_to_cart(name, img, price, qty) {
	var name = document.getElementById(name).innerHTML;
	var price = document.getElementById(price).innerHTML;
	var qty = document.getElementById(qty).value;
	var d = new Date();
	var currentTime = d.getTime();
	var data = {
		'Name' : name,
		'Image' : img,
		'Price' : price,
		'Quantity' : qty
	};
	var singleItem = JSON.stringify(data);
	if (window['localStorage']) {
			localStorage.setItem('item'+currentTime, singleItem);

		} else {
			alert('Your browser does not supported HTML5 web storage');
		}
}
function get_cart() {
	document.getElementById('count1').innerHTML = localStorage.length;
	document.getElementById('count2').innerHTML = localStorage.length;
	for (var i = 0; i < localStorage.length; i++) {
		var items = localStorage.getItem(localStorage.key(i));
		items = JSON.parse(items);
		var tot = items.Price*items.Quantity;
		document.getElementById('bdy').innerHTML += '<tr><td class="close"><a href="cart.html" id='+localStorage.key(i)+' onclick="delete_cart(\''+localStorage.key(i)+'\')">&times;</a></td><td><img src='+items.Image+'></td><td>'+items.Name+'</td><td>$<span id="price'+i+'">'+items.Price+'</span></td><td><input type="number" name="quantity" id="quantity" value='+items.Quantity+' oninput="calc(this, \'total'+i+'\', \'price'+i+'\')" onload="calc(this, \'total'+i+'\', \'price'+i+'\')"></td><td id="total'+i+'">&#8358;<span class="t">'+tot+'</span></td></tr>';
		
	}	
		
}
function delete_cart(i){ 
	localStorage.removeItem(i);
}