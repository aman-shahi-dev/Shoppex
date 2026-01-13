
import { Route } from 'react-router-dom';

import PrivateLayout from '../layouts/PrivateLayout.jsx';

import Profile from '../pages/private/Profile.jsx'

function PrivateRoutes() {
  return (
    <>
        <Route element={ <PrivateLayout/> }>
            <Route path='/profile/:id' element={ <Profile/> } />
        </Route>    
    </>
  )
}

export default PrivateRoutes;