import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Button, Modal} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Todo.css';
import React from 'react'
import db from './firebase';

function Todo(props) {
    return (
        
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline:⏰" />
            </ListItem>
            <DeleteForeverIcon onClick={event =>db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        
    )
}

export default Todo
