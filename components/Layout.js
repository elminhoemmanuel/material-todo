import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import {useRouter} from 'next/router'
import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { format } from 'date-fns'


const drawerWidth= 240

const useStyles = makeStyles((theme) =>{
    return {
        page:{
            background:'f9f9f9',
            width: '100%',
            padding:theme.spacing(3)
        },
        drawer:{
            width:drawerWidth
        },
        drawerPaper:{
            width:drawerWidth
        },
        root:{
            display: 'flex'
        },
        active:{
            background:'f4f4f4'
        },
        title:{
            padding:theme.spacing(2)
        },
        appbar:{
            width:`calc(100%-${drawerWidth}px)`,
            paddingLeft:'20%',
        },
        toolbar:theme.mixins.toolbar,
        date:{
            flexGrow:1
        },
        avatar:{
            marginLeft:theme.spacing(2)
        }
    }
    
})

const Layout = ({children}) => {

    const router = useRouter();

    // const location = useLocation()

    const classes = useStyles();

    const menuItems = [
        {
            text:'My Notes',
            icon:<SubjectOutlined color='secondary' />,
            path:'/'
        },
        {
            text:'Create Note',
            icon:<AddCircleOutlined color='secondary' />,
            path:'/create'
        }
    ]

    return (
        <div className={classes.root}>

            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar src='/mario-av.png' className={classes.avatar}/>
                </Toolbar>
            </AppBar>

            <Drawer
            className={classes.drawer} 
            variant='permanent'
            anchor='left'
            classes={{paper:classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>

                <List>
                    {menuItems.map(item=>(
                        <ListItem
                        // className={location.pathname=== item.path ? classes.active : null}
                         key={item.text} button onClick={()=>router.push(item.path)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout
