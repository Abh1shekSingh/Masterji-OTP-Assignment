import OTPInput from "../../components/OTPInput"
import "./Otp.css"

const Otp = () => {

  const onOTPSubmit = (otp) => {
    if(otp === '1234') {
      console.log("Login Success!", otp)
    }else {
      console.log("Entered Wrong OTP NUmber");
    }
  }

  return (
    <section id="OTP-section">
        <h1>Chai Aur Code</h1>
        <div className="form-container">
          <div>
            <h1>Mobile Phone Verification</h1>
            <p>Enter the 4-digit verification code that was sent to your phone number.</p>
          </div>
          <div>
            <OTPInput length={4} onOTPSubmit={onOTPSubmit} />
          </div>
        </div>
    </section>
  )
}

export default Otp