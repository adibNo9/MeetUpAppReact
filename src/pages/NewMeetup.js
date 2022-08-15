import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupsPage = () => {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch(
      'https://react--http-6677e-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then(() => {
        history.push('/');
      });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupsPage;
