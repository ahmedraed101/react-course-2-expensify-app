import moment from 'moment'
export default [
    {
        id: 1,
        description: 'Gum',
        note: '',
        amount: 3000,
        createdAt: 0,
    },
    {
        id: 2,
        description: 'Rent',
        note: '',
        amount: 43000,
        createdAt: moment(0).subtract(4, 'day').valueOf(),
    },
    {
        id: 3,
        description: 'Debit Card',
        note: '',
        amount: 94000,
        createdAt: moment(0).add(4, 'day').valueOf(),
    },
]
