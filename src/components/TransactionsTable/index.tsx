import React, { useContext } from 'react'
import { TransactionContext } from '../../TransactionContext'
import { Container } from './styles'



export const TransactionsTable = () => {
  const transactions = useContext(TransactionContext)
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(transaction.amout)}</td>
            <td>{transaction.category}</td>
            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createAt))}</td>
          </tr>
          ))}
        
        </tbody>
      </table>
    </Container>
  )
}


