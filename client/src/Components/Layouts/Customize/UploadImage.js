import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid } from '@material-ui/core';
import useStyles from './style';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SecondHeader from '../../Common/SecondHeder/SecondHeader';
import { useHistory } from 'react-router-dom';

export default function UpladImage() {
  const [image, setImage] = useState({ preview: '', raw: '' });
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <Grid container direction='column'>
      <SecondHeader pageName='ملائمة القطعة الفنية' HideIcon='true' />
      <div className={classes.formdiv}>
        <Typography className={classes.text} variant='h4' gutterBottom>
          قم بتحميل صورة <br /> لغرفتك
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          ابحث عن سطح مستوٍ مع إضاءة جيدة
        </Typography>
        <label htmlFor='upload-button'>
          {image.preview ? (
            history.push({
              pathname: '/customize',
              state: image,
            })
          ) : (
            <>
              <Button
                className={classes.input}
                variant='contained'
                color='primary'
                component='span'
                endIcon={<PhotoLibraryIcon style={{ fontSize: 50 }} />}
              >
                <div>
                  <Typography variant='p' gutterBottom>
                    تحميل من
                  </Typography>

                  <Typography variant='h6' gutterBottom>
                    المعرض
                  </Typography>
                </div>
              </Button>
            </>
          )}
        </label>
        <input
          type='file'
          id='upload-button'
          style={{ display: 'none' }}
          onChange={handleChange}
        />
      </div>
    </Grid>
  );
}
