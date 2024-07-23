## Node.js Authentication Project
This project demonstrates user authentication using Passport.js with strategies for local authentication (email/password) and Google OAuth2. It includes a simple web application with login, registration, and Google sign-in functionality.





<img src="https://github.com/user-attachments/assets/30dbe304-05d5-4cc8-aab0-c959ec97dc88" width="500" height="500">
<img src="https://github.com/user-attachments/assets/8b94e179-2200-45b2-b68a-490d42fe7e78" width="500" height="500">




### Features
Local Authentication: Allows users to register with an email address and password.
Google OAuth2 Authentication: Provides authentication via Google account using OAuth2.
Session Management: Uses sessions to persist user login state.
Password Hashing: Securely stores user passwords using bcrypt for local authentication.
Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:rae3skhan/Authentication_system.git
   cd repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   SESSION_SECRET=your-session-secret
   ```
## Usage
1. Start the application:
   ```bash
   npm start
   ```
2. The application will be running on `http://localhost:3000`.
## Routes
- `/`: The home page, accessible only to authenticated users.
- `/login`: The login page.
- `/register`: The registration page.
- `/logout`: Logs the user out and redirects to the login page.
## Code Overview
### Dependencies
- **express**: Web framework for Node.js
- **bcrypt**: Library to hash passwords
- **passport**: Middleware for authentication
- **express-flash**: Flash messages for Express
- **express-session**: Session middleware for Express
- **method-override**: Middleware to use HTTP verbs such as PUT or DELETE
- **dotenv**: Loads environment variables from a `.env` file
### File Structure
- `server.js`: Main entry point of the application
- `passport-config.js`: Configuration for Passport.js
- `views/`: Directory containing EJS templates for login, register, and index pages
### Views
- `views/index.ejs`: Home page view for authenticated users.
- `views/login.ejs`: Login page view.
- `views/register.ejs`: Registration page view.
### Author 
Raees khan 
## License
This project is licensed under the MIT License.
## Acknowledgements
- [Node.js](https://nodejs.org/)
- [Passport.js](http://www.passportjs.org/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [express](https://expressjs.com/)
---
Feel free to modify the content to suit your project's specific details and requirements.
