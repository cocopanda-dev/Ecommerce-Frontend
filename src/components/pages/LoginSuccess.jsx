import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginSuccess = () => {
    const [canRender, setCanRender] = useState(localStorage.getItem('TOKEN') || '');
    const navigate = useNavigate();

    useEffect(() => {
        if (!canRender) {
            navigate('/login', { replace: true });
        }
    }, [canRender])

    const handleLogout = () => {
        localStorage.removeItem('TOKEN');
        setCanRender('');
    }

  return (
    canRender &&
    <div className="log-out-wrapper">
        <h2>Thank you for choosing Herman Miller</h2>
        <div>{`This is your Homepage!`}</div>
        <button className="logOut-Btn" onClick={handleLogout}>Sign Out</button>
    </div>
  )
}
export default LoginSuccess