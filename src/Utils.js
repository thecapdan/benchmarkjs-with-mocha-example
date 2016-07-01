var Utils = {
	fiboLooping : function(n) {
	    var a = 0, b = 1, f = 1;
	    for(var i = 2; i <= n; i++) {
	        f = a + b;
	        a = b;
	        b = f;
	    }
	    return f;
	},
    fiboRecursive: function (n) {
	  return n == 0 ? 0 :
	         n == 1 ? 1 :
	         this.fiboRecursive(n-1) + this.fiboRecursive(n-2);
	},
 	fiboWithCache : function(n, cache) {
 	 	if(!cache[n]) {
		      cache[n] = this.fiboRecursive(n);
		}
		return cache[n];
 	}
}

module.exports = Utils;