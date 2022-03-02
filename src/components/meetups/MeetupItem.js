import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/Favorites-context';

function MeetupItem(props) {
  const favoritesContextObj = useContext(FavoritesContext); //stores the FavoritesContext object

  const itemIsFavorite = favoritesContextObj.itemIsFavorite(props.id); //returns true or false

  function toggleFavoriteHandler() {
    if (itemIsFavorite) {
      favoritesContextObj.removeFavorite(props.id);
    } else {
      favoritesContextObj.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  return (
    <li className={classes.item}>
        <Card >
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteHandler}>{itemIsFavorite ? 'Remove Favorite' : 'Add to Favorites'}</button>
      </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
