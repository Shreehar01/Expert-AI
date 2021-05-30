import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {getHeartPosts, deleteHeartPost} from '../../../actions/heartposts';
import {Grid, CircularProgress} from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'purple',
  },
}));



const HeartPost = ({post, setCurrentId, pageNumber}) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
   
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} >
          {post.name[0]}{post.name.split(" ")[1][0]}
          </Avatar> 
        }
        
        action={
          <IconButton aria-label="settings">
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <div  className = {classes.overlay2}>
                <Button style = {{color : 'black'}}  size = "small" onClick = {()=> setCurrentId(post._id)}>
                    <MoreHorizIcon  fontSize = "default" />
                   
                </Button>
            </div>
            )}
          </IconButton>
        }
        title ={post.prediction}
        subheader= {moment(post.createdAt).fromNow()}
      >
        <div>
        
            </div>
        </CardHeader>
      <CardMedia
        className={classes.media}
        image={post.prediction === "Low Chance"? "https://iconichealthclubs.ie/icon/wp-content/uploads/2018/03/healthy-heart.png": (
        post.prediction === "Moderate Chance" ? "https://images.squarespace-cdn.com/content/v1/568ae01e9cadb64290f5f367/1467256069084-TOZ3PPBW6RD7NV2MRBOP/ke17ZwdGBToddI8pDm48kIO98Unw3smF9i2vwkBD4WZ7gQa3H78H3Y0txjaiv_0fA_azzaaRoizB4zTDpO0WYxWlfjrKre2ccubEWtUoGLLamHSsWMk6U1_Vilubzn2rrCLSIWAQvdC7iWmC9HNtRaN_-Z3B7EvygvPOPmeOryXq5K1bPXd-y00dehwwCdZ8LB-k1kRGrJXtTzHRl-8nRA/image-asset.jpeg" :
        "https://www.newmuslim.net/wp-content/uploads/2016/06/Ramadan-Exclusive-The-Diseased-Heart.jpg"
        )}
        title={post.prediction}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          Age: {post.age}
          
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Gender: {post.sex === "1" ? "Male" : "Female" }
          
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Resting Blood Pressure: {post.restingBloodPressure} mmHg
          
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Cholestrol: {post.cholestrol} mg/dl
          
        </Typography>
        
        <Typography variant="body2" color="textPrimary" component="p">
          Max Heart Rate: {post.maxheart} b/m
          
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Fasting Blood Sugar: {post.restingBloodSugar === "0" ? "Controlled" : "Uncontrolled"} 
          
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Electrocardiogram: {post.ecg === "1" ? "Normal" : "Irregular"} 
          
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Angina: {post.angina === "1" ? "Present" : "Absent"} 
          
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Possibility: {post.probability} 
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
       
       <div>
       
      
         <Grid
         item
      container
      direction="row"
      justify="flex-end"
    >
      
        <Button size="small" color="secondary" onClick={() => {
         
          dispatch(deleteHeartPost(post._id))
          dispatch(getHeartPosts(pageNumber))
          dispatch(getHeartPosts(pageNumber))}}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        </Grid>
        </div>
        )}
        
      </CardActions>
      
    </Card>
  );
};

export default HeartPost;

/*
 <CardMedia className = {classes.media} image = {post.selectedFile} title = {post.prediction} />
            <div className = {classes.overlay}> 
                <Typography variant = "h6"> {post.name} </Typography>
                <Typography variant = "body2"> {moment(post.createdAt).fromNow()} </Typography>
            </div>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <div className = {classes.overlay2}>
                <Button style = {{color : 'white'}} size = "small" onClick = {()=> setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize = "default" />
                </Button>
            </div>
            )}
            <div className = {classes.details}>
                <Typography variant = "body2" color = "textSecondary"> {post.tags.map((tag) => `#${tag} `)} </Typography>
            </div>
            <Typography className = {classes.title} variant = "h5" gutterBottom> {post.title} </Typography>
            <CardContent>
                <Typography variant = "body2" color = "textSecondary" component = "P"> {post.message} </Typography>
            </CardContent>
            <CardActions className = {classes.cardActions}>
            
        
      </CardActions>
   */
  