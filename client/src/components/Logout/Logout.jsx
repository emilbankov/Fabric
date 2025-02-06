import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthProvider";

export default function Logout() {
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        logoutHandler();
    }, []);

    return null;
}