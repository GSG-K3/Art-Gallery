import React, { Fragment, useState } from 'react';
import { TextField, Button, Checkbox } from '@material-ui/core';
import axios from 'axios';
import { Switch } from '@material-ui/core';
import UploadedImage from '../../Common/UplodeImage/uploadImage';
import useStyle from './addArtStyle';
import { InputLabel } from '@material-ui/core';
import { OutlinedInput } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const AddArt = () => {
  const classes = useStyle();
  const [imageUrl, setImageUrl] = useState(null);
  const [artName, setArtName] = useState('');
  const [description, setDesciption] = useState('');
  const [customization, setCustomization] = useState('sell');
  const [catigory, setCatigory] = useState('');
  const [formData, setFormData] = useState({});
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState('');
  const [sold, setSold] = useState('false');

  const getUrl = (url) => {
    console.log(url, 'url from addArt');
    setImageUrl(url);
  };

  const handleNameChange = (e) => {
    const InputName = e.target.value;
    setArtName(InputName);
  };

  const handleDescription = (e) => {
    const InputDescripiton = e.target.value;
    setDesciption(InputDescripiton);
  };

  const handleCustomization = (e) => {
    setCustomization('customize');
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value)
  }

  const handleClick = (e) => {
    alert('preventDefault');
    e.preventDefault();
    const data = {
      photo: imageUrl,
      name: artName,
      description: description,
      type: customization,
      category: catigory,
      price: price,
      size : size ,
      sold : sold,
      user_id : 1
    };

    setFormData(data);

    axios
      .post('/api/add-art', data)
      .then((res) => {
        console.log(res);
      })

      .catch((err) => console.log(err));
  };

  console.log(formData);

  return (
    <div className={classes.root}>
      <UploadedImage getImageUrl={getUrl} />
      <form className={classes.inputsContaner}>
        <TextField
          onChange={handleNameChange}
          className={classes.singleInput}
          id='outlined-helperText'
          label='art name'
          variant='outlined'
        />
        <TextField
          onChange={handleDescription}
          className={classes.singleInput}
          id='outlined-helperText'
          label='description'
          variant='outlined'
        />
        <Autocomplete
          onChange={(event, newValue) => {
            setCatigory(newValue);
          }}
          multiple
          id='checkboxes-tags-demo'
          options={catigories}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              className={classes.singleInput}
              {...params}
              variant='outlined'
              label='catigories'
              placeholder='choose your art catigories'
            />
          )}
        />

        <FormControl>
          <InputLabel htmlFor='outlined-adornment-amount'>price</InputLabel>
          <OutlinedInput
            className={classes.singleInput}
            id='outlined-adornment-amount'
            onChange={handlePriceChange}
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='outlined-adornment-amount'>size</InputLabel>
          <OutlinedInput
            className={classes.singleInput}
            id='outlined-adornment-amount'
            onChange={handleSizeChange}
            startAdornment={
              <InputAdornment position='start'>cm</InputAdornment>
            }
            labelWidth={60}
          />
        </FormControl>
        <h1>customisation</h1>
        <p>will the user be able to request modifications to your artwork?</p>
        <Switch
          checked={customization.check}
          onChange={handleCustomization}
          name='customization'
          color='primary'
        />

        <Button onClick={handleClick} type='submit' color='primary'>
          Next
        </Button>
      </form>
    </div>
  );
};

const catigories = [
  { title: 'painting' },
  { title: 'drawing' },
  { title: 'scaulpture' },
  { title: 'printmaking' },
  { title: 'photography' },
  { title: 'decorative arts' },
  { title: 'classic' },
];

export default AddArt;
