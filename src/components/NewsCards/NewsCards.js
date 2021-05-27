import React from 'react';

import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';

import NewsCard from './NewsCard/NewsCard'

import useStyles from './styles.js';

const NewsCards = ({ articles }) => {

  const classes = useStyles();
  
  return (
    <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, index) => (
          <Grid key={index} item xs={12} sm={6} md={3} lg={4} style={{ display: 'flex'}}>
            <NewsCard article={article} index={index} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards
