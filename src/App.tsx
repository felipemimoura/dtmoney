

import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/Index';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyles } from './styles/global';
import { TransactionProvider } from './TransactionContext';

Modal.setAppElement('#root');


export function App() {
  const [isOpenNewTransactonModal, setIsNewTransactioconModal] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactioconModal(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactioconModal(false)
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransacitonModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isOpenNewTransactonModal} handleCloseModal={handleCloseNewTransactionModal} />
      <GlobalStyles />
    </TransactionProvider>
  );
}

export default App
