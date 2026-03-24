
import { AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const UserIcon = ({navigateToLogin}) => {
     const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
  return (
    isLoggedIn ? (
                  <AiOutlineUser  size={28} className="cursor-pointer" />
                ) : (
                  <AiOutlineUser
                    onClick={navigateToLogin}
                    size={28}
                    className="cursor-pointer"
                  />
                )
  )
}

export default UserIcon