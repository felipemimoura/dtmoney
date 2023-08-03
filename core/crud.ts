import fs from 'fs'
const DB_FILE = './core/db'

interface Transaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  createdAt: Date
}
function create(
  transaction: Omit<Transaction, 'id' | 'createdAt'>
): Transaction {
  const newTransaction: Transaction = {
    id: '1',
    createdAt: new Date(),
    description: transaction.description,
    price: transaction.price,
    type: transaction.type
  }

  const transactions = [...read(), newTransaction]
  fs.writeFileSync(
    DB_FILE,
    JSON.stringify(
      {
        transactions
      },
      null,
      2
    )
  )
  return newTransaction
}

// [SIMULATION]
function read(): Array<Transaction> {
  const db = fs.readFileSync(DB_FILE, 'utf-8')
  const ALL_TRANSACTION = JSON.parse(db || '{}')

  if (!ALL_TRANSACTION.transactions) {
    return []
  }
  return ALL_TRANSACTION.transactions
}
create({
  description: 'teste',
  price: 1440,
  type: 'income'
})

console.log(read())
