import React from 'react'
import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { Container } from './styles'

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIcon} alt="Icone de entrada" />
        </header>
          <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeIcon} alt="Icone de saída" />
        </header>
          <strong>- R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Icone de total" />
        </header>
          <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}


