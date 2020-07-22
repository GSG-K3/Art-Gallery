import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import useStyles from './style';

function AddButton() {
    const classes = useStyles();
    return (
    <div>
      <Tooltip title="Add" aria-label="add">
        <Fab color="primary" className={classes.fab}>
        
          <AddIcon className={classes.addIcon} />
            ADD NEW ARTWORK
        </Fab>
      </Tooltip>
    </div>
  );
}

export default AddButton;
