// Throttle Polyfill


// Basic Ways
const throttle1 = function(func, limit) {
	let inThrottle;
	return function() {
		const context = this;
		const args= arguments;
		if(!inThrottle) {
			func.apply(context, args);
			inThrottle = true;
			setTimeout(() => inThrottle = false, limit)
		}
	}
}

// Advance Way 
const throttle2 = function(func, limit) {
	let lastFunc;
	let lastRan;
	return function() {
		let context = this;
		let args = arguments;
		if(!lastRan) {
			func.apply(context, args);
			lastRan = Date.now();
		} else {
			clearTimeout(lastFunc);
			lastFunc = setTimeout(function(){
				if((Date.now() - lastRan) >= limit) {
					func.apply(context, args);
					lastRan = Date.now();
				}
			}, limit - (Date.now - lastRan));
		}
	}
}