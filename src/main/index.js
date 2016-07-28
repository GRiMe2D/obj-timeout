/**
 * Created by GRiMe2D on 7/25/16.
 * obj-timeout main class
 */

/**
 * ObjTimeout constructor.
 * @param {Function} func - the function you want to execute after delay milliseconds
 * @param {Number} delay - the number of milliseconds (thousandths of a second) that the function call should be delayed by
 * @constructor
 */
function ObjTimeout (func, delay) {
	this.delay     = delay;
	this.timeoutID = setTimeout(func, delay);
}

/**
 * Clears the object. Timer function is never called if delay didn't passed yet
 */
ObjTimeout.prototype.destroy = function () {
	clearTimeout(this.timeoutID);
};

module.exports = ObjTimeout;