import React, {useContext} from 'react';
import clsx from 'clsx';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import HouseIcon from '@material-ui/icons/House';
import MoneyIcon from '@material-ui/icons/Money';
import PeopleIcon from '@material-ui/icons/People';
import NoteIcon from '@material-ui/icons/Note';
import NotesIcon from '@material-ui/icons/Notes';
import ErrorIcon from '@material-ui/icons/Error';
import Routers from '../router/Router';
import AppContext from '../components/AppContext';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    drawerLeft: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerItem: {
        textDecoration: 'none !important',
        color: '#504d4d',
    },
    drawerPaperLeft: {
        width: drawerWidth,
        flexShrink: 0
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function Layout(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const myContext = useContext(AppContext);

    const handleNavLinkClick = (event, val) => {
        myContext.setSelectedTab(val);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        <img alt="" style={{marginTop: 10}} width={100} height={40}
                             src={'https://picsum.photos/seed/picsum/200/300'}/>
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Router>
                <Drawer
                    className={classes.drawerLeft}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaperLeft,
                    }}
                >
                    <Toolbar/>
                    <div className={classes.drawerContainerLeft}>
                        <List component="nav" style={{paddingTop: 0}}>
                            <Link className={classes.drawerItem} to="/">
                                <ListItem className={classes.drawerItem} selected={myContext.selected_tab === ''}
                                          onClick={(event) => handleNavLinkClick(event, '')}>
                                    <ListItemIcon>
                                        <ListIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Personal Details"/>
                                </ListItem>
                            </Link>
                            <Link className={classes.drawerItem} to="/property_details">
                                <ListItem selected={myContext.selected_tab === 'property_details'}
                                          onClick={(event) => handleNavLinkClick(event, 'property_details')}>
                                    <ListItemIcon>
                                        <HouseIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Property Details"/>
                                    {myContext.is_error ? (<ErrorIcon style={{color: 'red'}} / >):null}
                                </ListItem>
                            </Link>
                            <Link className={classes.drawerItem} to="/financial_details">
                                <ListItem selected={myContext.selected_tab === 'financial_details'}
                                          onClick={(event) => handleNavLinkClick(event, 'financial_details')}>
                                    <ListItemIcon>
                                        <MoneyIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Financial Details"/>
                                </ListItem>
                            </Link>
                            <Link className={classes.drawerItem} to="/demographics">
                                <ListItem selected={myContext.selected_tab === 'demographics'}
                                          onClick={(event) => handleNavLinkClick(event, 'demographics')}>
                                    <ListItemIcon>
                                        <PeopleIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Demographics"/>
                                </ListItem>
                            </Link>
                            <Link className={classes.drawerItem} to="/declarations">
                                <ListItem selected={myContext.selected_tab === 'declarations'}
                                          onClick={(event) => handleNavLinkClick(event, 'declarations')}>
                                    <ListItemIcon>
                                        <NoteIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Declarations"/>
                                </ListItem>
                            </Link>
                            <Link className={classes.drawerItem} to="/summary">
                                <ListItem selected={myContext.selected_tab === 'summary'}
                                          onClick={(event) => handleNavLinkClick(event, 'summary')}>
                                    <ListItemIcon>
                                        <NotesIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Summary"/>
                                </ListItem>
                            </Link>
                        </List>
                    </div>
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <Toolbar/>
                    <Routers/>
                </main>
            </Router>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>Right Drawer
                </div>
            </Drawer>
        </div>
    );
}
