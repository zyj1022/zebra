import assert from 'assert'
import myFirstFunc from '../src'

describe('validate:', () => {
  describe('myFirstFunc', () => {
    test(' return hello rollup ', () => {
      assert.strictEqual(myFirstFunc('rollup'), 'hello rollup')
    })
  })
})