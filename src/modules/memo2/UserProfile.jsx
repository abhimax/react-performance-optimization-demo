import React from "react";

const UserProfile = React.memo(({ name, age }) => {
  console.log(`Rendering ${name}'s profile`);

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
});
export default UserProfile;
