import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, CardActionArea} from '@material-ui/core';
import { DebounceInput } from 'react-debounce-input';

const useStyles = makeStyles ({
  card: {
    maxWidth: 330,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  content: {
    maxWidth: 350,
    margin: "auto",
    transition: "0.3s",
    border: "2px solid",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
   title: {
    border: "2px solid",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  divider: {
    margin: '5px',
  },
});


const SearchMovie = () => {
  const classes = useStyles();
  const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
  const [movieToSearch, setMovieToSearch] = React.useState('');

  React.useEffect(() => {
    movieService.searchByName(movieToSearch).then(resp => {
      if (resp) {
        setMovies(resp);
      }
    });

    movieService.searchById('tt0848228');
  }, [movieToSearch]);


  return (
      <div >
        <NavPanel />
        <DebounceInput
            debounceTimeout={500}
            placeholder="Enter movie name"
            onChange={event => setMovieToSearch(event.target.value)}
            style={{ all:"initial",fontFamily:"Arial",width: "200px",margin:"0 auto",display:"block",backgroundColor:"transparent",border:"none",borderBottom: "1px solid blue",textAlign:"center",height:"30px",marginBottom:"20px",marginTop:"20px"}}
        />

        {!!movies?.movies.length &&
        movies?.movies.map(movie => (
            <Card style={{margin:"auto",marginBottom:"20px",width:"300px"}} className={classes.content}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">

                    {movie.year}
                  </Typography>
                </CardContent>
                <CardMedia>
                  <img src={movie.poster}></img>
                </CardMedia>


              </CardActionArea>
            </Card>
        ))
        }
      </div>
  );
};
export default SearchMovie;