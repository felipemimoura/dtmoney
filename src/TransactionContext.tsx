import  {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api'

interface Transaction {
  id: number;
  title: string;
  amout: number;
  type: string;
  category: string;
  createAt: string
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext<Transaction[]>([])

export const TransactionProvider = ({children}: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  useEffect(()=>{
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  },[])
  return(
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )
}