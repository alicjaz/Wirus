import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardMedia, Divider, Typography} from '@material-ui/core';

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
    <div>
      <NavPanel/>
      <input
        placeholder="Enter movie name"
        onChange={event => setMovieToSearch(event.target.value)}
      />
      <Card>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            {!!movies?.movies.length &&
            movies?.movies.map(movie => (
              <Card key={movie.id}>
                <Card className={classes.content}>
                  <img src={movie.poster}
                       alt={movie.title}/>
                  <br />
                  {movie.title}
                  <br />
                   {movie.type}
                  <br />
                   {movie.year}
                  </Card>
              </Card>
            ))
            }
          </CardContent>
        </Card>
       
      </Card>
      
    </div>
  );
};

export default SearchMovie;
