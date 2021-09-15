import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox} from './styles'
import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface NewTransactionModalProps{
  isOpen: boolean,
  handleCloseModal:() => void
}

export function NewTransactionModal({isOpen, handleCloseModal}: NewTransactionModalProps){
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  const handleNewTransaction = (event: FormEvent) => {
    event.preventDefault()
    
    const data = {
      title,
      value,
      type,
      category
    }
    api.post('transactions',data)

   
  }

  return(

  <Modal isOpen={isOpen} onRequestClose={handleCloseModal} overlayClassName="react_modal_overlay" className="react_modal_content">
    <button type="button">
      <img src={CloseImg} alt="Fechar modal" onClick={handleCloseModal} className="react-modal-close"/>
    </button>

    <Container onSubmit={handleNewTransaction}>
      <h2>Nova transação</h2>

      <input type="text" placeholder="Título" value={title} onChange={(event) => {setTitle(event?.target.value)}} />

      <input type="text" placeholder="Valor" value={value} onChange={(event) => {setValue(Number(event.target.value))}} />

      <TransactionTypeContainer>

        <RadioBox activeColor="green" isActive={type === "deposit"} onClick={() => {setType('deposit')}} type="button">
          <img src={IncomeImg} alt="Entrada" />
          <span>Entrada</span>
        </RadioBox>

        <RadioBox
          activeColor="red"
          isActive={type === "withdraw"}
         onClick={() => {setType('withdraw')}}
         type="button">
          <img src={OutcomeImg} alt="Saida" />
          <span>Saída</span>
        </RadioBox>

      </TransactionTypeContainer>

      <input type="text" placeholder="Categoria" value={category} onChange={(event) => {setCategory(event.target.value)} } />

      <button type="submit">Cadastrar</button>

    </Container>
   
  </Modal>

  )
}