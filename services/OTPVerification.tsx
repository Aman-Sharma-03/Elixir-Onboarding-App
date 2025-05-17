// A mock function for verifying OTP
export const getOTPStatus = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2500);
  });
};
