const dollarCurrency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

const arabicCurrency = Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: 'EGP',
})

const arabicDate = () => moment.locale('ar')

export const foramtToArabicEgp = (amount) =>
    arabicCurrency.format(parseFloat(amount) / 100)

export const formatToDollar = (amount) =>
    dollarCurrency.format(parseFloat(amount) / 100)
