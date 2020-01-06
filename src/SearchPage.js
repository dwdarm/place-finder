import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchResult from './components/SearchResult';

const SearchPage = props => {
  const history = useHistory();
  const { query } = useParams();

  return(
    <div>
      <NavBar/>
      <section className="section">
        <div className="container">
          <p className="title is-5">{`Search result for "${query}"`}</p>
          <SearchResult query={query} history={history}/>
        </div>
      </section>
    </div>
  );
}

export default SearchPage;
