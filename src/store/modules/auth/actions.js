export const signIn = id => ({
    type: '@auth/SIGN_IN',
    payload: { id },
});

export const signOut = () => ({
    type: '@auth/SIGN_OUT',
});
