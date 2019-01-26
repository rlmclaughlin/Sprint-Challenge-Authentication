1. What is the purpose of using _sessions_?

    Sessions are a great tool for persisting user authentication information and data whenever a user has successfully logged in and makes further request. This prevents the user from having to constantly re-enter their required info (credentials) each time they make a request to the server. 
    
2. What does bcrypt do to help us store passwords in a secure manner.

   bcrypt helps us store passwords in a secure manner because it hash's the password, which creates a time consuming roadblock for any hacker that is trying to penetrate their account. 

3. What does bcrypt do to slow down attackers?
   It slows down the attackers by adding salts, which prevents the hashed password from being reversed to its native characters. Essentially, the password cannot be unhashed (if that's even a real word)

4. What are the three parts of the JSON Web Token?

    The three parts of a JSON Web Token are: Header, Payload, and Signature