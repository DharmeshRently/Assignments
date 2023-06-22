const assert =require('chai').assert;
const dha=require('../app');
const a=dha.dha();
const b=dha.add(1,1)
describe('App Testing',()=>{
    it('app should return d',()=>{
        assert.equal(a,'Dharmesh')
    })
    it('is string',(done)=>{
        assert.isString(a)
        done()
    })
    it('add result = 2',()=>{
        assert.equal(b,2)
    })
    it('trial',()=>{
        assert.isNumber(b)
    })
})
