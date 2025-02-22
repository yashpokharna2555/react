import React from 'react'

const Profile = ({name,age}) => {
  return (
    <div>
      <div>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
      </div>
    </div>
  )
}

export default Profile
