/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import "../pages/OTP-Form/Otp.css"

const OTPInput = ({length = 4, onOTPSubmit = () => {}}) => {

    const inputRef = useRef([]);

    useEffect(() => {
      if(inputRef.current[0]) inputRef.current[0].focus();
    }, [])
    

    const [otp, setOtp] = useState(new Array(length).fill(""));

    const handleChange = (index, e) => {
      const digit = e.target.value;
      if(isNaN(digit)) return ;
      const newOTP = [...otp];
      newOTP[index] = digit.substring(digit.length - 1);
      setOtp(newOTP);

      const combinedOTPNumber = newOTP.join("");
      if(combinedOTPNumber.length === length) {
        onOTPSubmit(combinedOTPNumber);
      }

      if(digit && index < length - 1) {
        inputRef.current[index + 1].focus();
      }

    }
    
    const handleKeyDown = (index, e) => {
      if(e.code === 'Backspace') {
        if(!otp[index] && index > 0) {
          inputRef.current[index - 1].focus();
        }
      }
    }

  return (
    <div>
        {
            otp.map((value, index) => {
                return <input
                    ref={(input) => inputRef.current[index] = input} key={index} type="text" value={value} onChange={(e) => handleChange(index, e)} onKeyDown={(e) => handleKeyDown(index, e)} className="OTP-Input-Box"
                 />
            })
        }
    </div>
  )
}

export default OTPInput