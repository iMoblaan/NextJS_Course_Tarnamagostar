// import { getSession } from 'next-auth/client';
// import { useEffect, useState } from 'react';

import ProfileDetails from './profile-details/profile-details';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile(props) {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then(session => {
  //     if (!session) {
  //       window.location.href = '/auth';
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  async function changePasswordHandler(passwordData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);
  }

  async function aproveDetailsHandler(aproveDetails) {
    const response = await fetch('/api/user/aprove-details', {
      method: 'PATCH',
      body: JSON.stringify(aproveDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <h1>USER PROFILE</h1>
      <ProfileDetails onAproveDetails={aproveDetailsHandler} />
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
