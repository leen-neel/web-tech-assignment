function validateIndianPostalCode(pinCode) {
  const pinCodeString = pinCode.toString();

  if (pinCodeString.length === 6 && pinCodeString[0] !== "0") {
    console.log("Valid Indian postal code.");
    return true;
  } else {
    console.log(
      "Invalid Indian postal code. It must contain exactly 6 digits and not start with 0."
    );
    return false;
  }
}

const postalCode = 110001; // Replace with the postal code you want to validate
validateIndianPostalCode(postalCode);
