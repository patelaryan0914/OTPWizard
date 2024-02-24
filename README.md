---

# OTP Wizard

This npm module provides functions to generate one-time passwords (OTPs) and send them via email using Nodemailer.

## Installation

To install the OTP Email Sender module, run the following command:

```bash
npm install otp-email-sender
```

## Usage

```javascript
const otpEmailSender = require('otp-email-sender');

// Example usage of generating OTP and sending email
const recipientEmail = 'recipient@example.com';
const htmlTemplate = (otp) => `
  <p>Your OTP is: <strong>${otp}</strong></p>
  <p>This OTP is valid for a limited time. Please do not share it with anyone.</p>
`;
otpEmailSender.sendEmail(6, recipientEmail, htmlTemplate);
```

## Configuration

Before using the OTP Email Sender module, ensure that you have created a `.env` file in the root directory of your project with the following environment variables:

```
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-gmail-password
```

Make sure to replace `your-email@gmail.com` and `your-gmail-password` with your actual Gmail username and password. These credentials will be used to authenticate with the Gmail SMTP server for sending emails.

## Functions

### sendEmail(otplength, recipient, htmlContent)

Sends an email containing a dynamically generated OTP to the specified recipient.

- `otplength`: The length of the OTP to generate.
- `recipient`: The email address of the recipient.
- `htmlContent(otp)`: A function that takes the OTP as an argument and returns the HTML content of the email.

### verifyOTP(providedOTP, expectedOTP)

Verifies whether the provided OTP matches the expected OTP.

- `providedOTP`: The OTP provided by the user.
- `expectedOTP`: The expected OTP to compare against.

Returns `true` if the provided OTP matches the expected OTP, otherwise returns `false`.

---
