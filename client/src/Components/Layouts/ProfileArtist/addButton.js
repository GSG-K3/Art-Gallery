import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';

function AddButton() {
    const classes = useStyles();
    return (
    <div>
      
      <Button
        variant="contained"
        className={classes.addButton}
        startIcon={<AddIcon />}
      >
        Add new artwork
      </Button>
    </div>
  );
}

export default AddButton;
