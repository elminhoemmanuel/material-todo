import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles, createStyles } from '@material-ui/core';
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
    // btn:{
    //     fontSize:60,
    //     backgroundColor: 'violet',
    //     '&:hover':{
    //         backgroundColor: 'blue'
    //     }
    // }
    field:{
        marginTop:20,
        marginBottom:20,
        display:'block',
        
    }
})) 
    



const create = () => {

    const classes = useStyles()
    const router = useRouter()
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('todos')
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        setTitleError(false);
        setDetailsError(false);

        if(title.length === 0){
            setTitleError(true);
        }
        if(details.length === 0){
            setDetailsError(true);
        }

        if(title && details){
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ title, details, category })
            }).then(() => router.push('/'))
        }
    }

    return (
        <Container>
            {/* <Typography 
                variant='h1'
                color='primary'
                align='center'
            >
                Create a new note
            </Typography> */}
            <Typography 
                variant='h6'
                color='textSecondary'
                component='h2'
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                
                onChange={(e) =>{setTitle(e.target.value)}}
                className={classes.field}
                label='Note Title'
                color='secondary'
                variant='outlined' 
                fullWidth
                required
                error={titleError}
                />
                <TextField
                
                onChange={(e) =>{setDetails(e.target.value)}}
                className={classes.field}
                label='Note Details'
                color='secondary'
                variant='outlined' 
                fullWidth
                required
                multiline
                rows={3}
                error={detailsError}
                />

                <FormControl className={classes.field}>
                    <FormLabel>Select a category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value='money' control={<Radio />} label='Money' />
                        <FormControlLabel value='todos' control={<Radio />} label='Todos' />
                        <FormControlLabel value='reminders' control={<Radio />} label='Reminders' />
                        <FormControlLabel value='work' control={<Radio />} label='Work' />
                    </RadioGroup>
                </FormControl>

                <Button
                    type='submit'
                    variant='contained'
                    color='secondary' 
                    disableElevation
                    endIcon ={<SendIcon />}
                >
                    Submit
                </Button>
            </form>

            

            {/* <ButtonGroup color='secondary'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}

            
        </Container>
    )
}

export default create
