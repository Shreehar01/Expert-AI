import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

// Link
import {Link} from 'react-router-dom';

// Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Grid
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Animation
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 170,
  },
  
});

const useStyles2 = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Home = () => {
    const classes = useStyles();
    const classes2 = useStyles2();
    const props = useSpring({ to: { opacity: 1}, from: { opacity: 0}, config: {duration: 800} })
    return (
        <div>
      <animated.div style={props}>
         
      <div className={classes2.root} >
      <Grid container spacing={3}>
         
         <Grid item xs>
        <Card className={classes.root} >
      <CardActionArea component = {Link} to = "/heart-attack">
        <CardMedia
          className={classes.media}
          image="https://cdn.mos.cms.futurecdn.net/4mUypqB3KbWNXoELZeVj2h-480-80.jpg"
          title="Heart Risk Prediction"
          component = {Link} to = "/heart-attack"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            Heart Risk Prediction
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Predict the risk of having heart attack based on your physical conditions.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component = {Link} to = "/heart-attack">
          Let's Try
        </Button>
        
      </CardActions>
    </Card>
        </Grid>

        

        <Grid item xs>
        <Card className={classes.root}>
      <CardActionArea component = {Link} to = "/stroke">
        <CardMedia
          className={classes.media}
          image="https://images.medicinenet.com/images/article/main_image/stroke-symptoms-and-treatment.jpg"
          title="Stroke Prediction"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Stroke Prediction
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Predict the risk of having a stroke based on your physical conditions.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" component = {Link} to = "/stroke">
          Let's Try
        </Button>
        
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.root}>
      <CardActionArea component = {Link} to = "/diabetes">
        <CardMedia
          className={classes.media}
          image="https://news.yale.edu/sites/default/files/styles/featured_media/public/adobestock_276205639.jpeg?itok=PjcxEgaC&c=07307e7d6a991172b9f808eb83b18804"
          title="Diabetes Prediction"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Diabetes Prediction
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Predict the risk of having a diabetes based on your physical conditions.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component = {Link} to = "/diabetes">
          Let's Try
        </Button>
        
      </CardActions>
    </Card>
        </Grid>
      </Grid>
     
      <Grid container spacing={3}>
        <Grid item xs>
        <Card className={classes.root}>
      <CardActionArea component = {Link} to = "/credit">
        <CardMedia
          className={classes.media}
          image="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2019/07/credit-cards-4-steps-1920x1152.jpg"
          title="Credit Default Prediction"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Credit Default Prediction
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Predict the chances of defaulting a credit based on your socio-economic condition.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component = {Link} to = "/credit">
          Let's Try
        </Button>
        
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.root}>
      <CardActionArea component = {Link} to = "/loan">
        <CardMedia
          className={classes.media}
          image="https://ottotrading.live/wp-content/uploads/2020/10/Visa-bets-on-smartphones-as-credit-card-acceptance-devices.jpeg"
          title="Credit Card Prediction"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Credit Card Approval
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Predict the chances of getting approval on a credit based on your socio-economic condition.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component = {Link} to = "/loan">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.root}>
      <CardActionArea component = {Link} to = "/loan">
        <CardMedia
          className={classes.media}
          image="https://przemekspider.com/wp-content/uploads/2021/03/Home-Loan.jpg"
          title="Loan Approval"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Loan Approval
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Predict the chances of getting approval on a credit based on your socio-economic condition
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component = {Link} to = "/loan">
          Let's Try
        </Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    
      <Grid container spacing={3}>
        <Grid item xs>
        <Card className={classes.root}>
      <CardActionArea component = {Link} to = "/house">
        <CardMedia
          className={classes.media}
          image="https://www.azernews.az/media/pictures/housing-prices-420x0.jpg"
          title="Housing Price Prediction"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Housing Price Prediction
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Predict the price of your house based on its features.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component = {Link} to = "/house">
          Let's Try
        </Button>
        
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.root}>
      <CardActionArea component = {Link} to = "/divorce">
        <CardMedia
          className={classes.media}
          image="https://www.mayalaw.com/wp-content/uploads/2021/01/Divorce-Basics-Summons.jpg"
          title="Divorce Prediction"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Divorce Prediction
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Predict the chances of your divorce based on your personal traits.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component = {Link} to = "/divorce">
          Let's Try
        </Button>
        
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.root}>
      <CardActionArea component = {Link} to = "/grades">
        <CardMedia
          className={classes.media}
          image="https://www.jamesgmartin.center/wp-content/uploads/2020/07/AdobeStock_328366715-1200x800.jpeg"
          title="Grades prediction"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Grades Prediction
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Predict your grade based on your family's socio-economic condition.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component = {Link} to = "/grades">
          Let's Try
        </Button>
        
      </CardActions>
    </Card>
        </Grid>
      </Grid>
      </div>
      </animated.div>
    
    
            </div>
    )
}

export default Home
