export default (expenses) =>
    expenses.reduce((prev, curr) => prev + curr.amount, 0)
