import { configureStore } from '@reduxjs/toolkit';

//reducers
import auth from './slices/auth';

export default configureStore({
    reducer: {
        auth
    }
});