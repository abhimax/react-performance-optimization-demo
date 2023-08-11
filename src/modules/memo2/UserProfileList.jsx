import UserProfile from "./UserProfile";

const UserProfileList = ({ profiles }) => {
  return (
    <div>
      <h1>User Profiles</h1>
      {profiles.map((profile, index) => (
        <UserProfile key={index} name={profile.name} age={profile.age} />
      ))}
    </div>
  );
};
export default UserProfileList;
