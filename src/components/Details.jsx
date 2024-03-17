import { useNavigate } from "react-router-dom"
import "./details.css"


export function Details() {

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="login-card">
                <h1>Login via OTP</h1>
                <div className="input-wrapper">
                    <input type="tel" placeholder="Enter your mobile number" />
                </div>
                <button className="send-otp-btn" onClick={() => {
                    navigate('/login')
                }}>Send OTP</button>
            </div>
        </div>
    )
}