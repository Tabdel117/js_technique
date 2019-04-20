Array.prototype.binary_search = function(low, high, khey) {
	if (low > high)
		return -1;
	var mid = parseInt((high + low) / 2);
	if (this[mid] > khey)
		return this.binary_search(low, mid - 1, khey);
	if (this[mid] < khey)
		return this.binary_search(mid + 1, high, khey);
	return mid;
};