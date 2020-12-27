const test = require("ava")
const roundPowers = require(".")

test("main", t => {
	t.is(roundPowers(10, 2), 8)
	t.is(roundPowers.up(10, 2), 16)
	t.is(roundPowers.down(10, 2), 8)
})
