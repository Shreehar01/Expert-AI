import React, {useState, useEffect} from 'react';
import {Container, Grow, Grid} from '@material-ui/core';
import HeartPosts from "../Posts/HeartPosts";
import HeartForm from "../Form/HeartForm";
import {useDispatch, useSelector} from 'react-redux';
import {getHeartPosts} from '../../actions/heartposts.js';
import useStyles from './styles';


import { useSpring, animated } from 'react-spring';

const Heart = () => {
    const [currentId, setCurrentId] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
    const totalPages = useSelector((state) => state.totalPages);
    function Welcome() {
        console.log("welcome was called")
        setNumberOfPages(totalPages);
      }
      const props = useSpring({ to: { opacity: 1, marginDown: 0 }, from: { opacity: 0, marginDown: -1000 }, config: {duration: 1000} })
        
    useEffect(()=>{
       dispatch(getHeartPosts(pageNumber));
       Welcome();
    }, [dispatch, pageNumber, numberOfPages]);

    return(
        <animated.div style={props}>
      
        <Grow in>
                <Container>
                    <Grid className = {classes.mainContainer} container justify = "space-between" alignItems = "stretch" spacing = {3} >
                        <Grid item xs = {12} sm = {7}>
                            <HeartPosts totalPages = {totalPages} setCurrentId = {setCurrentId} setPageNumber = {setPageNumber} pageNumber = {pageNumber} setNumberofPages = {setNumberOfPages} numberOfPages = {numberOfPages}/>
                        </Grid>
                        <Grid item xs = {12} sm = {4}>
                            <HeartForm pageNumber = {pageNumber} currentId = {currentId}  setCurrentId = {setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            </animated.div>
      
    );
};

export default Heart;