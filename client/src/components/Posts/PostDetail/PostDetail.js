import React , {useState , useEffect} from 'react'
import { Typography, Container , Paper } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {useParams , useHistory} from 'react-router-dom'
import { useSelector} from 'react-redux';

import useStyles from './styles';

const PostDetail = () => {
    const history = useHistory();
    const classes = useStyles();
    const {id} = useParams();
    const post = useSelector((state) => (id ? state.posts.find((message) => message._id === id) : null));
    const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' , name: "" , likes:""})

    useEffect(()=> {
        if(post) setPostData(post)
        else {
            history.push('/');
        }
    },[])


    return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Container maxWidth="md">
                <Paper className={classes.paper}>
                {postData &&
                <div className="">
                    <Typography variant="h4" className={classes.title}>Title : {postData.title}</Typography>
                    <div className={classes.logo}>
                        <img src={postData.selectedFile} className={classes.image} alt=""/>
                    </div>  
                    <Typography variant="subtitle1" color="secondary" className={classes.tag}>#{postData.tags}</Typography>
                    <Typography variant="body2" component="p"className={classes.message}>{postData.message}</Typography>
                    <Typography variant="h6" className={classes.name} color="primary">Create: {postData.name}</Typography>
                    <Typography variant="subtitle1" className={classes.like} color="secondary"><ThumbUpAltIcon className={classes.icon}/> {postData.likes.length}</Typography>
                </div>
                }
                </Paper>
                </Container>
         
            </main>
    )
}

export default PostDetail
