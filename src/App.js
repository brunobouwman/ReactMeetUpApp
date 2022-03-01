import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
function App() {
  return (
  <div>
    <MainNavigation />
    <Switch> {/*By default Switch 'stops' whenever theres a common path among all routes (in this case '/') */}
      <Route path="/" exact>  {/*Initial page. 'exact checks the full path*/}
        <AllMeetupsPage />
      </Route>
      <Route path="/new-meetup">
        <NewMeetupsPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
