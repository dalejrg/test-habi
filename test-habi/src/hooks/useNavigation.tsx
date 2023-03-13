import {useNavigate} from 'react-router-dom';

const useNavigation = () => {
    const navigate= useNavigate();
    
    const handleNavigate = (route:string) => {
        navigate(`/${route}`)
    }
    return {
      handleNavigate
  }
}

export default useNavigation;