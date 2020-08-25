import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '../../components/Typography/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    display: 'grid',
    gridTemplateColumns: '640px 640px',
    gridGap: '10px'
  }
});


function MyProfile(props) {
  const { classes } = props;

  const images = [
    {
      url: 'https://www.youtube.com/watch?v=DtHxklAjI9A&list=PLBOgHN04umScdi73v87WGATffb4SBg2oi&index=2&t=171s'
    },
    {
      url:
        'https://www.youtube.com/watch?v=MqFiIbJCKu0&list=PLBOgHN04umSf3_Yr_dPE5BQmWr4mAZW2r&index=3&t=0s',
      title: 'LeetCode',
      // width: '40%',
    },
    {
      url:
        'https://youtu.be/EmyjXLuyT6k',
      title: 'NodeJs',
      // width: '20%',
    },
    {
      url:
        'https://www.youtube.com/watch?v=opJ52Ge9zd8&list=PLBOgHN04umSeKUrB-0fSLd1tSPlFTk4Ad&index=4&t=42s',
      title: 'ReactJs',
      // width: '40%',
    },
    // {
    //   url:
    //     'https://www.youtube.com/watch?v=zh-ZhZ6QsKo&list=PLBOgHN04umSeKUrB-0fSLd1tSPlFTk4Ad&index=5&t=0s',
    //   title: 'ReactJs',
    //   // width: '38%',
    // },
    // {
    //   url:
    //     'https://www.youtube.com/watch?v=5La9AB-UDI4&list=PLBOgHN04umSeKUrB-0fSLd1tSPlFTk4Ad&index=6&t=1s',
    //   title: 'ReactJs',
    //   // width: '38%',
    // },
    // {
    //   url:
    //     'https://www.youtube.com/watch?v=qBgwIxtC3g4&list=PLBOgHN04umSeKUrB-0fSLd1tSPlFTk4Ad&index=7&t=7s',
    //   title: 'ReactJs',
    //   // width: '24%',
    // },
    // {
    //   url:
    //     'https://www.youtube.com/watch?v=5La9AB-UDI4&list=PLBOgHN04umSeKUrB-0fSLd1tSPlFTk4Ad&index=6&t=1s',
    //   title: 'ReactJs',
    //   width: '40%',
    // },
    // {
    //   url:
    //     'https://www.youtube.com/watch?v=P6mxMVW1-SA&list=PLBOgHN04umSc6etKOonhMLCNVsihxoDTY&index=2&t=0s',
    //   title: '.net core',
    //   // width: '20%',
    // },
    // {
    //   url:
    //     'https://www.youtube.com/watch?v=V__90mDMW0A&list=PLBOgHN04umSc6etKOonhMLCNVsihxoDTY&index=3&t=0s',
    //   title: '.net core',
    //   // width: '40%',
    // },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        My Portfolio 
      </Typography>
      <div className={classes.images}>
        {images.map((image, i) => (
           <ReactPlayer key={i} className={classes.imageSrc} url={image.url} />
        ))}
      </div>
    </Container>
  );
}

MyProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyProfile);
