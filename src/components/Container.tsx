import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  width: 100%;
  padding: 32px 16px;

  background-image: url('/images/group-pancake.svg');
  background-repeat: no-repeat;
  background-position: bottom 24px center;
  background-size: 90%;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/arch-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.svg'),
      url('/images/left.png'), url('/images/right-dark.png');
    background-repeat: no-repeat;
    background-position: center 420px, 10% ${({ theme }) => (theme.isDark ? '30%' : '50%')}, 90% ${({ theme }) => (theme.isDark ? '250px' : '50%')};
    background-size: contain, 266px, 266px;
    min-height: 100vh;
  }
`

export default Container
