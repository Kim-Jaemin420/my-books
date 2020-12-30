import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { CardContainer } from '../style/BookCard';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    backgroundColor: '#FBF6EA',
    color: 'FDFAF6',
  },
  favorite: {
    fill: '#e56558',
  }
}));


export default function BookItem({ title, author, message, url, index }) {
  const colors = ['#748EA2', '#7D836E', '#D37757', '#5A5753', '#CEC7B3', '#D2C3CA'];


  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const clickFavorite = e => {
    console.log(e.target);
    e.target.style = 'fill: #e56558';
  }

  return (
    <CardContainer style={{ marginTop: 10 }}>
      <Card className={classes.root} style={{ position: 'relative' }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" style={{
              backgroundColor: colors[index]
            }} className={classes.avatar}>
              {title[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={author}
        />
        <CardContent
          style={{
            backgroundColor: colors[index],
            position: 'relative',
          }}
          className={classes.media}
        >
          <CardContent
            style={{
              fontFamily: 'Jadyn',
              fontSize: 23,
              fontWeight: 400,
              position: 'absolute',
              top: '33%',
              left: '0',
              textAlign: 'center',
              width: '300px',
            }}>
            {title}
          </CardContent>
        </CardContent>


        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {message.length < 46 ? message : message.substring(1, 46) + '...'}

          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={clickFavorite}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="link">
            <LinkIcon>
              <a href={url} style={{ display: 'block' }}>
                ''
              </a>
            </LinkIcon>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {message}
          </CardContent>
        </Collapse>
      </Card>
    </CardContainer>
  );
}