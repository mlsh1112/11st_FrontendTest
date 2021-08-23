import {parserHour, parserDay} from './ClockRender'

test('parser Hours', () => {
    const result = parserHour('3','PM')
    expect(result).toBe('15')
})

test('parser Hours', () => {
    const result = parserHour('3','AM')
    expect(result).toBe('3')
})

test('parser Hours', () => {
    const result = parserHour('11','PM')
    expect(result).toBe('23')
})

test('parser Hours', () => {
    const result = parserHour('11','AM')
    expect(result).toBe('11')
})


test('parser Day', () => {
    const result = parserDay('15','30')
    expect(result).toBe('오후 03시 30분')
})

test('parser Day', () => {
    const result = parserDay('3','30')
    expect(result).toBe('오전 03시 30분')
})