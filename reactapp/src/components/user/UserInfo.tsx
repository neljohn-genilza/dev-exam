import { Fragment } from 'react'
import { User } from '../../types/User'

import UserInfoItem from './UserInfoItem'

const UserInfo = ({ 
  user, 
  onChangeUser 
} : { 
  user: User;
  onChangeUser: () => void;
}) => {
  const { name: { title, first, last } , email } = user

  return (
    <Fragment>
      <h1>User Information</h1>
      <UserInfoItem label={'Email'} text={email} />
      <UserInfoItem label={'Name'} text={`${title} ${first} ${last}`} /><br />
      <button onClick={() => onChangeUser()}>Refresh</button>
    </Fragment>
  )
}

export default UserInfo
