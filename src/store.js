import {configoureStore} from '@redux/toolkit';
import counterReaduser from './reduser/counterReaduser';

const store =  configoureStore({
    reduser:{
        counterReaduser
    }
});
export default store;