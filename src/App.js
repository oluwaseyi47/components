import React from 'react'
import './style.css'
import ProfilePhoto from './Components/profile/ProfilePhoto'
import FullName from './Components/profile/FullName'
import Address from './Components/profile/Address'




const App = () => (
  <div>
    <ProfilePhoto />

    <FullName />
    <Address />
  </div>
 );
 export default App;
