//Imports
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
// Actions
import {makeHeartPrediction, getHeartPosts} from '../../actions/heartposts';

// Material UI
import {Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
// Select
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//Form
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
//SnackBar
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// Circular Label
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
// Modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';  
// Container
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// Card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// Icon
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { green } from '@material-ui/core/colors';



// Style for the card in the modal.
const useStyles8 = makeStyles({
  root: {
    minWidth: 450,
    minHeight: 200
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// For updating the progress value.
function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

// Circular update progress.
CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

// Style 2
const useStyles2 = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

// HeartForm - Consists of the form for user entry.
const HeartForm = ({currentId, setCurrentId, pageNumber}) =>{
  // States and functions for updating values.
  const classes8 = useStyles8();
  const [open2, setOpen2] = React.useState(false);
  const [progress, setProgress] = React.useState(10);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  // Getting the posts.
  const posts = useSelector((state) => state.heartprediction); 
  const classes2 = useStyles2();
  const [open, setOpen] = React.useState(false);
  // modal
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState('progress');
  const timerRef = React.useRef();
  // For calling the alert.
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return; 
    }
    setOpen(false);
  };

  const [postData, setPostData] = useState({age: '', sex: '', restingBloodPressure: '', cholestrol: '', restingBloodSugar: '', ecg: '', maxheart: '', angina: ''});
  const post = useSelector((state) => currentId ? state.heartposts.find((p) => p._id == currentId) : null);
  const classes = useStyles(); // For customizing material UI
  const dispatch = useDispatch();
    
    // Once the rendering is complete, change the values in post data.
    useEffect(() => {  
        clearTimeout(timerRef.current);
        if(post) setPostData(post);
    }, [post, currentId]);
    const handleClickLoading = () => {
      setLoading((prevLoading) => !prevLoading);
    };
    const handleClickQuery = () => {
      clearTimeout(timerRef.current);
      setQuery('Sending your data');
      timerRef.current = window.setTimeout(() => {
        setQuery('Scaling the data');
      }, 1500);
      timerRef.current = window.setTimeout(() => {
        setQuery('Regularizing the inputs');
      }, 3000);
      timerRef.current = window.setTimeout(() => {
        setQuery('Fitting the optimum model');
      }, 4500);
      timerRef.current = window.setTimeout(() => {
        setQuery('Reducing Overfitting');
      }, 6000);
      timerRef.current = window.setTimeout(() => {
        setQuery('Finalizing the Output');
      }, 7500);
      timerRef.current = window.setTimeout(() => {
        setQuery('Prediction Complete');
      }, 9000);
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 1500);
      return () => {
        clearInterval(timer);
      };
    };

    // For clearing the user inputs.
    const clear = () => {
        setCurrentId(0);
        setPostData({age: '', sex: '', restingBloodPressure: '', cholestrol: '', restingBloodSugar: '', ecg: '', maxheart: '', angina: ''});
    }
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
    
  
    // The user is set to the value in the local storage, if it exists.
    const user = JSON.parse(localStorage.getItem('profile'));
    
    // Execute this after submit button is clicked.
    // Creating and Updating the post.
    const handleSubmit = async (e) => {
        e.preventDefault(); // To prevent removal of the values in the form.
        setOpen2(true);
        handleClickQuery();
        sleep(10000).then(r => {
          dispatch(makeHeartPrediction({...postData, name: user?.result?.name}));
          setOpen2(false);
          dispatch(getHeartPosts(pageNumber))
          dispatch(getHeartPosts(pageNumber))
          setOpen(true);
        })    
        clear();  
    }

    // If the users hasn't signed in, No need to display the form.
    if(!user?.result?.name) {
        return (
            <Paper className = {classes.paper}>
                <Typography variant = "h6" align = "center">
                    Please Sign In For Predictions.
                </Typography>
            </Paper>
        )
    }

    // Else
    return(
      


     
      <div>
      <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
       
        <Fade in={open2}>
          <div className={classes.paper}>
          <div className={classes.root}>
      
          <React.Fragment>
      <CssBaseline />
      <Container  maxWidth="false">
      <Card className={classes8.root} variant="outlined">
      <CardContent>
        <Typography className={classes8.title} color="textSecondary" gutterBottom>
         

        <Typography align = "center" component="div" style={{ backgroundColor: '', height: '14vh' }}>
        <div className={classes.placeholder}>
        {query === 'Prediction Complete' ? (
          <div>
           <CheckCircleOutlineRoundedIcon style={{ color: green[500], fontSize: 150}}  />
          <Typography variant="h5" component="h5">{query}</Typography>
          </div>
        ) : (
          <div>
          <Fade
            in={query !== 'Prediction Complete'}
            style={{
              transitionDelay: query === 'progress' ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <div>
            <CircularProgressWithLabel size = '10rem' value={progress} />
            </div>
            
          </Fade>
          {query !== 'Prediction Complete' ? (<Fade
          in={query !== 'Prediction Complete'}
          style={{
            transitionDelay: query !== 'Prediction Complete' ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <Typography variant = "subtitle1">{query}</Typography>
        </Fade>) : null }
        </div>
        )}
      </div>
          </Typography>






        </Typography>
        
      </CardContent>
      
    </Card>
        
        
        
      </Container>
    </React.Fragment>


     
      
    </div>
          </div>
        </Fade>
      </Modal>
    </div>
        
      <div>
        {posts.map(post => <div>{post? 
         <div className={classes2.root}>
           <Snackbar open={open} autoHideDuration={2200} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Your prediction has been made and posted.
        </Alert>
      </Snackbar>
         
       </div>:
       ""  }
       </div>)}
       </div>
        <Paper className = {classes.paper}>
            <form autoComplete = "off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit = {handleSubmit}>
                <Typography variant = "h6"> { currentId ? 'Editing' : 'Creating'} a Prediction </Typography>

        
      <FormControl className={`${classes.root} ${classes.formControl}`} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Age</InputLabel>
          <OutlinedInput
            id="outlined-size-small"
            value={postData.age}
            onChange={(e) => setPostData({ ... postData, age: e.target.value})}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            labelWidth={30}
            size= "small"
            type = "number"
            
          />
      
        </FormControl>
        <FormControl className={`${classes.root} ${classes.formControl}`} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Resting Blood Pressure</InputLabel>
          <OutlinedInput
            id="outlined-size-small"
            value={postData.restingBloodPressure}
            onChange={(e) => setPostData({ ... postData, restingBloodPressure: e.target.value})}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            labelWidth={170}
            size= "small"
            type = "Number"
          />
        </FormControl>
        <FormControl className={`${classes.root} ${classes.formControl}`} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Cholestrol</InputLabel>
          <OutlinedInput
            id="outlined-size-small"
            value={postData.cholestrol}
            onChange={(e) => setPostData({ ... postData, cholestrol: e.target.value})}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            labelWidth={80}
            size= "small"
            type = "Number"
            
          />
        </FormControl>
        <FormControl className={`${classes.root} ${classes.formControl}`} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Max Heart Rate</InputLabel>
          <OutlinedInput
            id="outlined-size-small"
            value={postData.maxheart}
            onChange={(e) => setPostData({ ... postData, maxheart: e.target.value})}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            labelWidth={120}
            size= "small"
            type = "Number"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Blood Sugar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={postData.restingBloodSugar}
          onChange = {(e) => setPostData({ ... postData, restingBloodSugar: e.target.value})}
          size = "normal"
        >
          <MenuItem value="0">Controlled</MenuItem>
          <MenuItem value="1">Uncontrolled</MenuItem>
          </Select>
      </FormControl>      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">ECG</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={postData.ecg}
          onChange = {(e) => setPostData({ ... postData, ecg: e.target.value})}
          size = "normal"
        >
          <MenuItem value="1">Normal</MenuItem>
          <MenuItem value="0">Irregular</MenuItem>
          </Select>
      </FormControl>      
                <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={postData.sex}
          onChange = {(e) => setPostData({ ... postData, sex: e.target.value})}
          size = "normal"
        >
          <MenuItem value="1">Male</MenuItem>
          <MenuItem value="0">Female</MenuItem>
          </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Angina</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={postData.angina}
          onChange = {(e) => setPostData({ ... postData, angina: e.target.value})}
          size = "normal"
        >
          <MenuItem value="1">Yes</MenuItem>
          <MenuItem value="0">No</MenuItem>
          </Select>
      </FormControl>
      
                <Button className = {classes.buttonSubmit} variant = "contained" color = "primary" size = "large" type = "submit" fullWidth>
                    Predict
                </Button>
                <Button variant = "contained" color = "secondary" size = "medium" onClick = {clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
        </div>
    );
}

export default HeartForm;
