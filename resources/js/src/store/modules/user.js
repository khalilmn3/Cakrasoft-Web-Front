import defaultSettings from '@/utils/settings.js';
const { AppActiveUser } = defaultSettings;


const state = {
    AppActiveUser : {
        id         : localStorage.getItem('account'), //|| AppActiveUser.id,          // From Auth
        displayName : localStorage.getItem('account'), //|| AppActiveUser.displayName, // From Auth
        about       : 'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
        photoURL    : require('@assets/images/portrait/small/avatar-s-11.png'), // From Auth
        status      : 'online',
        userRole    : 'admin'
    }
}
const mutation = {
}

export default {
    state,
    mutation
}
