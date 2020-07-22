import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import useStyles from './style';
import { Link } from 'react-router-dom';

function AddButton({pathId}) {
  const classes = useStyles();
  return (
    <div>
      <Tooltip title='Add' aria-label='add'>
        <Fab color='primary' className={classes.fab}>
          <Link to= {`/addart/${pathId}`} className = {classes.addArtBtn}>
            <AddIcon className={classes.addIcon} />
            إضافة قطعة فنية جديدة
          </Link>
        </Fab>
      </Tooltip>
    </div>
  );
}

export default AddButton;
