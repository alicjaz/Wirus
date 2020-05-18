import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService from '../../services/movies.service';

const SearchMovie = () => {
  React.useEffect(()=> {
    movieService.searchByName('avengers').then(resp=> {
            console.log(resp);
        });
  }, []);

    return (
    <div>
        <NavPanel />

    </div>
    );
};

export default SearchMovie;