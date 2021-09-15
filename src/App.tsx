

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/Index';
import { GlobalStyles } from './styles/global'
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

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
    <>
      <Header onOpenNewTransacitonModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isOpenNewTransactonModal} handleCloseModal={handleCloseNewTransactionModal} />
      <GlobalStyles />
    </>
  );
}

export default App
