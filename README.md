---

# OTP Wizard

This npm module provides functions to generate one-time passwords (OTPs) and send them via email using Nodemailer with custom subject and htmlContent.

## Installation

To install the OTP Email Sender module, run the following command:

```bash
npm install otpwizard
```

## Usage

```javascript
const otpwizard = require('otpwizard');

// Example usage of generating OTP and sending email
const recipientEmail = 'recipient@example.com';
//Create htmlTemplate which is an Jsx component just add $otp where otp needed to display
const htmlTemplate = (otp) => `
  <p>Your OTP is: <strong>${otp}</strong></p>
  <p>This OTP is valid for a limited time. Please do not share it with anyone.</p>
`;
//Create EmailObj so that you can send Email with Custom subject and htmlContent
const EmailObj = {
    subject: "Your One-Time Password IS this please Verify",
    emailInput:recipientEmail,
    htmlContent,
};
otpwizard.sendEmail(6, EmailObj);
```

## Configuration

Before using the OTP Email Sender module, ensure that you have created a `.env` file in the root directory of your project with the following environment variables:

```
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-gmail-password
```

Make sure to replace `your-email@gmail.com` and `your-gmail-password` with your actual Gmail username and password. These credentials will be used to authenticate with the Gmail SMTP server for sending emails.

## Object

### EmailObj

- `subject`: Custom subject for email
- `recipient`: The email address of the recipient.
- `htmlContent(otp)`: A function that takes the OTP as an argument and returns the HTML content of the email.

## Functions

### sendEmail(otplength,EmailObj)

Sends an email containing a dynamically generated OTP to the specified recipient.

- `otplength`: The length of the OTP to generate.
- `EmailObj`: A Object Which Contains Subject,recipientEmail,htmlContent(otp).

### verifyOTP(providedOTP, expectedOTP)

Verifies whether the provided OTP matches the expected OTP.

- `providedOTP`: The OTP provided by the user.
- `expectedOTP`: The expected OTP to compare against.

Returns `true` if the provided OTP matches the expected OTP, otherwise returns `false`.

## Testing

For testing the functionality of otpwizard, you can use the provided backend test repository. This repository includes endpoints for sending OTP emails and verifying OTPs, providing a comprehensive testing environment for the package.

Check out the test repository here: [OTPWizard Backend Test Repo](https://github.com/Aryanop0914/OTPwizard-BackendTest)

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

---
