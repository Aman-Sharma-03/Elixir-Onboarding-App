// A mock function for verifying OTP
export const getOTPStatus = async (loginState: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(loginState); // can be login, signup and failed
    }, 2500);
  });
};
