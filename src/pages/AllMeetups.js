import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]); //begins as an empty array and once we succesfully fetch the data we call the setState function and pass in the data array

  useEffect(() => {
    setIsLoading(true);

    fetch(
      'https://react-meetupapp-d7408-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
       return response.json();
      })
      //data returns an object and we are expecting an array (MeetupList components uses .map() which is an array function)
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key, //auto-generate id  (from firebase)
            ...data[key] //distribute data key into the created object (we access the nested object inside each key(firebase generated id) and spread it (coopy it) into new key/value pairs)
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
        // console.dir(meetups);
      })
      .catch((err) => {
        alert(err);
      });
  }, []); //Second argument (the argument which controls when the useEffect method is ran) in this case is empty because we have no external (to the useEffect) dependecies. In this way, the useEffect only runs once when the component is rendered

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
