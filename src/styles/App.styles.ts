import { styled } from "@stitches/react";

export const Main = styled('div', {
  backgroundColor: '#1C3144',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',

  'h1': {
    color: '#1C3144',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '700',
  }
});

export const ContainerCardHero = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '40px',
})

export const CardHero = styled('div', {
  backgroundColor: '#A2AEBB',
  width: '200px',
  height: '300px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '20px 0 0 0',

  span: {
    fontFamily: 'Roboto',
    color: '#1C3144',
    marginBottom: '20px',
  },

  img: {
    width: '100%',
    height: '100%',
  }
})