# Cashew Membership Registration Form

This is a React-based web application for managing membership registrations. It allows users to register by filling out a form and uploading their passport photo and payment receipt.

## Features

- User-friendly form with validation
- File upload for passport photo and payment receipt
- Confirmation dialog before form submission
- Success and error notifications

## Installation

To install the necessary dependencies, run:

```bash
npm install
```
## Usage
To start the development server, run:
```bash
npm start
```

This will start the application on http://localhost:3000.

## API Endpoints
### Register Member
- URL: /api/membership/register
- Method: POST
- Description: Registers a new member by uploading their passport photo and payment receipt.
Request
- Headers:
  - Content-Type: multipart/form-data
- Body:
  - passport_photo: The passport photo of the member (file)
  - payment_receipt: The payment receipt of the member (file)
  - Other member data fields as required (e.g., full_name, email, etc.)

## Response

### Success (201):
```bash
{
  "success": true,
  "message": "Membership registration successful",
  "data": {
    "_id": "member_id",
    "full_name": "Member Full Name",
    "email": "member@example.com",
    // Other member data fields
  }
}
```
### Error (500):
```bash
{
  "success": false,
  "message": "An error occurred during registration",
  "error": "Error message"
}
```

## Project Structure
```bash
cashew-membership-form/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── MembershipForm.jsx
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── [README.md](./README.md)
```
## Environment Variables
Create a .env file in the root of your project with the Database credential.

## dependencies
- axios
- react
- react-dom
- Material-UI
