var flag = 1;
var num = 0;

function f() {
	var Bn = document.getElementById('Bn');
	if (num == 7) {
		Bn.style.top = 280 + 'px';
		Bn.style.left = 500 + 'px';
		flag = 1;
		num = 0;
		window.alert("Just surrender and follow your will.");
		return;
	}
	var aWidth = document.body.clientWidth || document.documentElement.clientWidth;
	var aHeight = document.body.clientHeight || document.documentElement.clientHeight;
	if (flag == 1) {
		Bn.style.top = f2(aHeight, 1);
		Bn.style.left = f2(aWidth, 1);
		flag = 2;
	} else if (flag == 2) {
		Bn.style.top = f2(aHeight, 3);
		Bn.style.left = f2(aWidth, 1);
		flag = 3;
	} else if (flag == 3) {
		Bn.style.top = f2(aHeight, 2);
		Bn.style.left = f2(aWidth, 1);
		flag = 4;
	} else if (flag == 4) {
		Bn.style.top = 280 + 'px';
		Bn.style.left = 500 + 'px';
		flag = 1;
	}
	num++;
}

function f2(param1, param2) {
	var rand = Math.random();
	if (param2 == 1) {
		return Math.floor(rand * param1) + 'px';
	} else {
		return Math.floor((rand + param2) * param1) + 300 + 'px';
	}
}
