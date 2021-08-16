import { styled } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import theme from '../../theme'

export const MainDiv = styled('div')({
   height: '100vh',
   backgroundColor: '#2d4c7b',
   padding: '40px 0px',
   '& h1': {
      margin: 0,
      color: 'white',
      fontWeight: 400,
      textAlign: 'center'
   }
});

export const TopCard = styled('div')({
   backgroundColor: '#2d4c7b',
   [theme.breakpoints.down('md')]: {
      padding: '50px 30px',
   },
   [theme.breakpoints.up('md')]: {
      padding: '50px 50px',
   },
   [theme.breakpoints.up('lg')]: {
      padding: '50px 80px',
   },
});

export const Item = styled(Paper)({
   padding: '15px 15px',
   '& h3': {
      borderBottom: '1px solid black',
      margin: 0,
      paddingBottom: '8px',
      textAlign: 'center',
      color: '#34314c'
   },
   '& ul': {
      listStyle: 'none',
      margin: '0px',
      padding: '5px 0px 0px 0px',
      '& li': {
         padding: '5px 10px'
      },
   }
});