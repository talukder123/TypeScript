interface Deposit {
    type: "deposit",
    amount: 2000
}

interface Withdrawal {
    type: "withdraw",
    amount: 1500
}

function processTransaction(balance: number, transaction: Deposit | Withdrawal): number | string {
    if (transaction.type == "deposit") {
        balance += transaction.amount
        return balance
    }

    if (transaction.type == "withdraw") {
        if (balance > transaction.amount) {
            balance = balance - transaction.amount
            return balance
        }
    }

    return `Insufficiant Balance, You only have ${balance}.`


}


console.log(
processTransaction(5000, { type: "deposit", amount: 2000 })
)

console.log(
processTransaction(1000, { type: "withdraw", amount: 1500 })
)
