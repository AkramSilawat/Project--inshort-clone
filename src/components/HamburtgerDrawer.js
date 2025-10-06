import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import clsx from "clsx";
import { makeStyles } from '@mui/styles';
import categories from "../data/Category"

const useStyles = makeStyles({
    list: {
        width: 200,
        paddingLeft: 10,
        paddingRight: 5,
    },
    fullList: {
        width: "auto",
    },
});


export default function HamburtgerDrawer({ setCategory }) {
    const classes = useStyles()
    const [state, setState] = React.useState({

        left: false,
    });

    const theme = createTheme({
        palette: { mode: "dark" },
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "Button",
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem >Categories</ListItem>
            </List>
            <Divider />
            <List>
                {categories.map((text, index) => (
                    <ListItem
                        style={{ height: 40, borderRadius: 3 }}
                        
                        key={text}
                        onClick={() => setCategory(text)}
                    >
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <Button onClick={toggleDrawer("left", true)}>
                    <MenuIcon />
                </Button>
                <ThemeProvider theme={theme}>
                    <SwipeableDrawer
                        anchor={"left"}
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                        onOpen={toggleDrawer("left", true)}
                    >
                        {list("left")}
                    </SwipeableDrawer>
                </ThemeProvider>
            </React.Fragment>
        </div>

    );
}