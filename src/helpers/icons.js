import { 
    faTrash, 
    faSignOutAlt, 
    faPenToSquare, 
    faSpinner, 
    faCirclePlus,
    faEnvelope,
    faLock,
    faMapLocationDot,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faSpinner, 
        faPenToSquare, 
        faCirclePlus,
        faEnvelope,
        faLock,
        faMapLocationDot,
        faPhone
    );
};

export  default Icons;