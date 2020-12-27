declare const roundPowers: {
	/**
	Round `number` up to the nearest power of `base`.

	@param number The number to round.
	@param base The base number to find the nearest power of.

	@example
	```
	const roundPowers = require("round-powers")

	roundPowers.up(10, 2)
	//=> 16
	```
	*/
	up: (number: number, base: number) => number

	/**
	Round `number` down to the nearest power of `base`.

	@param number The number to round.
	@param base The base number to find the nearest power of.

	@example
	```
	const roundPowers = require("round-powers")

	roundPowers.down(10, 2)
	//=> 8
	```
	*/
	down: (number: number, base: number) => number

	/**
	Round `number` to the nearest power of `base`.

	@param number The number to round.
	@param base The base number to find the nearest power of.

	@example
	```
	const roundPowers = require("round-powers")

	roundPowers(10, 2)
	//=> 8
	```
	*/
	(number: number, base: number): number
}

export = roundPowers
