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
  const [catigory, setCatigory] = useState([]);
  const [formData, setFormData] = useState({});
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState('');
  const [sold, setSold] = useState('false');

  const getUrl = (url) => {
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

  return (
    <div className={classes.root}>
      <UploadedImage getImageUrl={getUrl} />
      <form className={classes.inputsContaner}>
        <TextField
          onChange={handleNameChange}
          className={classes.singleInput}
          id='outlined-helperText'
          label='إسم القطعة الفنية'
          variant='outlined'
        />
        <TextField
          onChange={handleDescription}
          className={classes.descriptionInput}
          id='outlined-helperText'
          label='الوصف'
          variant='outlined'
        />
        <Autocomplete
          onChange={(event, newValue) => {
            const Nvalue = JSON.stringify(newValue)
            setCatigory(Nvalue);
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
              label='الفئات'
              placeholder='choose your art catigories'
            />
          )}
        />

        <FormControl>
          <InputLabel className = {classes.inputText} htmlFor='outlined-adornment-amount'>السعر</InputLabel>
          <OutlinedInput
            className={classes.lastInput}
            id='outlined-adornment-amount'
            onChange={handlePriceChange}
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <FormControl>
          <InputLabel  className = {classes.inputText} htmlFor='outlined-adornment-amount'>الحجم</InputLabel>
          <OutlinedInput
            className={classes.lastInput}
            id='outlined-adornment-amount'
            onChange={handleSizeChange}
            startAdornment={
              <InputAdornment position='start'>cm</InputAdornment>
            }
            labelWidth={60}
          />
        </FormControl>
        <div className = {classes.customiseDiv} >
        <h1 align='right'>قابل للتعديل </h1>
        <Switch
          className = {classes.switch}
          checked={customization.check}
          onChange={handleCustomization}
          name='customization'
          color='primary'
        />
        </div>
        <p  className = {classes.customiseText} align='right'>هل يستطيع الزبائن طلب تعديل على هذه القطعة الفنية ؟</p>

        <Button onClick={handleClick} type='submit' color='primary'>
         إضافة
        </Button>
      </form>
    </div>
  );
};

const catigories = [
  { title: 'لوحات' },
  { title: 'لوحات زيتية' },
  { title: 'فوسيفساء' },
  { title: 'حرف يدوية' },
  { title: 'صور فوتوغرافية' },
  { title: 'تطريز' },
  { title: 'حرف' },
  { title: 'لوحة ثلاثية الأبعاد' },
  { title: 'الفن الكلاسيكي' },
  { title: 'الفن الرقمي' },
  { title: ' الفن التاريخي' },
  { title: 'ملون' },
  { title: 'لوحة رصاصية' },
  { title: 'أبيض وأسود' },

  
];

export default AddArt;
