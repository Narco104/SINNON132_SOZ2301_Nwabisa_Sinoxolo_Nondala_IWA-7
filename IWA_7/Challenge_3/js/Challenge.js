const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat( (leoBalance * -1) + (sarahBalance * -1)).toFixed(2)
const leo = `${leoName} ${leoSurname} Owed R  ${leoBalance * -1}`
const sarah = `${sarahName}  ${sarahSurname}  Owed R  ${sarahBalance* -1}`
const total = "Total amount owed: R"
const result = `${leo}\n ${sarah}\n\n  ${divider}\n  ${total}  ${owed} \n ${divider}`

console.log(result)