import Head from 'next/head'
import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {orange} from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'



const useStyles = makeStyles({
  root: {
    background:'linear-gradient(45deg , #333, #999)',
    border:0,
    borderRadius:15,
    color:'white',
    padding: '20px 30px',
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
        main:orange[500],
    }
  }
})

function ButtonStyled (){
  const classes = useStyles();
  return <Button className={classes.root}>Click Me</Button>
}

export default function Home() {

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
      setChecked(event.target.checked);
      console.log(checked)
  };
  return (
    <div>
      <Head>
        <title>Material UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
          <Container className='holder' maxWidth='md'>
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography>
                  Something
                </Typography>
              </Toolbar>
            </AppBar>
            <Grid container spacing={2} >
              <Grid item xs={3} sm={6}>
                <Paper style={{height:50, width:'100%',}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:50, width:'100%',}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:50, width:'100%',}}/>
              </Grid>
            </Grid>

            <Typography variant='h1' component='div'>
              Welcome
            </Typography>

            <div>
              <ButtonStyled />
            </div>

            <TextField
            variant='filled' 
            color='secondary'
            type='email'
            label='email address'
            />

            <div>
              <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  color='primary'
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              } 
              label='Choose'
              />
                
              
            </div>
            <ButtonGroup>
              <Button 
              endIcon={<SaveIcon />}
              size='large'
              // style={{
              //   fontSize:24
              // }}
              variant='contained' 
              color='primary'>
                Save
              </Button>
              <Button 
              endIcon={<DeleteIcon />}
              size='large'
              variant='contained' 
              color='secondary'>
                Discard
              </Button>
            </ButtonGroup>
            <Grid container spacing={2} >
              <Grid item xs={3} sm={6}>
                <Paper style={{height:50, width:'100%',}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:50, width:'100%',}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:50, width:'100%',}}/>
              </Grid>
            </Grid>

            <Typography variant='h1' component='div'>
              Welcome
            </Typography>

            <div>
              <ButtonStyled />
            </div>

            <TextField
            variant='filled' 
            color='secondary'
            type='email'
            label='email address'
            />

            <div>
              <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  color='primary'
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              } 
              label='Choose'
              />
                
              
            </div>
            <ButtonGroup>
              <Button 
              endIcon={<SaveIcon />}
              size='large'
              // style={{
              //   fontSize:24
              // }}
              variant='contained' 
              color='primary'>
                Save
              </Button>
              <Button 
              endIcon={<DeleteIcon />}
              size='large'
              variant='contained' 
              color='secondary'>
                Discard
              </Button>
            </ButtonGroup>
            <Grid container spacing={2} >
              <Grid item xs={3} sm={6}>
                <Paper style={{height:50, width:'100%',}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:50, width:'100%',}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:50, width:'100%',}}/>
              </Grid>
            </Grid>

            <Typography variant='h1' component='div'>
              Welcome
            </Typography>

            <div>
              <ButtonStyled />
            </div>

            <TextField
            variant='filled' 
            color='secondary'
            type='email'
            label='email address'
            />

            <div>
              <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  color='primary'
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              } 
              label='Choose'
              />
                
              
            </div>
            <ButtonGroup>
              <Button 
              endIcon={<SaveIcon />}
              size='large'
              // style={{
              //   fontSize:24
              // }}
              variant='contained' 
              color='primary'>
                Save
              </Button>
              <Button 
              endIcon={<DeleteIcon />}
              size='large'
              variant='contained' 
              color='secondary'>
                Discard
              </Button>
            </ButtonGroup>
          </Container>
      </ThemeProvider>
    </div>
  )
}
