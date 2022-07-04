import { toast } from "react-toastify";

export const parseJwt = (token) => {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

export const logout = () => {
    localStorage.clear();
    toast.success("You have been logged out", { position: toast.POSITION.TOP_RIGHT });
    window.location.href = '/'
}