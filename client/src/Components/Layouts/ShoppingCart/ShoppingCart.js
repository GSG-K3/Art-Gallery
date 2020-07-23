import React ,{useEffect,useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import SecondHeader from '../../Common/SecondHeder/SecondHeader';
import useStyles from './style';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import ServerErr from '../../Errors/ServerError'

const ShoppingCart = () => {
    const classes = useStyles()
    const [cartList,setCartList]=useState(null)
    const [clientId,setId]=useState(null)
    const history = useHistory()
    const [errorFound, setError]= useState(null)

    useEffect(
      () => {      
        axios.get('/api/user-id')
          .then(result=> {
            if(!result.data.success){
             history.push('/login')
            }          
            else{ 
              if(!cartList){
              setId(result.data.id)
             return axios.get(`/api/cart/${clientId}`)
              .then(result => {
                  if(result.data.length===0){
                        return 
                  }
                  setCartList(result.data)
              })
              .catch(err => err)
            }
            }
          })
          .catch(err=> setError(true))
        
        },[cartList,clientId,errorFound]
    )
    const priceCounter=()=>{
        let counter =0
        for(let i=0;i< cartList.length;i++){
             counter= counter+cartList[i].price
        } 
        return counter
    }
    const deleteItem = (itemId)=>{

        axios.delete('/api/cart/delete',
       { data: {
            artwork: itemId,
            user : clientId
        }})
        .then(res => history.go('/cart'))
        .catch(err => swal({
          title: 'حدث خطأ في الخادم حاول مره اخرى',
          icon: 'warning',
        }))
        
    }
    return (
      <div className={classes.root}>
      <SecondHeader pageName='السلة' HideIcon={true} />
      { errorFound ?
      <ServerErr /> 
      : cartList ? (
        <div>
          <Typography
            variant='body1'
            align='right'
            className={classes.statment}
          >
            {priceCounter()} المجموع (القطع {cartList.length})
          </Typography>
          <div>
            {cartList.map((item) => {
              return (
                <Card className={classes.rootCard} key={item.id}>
                  <div className={classes.details}>
                    <div className={classes.controls}>
                      <IconButton
                        aria-label='delete'
                        onClick={() => deleteItem(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                    <CardContent className={classes.content}>
                      <Typography component='h6' variant='h6'>
                        {item.title}
                      </Typography>
                      <Typography variant='subtitle1' color='textSecondary'>
                        {item.price}
                      </Typography>
                    </CardContent>
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image={item.photo_url}
                    title={item.title}
                  />
                </Card>
              );
            })}
          </div>
          <div>
            <BottomNavigation className={classes.sendDiv}>
              <Button
                variant='contained'
                color='primary'
                className={classes.sendButton}
              >
                ارسال الطلب
              </Button>
            </BottomNavigation>
          </div>
        </div>
      ) : (
        <div>
          <div className={classes.roundDiv}></div>
          <BottomNavigation className={classes.buttonDiv}>
            <Typography variant='h6' align='center'>
              انشئ متحفك الخاص
            </Typography>
            <Typography variant='body1' align='center'>
              اجمع قطعك الفنيه المفضله لتشتريها لاحقا
            </Typography>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              href='/'
            >
              تصفح الاعمال الفنية
            </Button>
          </BottomNavigation>
        </div>
      )}
    </div>
    )
}

export default ShoppingCart
