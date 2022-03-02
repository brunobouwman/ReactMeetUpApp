import { useContext } from 'react';

import FavoritesContext from '../store/Favorites-context';
import MeetupList from '../components/meetups/MeetupList';


function FavoritesPage() {
  const favoritesContextObj = useContext(FavoritesContext); //current context snapshot

    let content;

    if(favoritesContextObj.totalFavorites === 0) {
        content = <p>You got no favorites yet!</p>
    } else {
        content = <MeetupList meetups={favoritesContextObj.favorites} />
    }
  
  
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
