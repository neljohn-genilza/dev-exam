const UserInfoItem = ({ 
  label, 
  text 
} : {
  label: string;
  text: string;
}) => {
  return <div><strong>{label}: </strong> {text}</div>
}

export default UserInfoItem
