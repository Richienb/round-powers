"use strict"

const assertNumber = value => {
	if (typeof value !== "number") {
		throw new TypeError(`Expected a number, got ${typeof value}`)
	}
}

const logBase = (base, number) => Math.log(number) / Math.log(base)

const roundPowers = (method, number, base) => {
	assertNumber(number)
	assertNumber(base)

	return base ** Math[method](logBase(base, number))
}

module.exports = roundPowers.bind(undefined, "round")
module.exports.up = roundPowers.bind(undefined, "ceil")
module.exports.down = roundPowers.bind(undefined, "floor")
