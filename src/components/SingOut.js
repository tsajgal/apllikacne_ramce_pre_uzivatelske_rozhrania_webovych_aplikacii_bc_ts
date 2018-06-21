import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
    <button
        className={'col-xs-6 col-sm-6 col-md-4 col-lg-4'}
        type="button"
        onClick={auth.doSignOut}
    >
        Odhlásiť
    </button>

export default SignOutButton;