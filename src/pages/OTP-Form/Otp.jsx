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
          <div className="heading-container">
            <h2>Mobile Phone Verification</h2>
            <p>Enter the 4-digit verification code that was sent to your phone number.</p>
          </div>
          <div>
            <OTPInput length={4} onOTPSubmit={onOTPSubmit} />
          </div>
          <div className="button-container">
            <button>Verify Account</button>
            <p>Didn&apos;t receive code? <span>Resend</span></p>
          </div>
        </div>
    </section>
  )
}

export default Otp