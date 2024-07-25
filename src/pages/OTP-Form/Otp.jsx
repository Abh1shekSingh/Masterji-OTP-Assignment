import OTPInput from "../../components/OTPInput"
import "./Otp.css"
import logo from  "../../assets/ChaiCode Logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Otp = () => {

  const onOTPSubmit = (otp) => {
    if(otp === '1234') {
      toast.success("OTP Validation Success!",{position:"top-right"})
      console.log("Login Success!", otp)
    }else {
      toast.warning("OTP Validation Failed!", {position:"bottom-right"})
      console.log("Entered Wrong OTP NUmber");
    }
  }

  return (
    <section id="OTP-section">
        <ToastContainer />
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
        <a href="https://chaiaurcode.com" className="chaicodelogo"><img src={logo} alt="Chai Aur Code Logo which will Redirect you to the Chaiaurcode.com website" width={100} /></a>
    </section>
  )
}

export default Otp