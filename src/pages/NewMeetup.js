import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage() {
    const history = useHistory(); // the history method/property helps us with the navigation between 'pages'
    

    function addMeetupHandler(meetupData) {
          fetch(
    'https://react-meetupapp-d7408-default-rtdb.firebaseio.com/meetups.json',
    {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
            'Content-Type': 'application/json'
        }
    }
  ).then(() => {
      history.replace('/'); //Navigates us awaybut won't allow the use of the back button from the browser
  })
}


  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupsPage;
