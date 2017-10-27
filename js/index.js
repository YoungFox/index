function Fund(options) {
	var defaultOptions = {
		moneyPerMonth: 5000,
		years: 21,
		rate: 0.1,
		principalRate: 0.1
	}

	this.options = $.extend(defaultOptions, options);
	this.months = this.options.years * 12;
	this.init();
}

Fund.prototype = {
	constructor: Fund,
	init: function() {

	},
	defaultCal: function() {
		// 计算初始传入参数的收益
		return this.calFinalMoney(this.months, this.options.moneyPerMonth, this.options.rate, this.principalRate);
	},
	calculate: function(principal, rate) {
		// 每个月计算
		var monthMoney = principal + principal * rate / 12;
		return monthMoney;
	},
	calFinalMoney: function(months, moneyPerMonth, rate, principalRate) {
		if (months > 1) {
			// console.log(this.calPrincipal(months, this.options.moneyPerMonth, principalRate));
			return this.calculate(this.calFinalMoney(months-1, moneyPerMonth, rate, principalRate) + this.calPrincipal(months-1,moneyPerMonth,principalRate) ,rate);
		} else if (months == 1) {
			var a = this.calculate(moneyPerMonth, rate);
			return a;
		}
	},
	calPrincipal: function(months, moneyPerMonth, principalRate) {
		// console.log( Math.pow((1+ this.options.principalRate),Math.floor((months -1)/12)));
		// console.log(Math.floor((months - 1) / 12));
		// 计算本机增加
		return moneyPerMonth * Math.pow((1 + principalRate), Math.floor((months - 1) / 12));
	},

	calByYear: function ( principal , rate){
		return principal* (1+ rate);
	},
	calFinalMoneyByYear: function (years , moneyPerYear , rate){
		if (years > 1) {
			// console.log(this.calPrincipal(years, this.options.moneyPerMonth, principalRate));
			return this.calByYear(this.calFinalMoneyByYear(years-1,moneyPerYear, rate) + moneyPerYear, rate);
		} else if (years == 1) {
			var a = this.calByYear(moneyPerYear, rate);
			return a;
		}
	}
}