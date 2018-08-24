import data from '../../data/courses.json'

// numbers
const numItems = data.length

test('Number of items = 9', ()=>{
    expect(numItems).toBe(9)
})

test('Number of items to be greater than or equal 9', ()=>{
    expect(numItems).toBeGreaterThanOrEqual(9)
})

//Strings
const dataTest = data[0].title

test('there is a JS in this title',()=>{
    expect(dataTest).toMatch(/JS/)
})

test('the title contains react',()=>{
    expect(dataTest).toContain('React')
})

// arrays
const data2 = ['React Native', 'Meteor']

test('the list of course mentions React native and MeteorJS',()=>{
    expect(['React Native', 'Meteor']).toEqual(expect.arrayContaining(data2))
})