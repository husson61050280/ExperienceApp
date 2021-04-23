import React, { useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import useStyle from './styles';

const Home = ({currentId , setCurrentId}) => {
  const classes = useStyle();
  // const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <main className={classes.content}>
    <div className={classes.toolbar}/>
    <Grow in>
      <Container>
        <Grid container spacing={3} alignItems="stretch">
            <Posts setCurrentId={setCurrentId} />
        </Grid>
      </Container>
    </Grow>
    </main>
  );
};

export default Home;
