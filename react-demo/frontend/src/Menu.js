import * as React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Menu() {
  return (
    <Paper sx={{ bgcolor: 'primary.light' }}>
      <nav aria-label="secondary mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="fruits">
              <ListItemText primary="Fruits" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="vegetables">
              <ListItemText primary="Vegetables" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="add-product">
              <ListItemText primary="Add product" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Paper>
  );
}
