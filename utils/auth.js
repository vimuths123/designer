export const login = async (token) => {
    localStorage.setItem('logintoken', token);
};

export const logout = () => {
    localStorage.removeItem('logintoken');
};

export const checkLogin =  () => {
    const hasToken = localStorage.getItem('logintoken') !== null;
    if (hasToken) {
        return true;
    } else {
        return false
    }
};

export const getToken = () => {
    return localStorage.getItem('logintoken');
};