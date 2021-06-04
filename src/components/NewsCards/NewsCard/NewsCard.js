import {useRef, useEffect, useState} from 'react'
import classNames from 'classnames';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './style.js'

const NewsCard = ({ 
            article: { 
              description, 
              publishedAt, 
              source, 
              title, 
              url, 
              urlToImage 
              }, 
            index,
            active }) => {

    const classes = useStyles();
    console.log(active)
    
    const ref = useRef();

    useEffect(()=> {
      if (active-1 === index)
        ref.current.scrollIntoView({block: "center"});
        // window.scroll(0, ref.current.offsetTop - 50);
    },[index, active])

  return (
    <Card className={classNames(classes.card, active-1 === index ? classes.activeCard : null)} ref={ref}>
      {/* the clickable area */}
      <CardActionArea href={url} target="_blank"> 
        <CardMedia className={classes.media}  image={urlToImage || `https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1400/p:16x9/news_1920x1080.webp`} /> {/* the tag to add image to card */}
        
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {(new Date(publishedAt)).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {/* gutteerbottom means there will be a some padding/margin at bottom*/}
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">Learn More</Button>
        <Typography variant="h5" color="textSecondary">{index + 1}</Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard
