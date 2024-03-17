import "./login.css"

export function Login() {

    function handleChange(e) {
        const {value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");

        let fieldIntIndex = parseInt(fieldIndex, 10);

        const nextfield = document.querySelector(
            `input[name=field-${fieldIntIndex + 1}]`
        );

        if (nextfield !== null && value.length == 1) {
            nextfield.focus();
        }
    }

    return (
        <div class="container">
            <div class="login-card">
                <h1>Login via OTP</h1>
                <div class="otp-inputs">
                    <input name="field-1" type="text" maxlength="1" onChange={(e) => {
                        handleChange(e);
                    }} />
                    <input name="field-2" type="text" maxlength="1" onChange={(e) => {
                        handleChange(e);
                    }} />
                    <input name="field-3" type="text" maxlength="1" onChange={(e) => {
                        handleChange(e);
                    }} />
                    <input name="field-4" type="text" maxlength="1" />
                </div>
                <button class="login-btn">Login</button>
            </div>
        </div>
    )
}