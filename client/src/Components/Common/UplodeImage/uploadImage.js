import React ,{Fragment , useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios'


const UploadImage = () =>{
  const [image , addImage] = useState('')
  const [imageName , addImageName] = useState('choose file')
  const [uploadedImage , setUploadedImage] = useState('')

  const handaleImage =async (e) =>{
    addImage(e.target.files[0])
    addImageName(e.target.files[0].name)
    console.log(e.target.files[0])
    //for backend it's a js thing it construct a set of key and value representing form fields and their values
    const formData = new FormData();
    formData.append('Image' , e.target.files[0])
       try {
      const res = await axios.post('/api/uploadFile',formData , {
        headers: {
          'content-Type' : 'multipart/form-data'
        }
      });

      const {fileName , filePath} = res.data;

      setUploadedImage (fileName)
      console.log(filePath,fileName)
    }catch(err){
      if(err.response.status === 500){
        console.log('there was a problem with the server')
      }else{
        console.log(err.response.data.msg)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <Fragment>
    <form onSubmit = {handleSubmit}>
      <AddIcon color = 'primary' style={{ fontSize: 100 }} > add picture</AddIcon>
      <h2 > add picture </h2>
      <input type="file" id="img" name="img" accept="image/*" onChange = {handaleImage}/>
      <lable>{imageName}</lable>
      <input type = "submit"/>
      </form>
      <img src = {`/upload/${uploadedImage}`}/>

    </Fragment>
  )
}

export default UploadImage