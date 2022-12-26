import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
function DrawerComponent({isOpen, setIsOpen}) {

    return (
        <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Home'/>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton href="./#/req">
                        <ListItemIcon>
                            <FavoriteIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Início Namoro'/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}

export {DrawerComponent}