import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';
import HeartPost from './HeartPost/HeartPost';
import useStyles from './styles';
import Button from '@material-ui/core/Button';

const HeartPosts = ({setCurrentId, setPageNumber, pageNumber, setNumberOfPages, numberOfPages, totalPages}) =>{
    const posts = useSelector((state) => state.heartposts); // From reducers
    numberOfPages = totalPages;
    
    useEffect(()=>{
      numberOfPages = totalPages;
   }, [totalPages]);
    // setNumberOfPages(totalPages); 
    const classes = useStyles();
    const gotoPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1));
      };
    
      const gotoNext = () => {
        setPageNumber(Math.min(totalPages - 1, pageNumber + 1));
      };
    //console.log("Pages", pages)
    return(
         
        !posts.length && pageNumber > 0 ? <div>{setPageNumber(pageNumber - 1)} </div>  : (!posts.length ? <CircularProgress />:(
            <div>
        <Grid className = {classes.container} container alignItems = "stretch" spacing = {3}>
             {posts.map((post) => (
                <Grid key ={post._id} item xs = {12} sm = {6}>
                    <HeartPost pageNumber = {pageNumber} post = {post} setCurrentId = {setCurrentId} /> 
                </Grid>
             ))}   
        </Grid>
        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '4vh'}}>
         <Button onClick={gotoPrevious} variant="contained" >Previous</Button>
        <p style={{ color: 'white' }}> &nbsp; Page {pageNumber + 1} of {numberOfPages} &nbsp; </p>
        <Button onClick={gotoNext} variant="contained" >Next</Button>}
        </div>
        </div>
        )  
        )
    )
}

export default HeartPosts;

/*
*/
/*
  const pages = new Array(totalPages).fill(null).map((v, i) => i);
*/