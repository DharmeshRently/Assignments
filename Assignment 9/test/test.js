const assert=require('chai').assert;
const q1=require("../question_1.js");
const q2=require("../question_2.js");
const q3=require("../question_3.js");
const q4=require("../question_4.js");
const q5=require("../question_5.js");
const q6=require("../question_6.js");

describe('Testing',()=>{

    describe('Question_1',()=>{
        it('q1 should return a string',()=>{
            assert.isString(q1())
        })
        it('q1 should return current day (Thursday)',()=>{
            assert.equal(q1(),'Thursday')
        })
    })

    describe('Question_2',()=>{
        it('q2 should return an array',()=>{
            assert.isArray(q2())
        })
    })

    describe('Question_3',()=>{
        it('q3 should return an array',()=>{
            assert.isArray(q3())
        })
    })

    describe('Question_4',()=>{
        it('q4 should return a string',()=>{
            assert.isString(q4('Hello','L'))
        })
        it('q4 should return HeLLo',()=>{
            assert.equal(q4('Hello','L'),'HeLLo')
        })
        it('q4 length must be 5',()=>{
            assert.lengthOf(q4('Hello','L'),5);
        })
    })

    describe('Question_5',()=>{
        it('json',()=>{
            assert.equal(q5(),'{\n    "name": "Dharmesh",\n    "age": 21\n}')
        })
    })

    describe('Question_6',()=>{
        it('q6 should return Dharmesh 21 Ram',()=>{
            assert.equal(q6(),'Dharmesh 21 Ram ')
        })
    })
})
