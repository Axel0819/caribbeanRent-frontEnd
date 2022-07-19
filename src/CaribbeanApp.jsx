import { AppRoutes } from './Routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './Services/Store/store';

export const CaribbeanApp = () => {
  return (
    <Provider store={store}>

      <AppRoutes />
      
    </Provider>
  );
}