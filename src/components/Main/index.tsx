import * as S from './styles'
const Main = ({
  title = 'Boilerplate para projetos NextJS',
  description = 'Um boilerplate para ser utilizados em projetos com NextJS'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image de um átomo escrito react avançado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    <S.Hero
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para um computador"
    />
  </S.Wrapper>
)

export default Main
