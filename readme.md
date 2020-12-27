# round-powers [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/round-powers/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/round-powers)

Round a number to the closest power.

[![NPM Badge](https://nodei.co/npm/round-powers.png)](https://npmjs.com/package/round-powers)

## Install

```sh
npm install round-powers
```

## Usage

```js
const roundPowers = require("round-powers")

roundPowers(10, 2)
//=> 8

roundPowers.up(10, 2)
//=> 16

roundPowers.down(10, 2)
//=> 8
```

## API

### roundPowers(number, base)

Round `number` to the nearest power of `base`.

### roundPowers.up(number, base)

Round `number` up to the nearest power of `base`.

### roundPowers.down(number, base)

Round `number` down to the nearest power of `base`.

#### number

Type: `number`

The number to round.

#### base

Type: `number`

The base number to find the nearest power of.
