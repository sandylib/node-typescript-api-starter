import { CURRENT_USER } from '../constants/applicationConstants';

export const getInitAuthData = () => {
  const currentUserInitData = {isAuthenticated: false, token: null, permission: ['admin'], expired: null};

  const currentUserStr = localStorage.getItem(CURRENT_USER);
  if(currentUserStr){
    const currentUser = JSON.parse(currentUserStr);
    return {
      ...currentUserInitData,
      ...currentUser
    }

  }
}