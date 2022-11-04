
const Profile = ({profile}) => {
  return (
    <>
      <article  className="user-profile">
        <img src={profile.img} alt=":("></img>
        <div>
          <h1 >{profile.name}</h1>
          <p >{new Date().getFullYear()-new Date(profile.birthOn).getFullYear()} Years</p>
        </div>
      </article>
    </>
  )
}

export default Profile
