## LOCKER
## Description
Locker is a terminal run python application that allows users to store details i.e. usernames and passwords of their various accounts.

## Technologies used
python3.6

## Installation
This is how one can install my project:

Step 1 : Clone this repository using git clone https://github.com/rosa1-maker/Locker, or downloading a ZIP file of the code.
Step 2 : The repository, if downloaded as a .zip file will need to be extracted to your preferred location and opened
Step 3 : Open the terminal, go to the project directory and download the dependencies in the package.json using npm install
Step 4 : Run working.py in terminal\

## Behaviour Driven Development
Behaviour | Input | Output |
| :---------------- | :---------------: | ------------------: |
| Display codes for navigation | **In terminal: $./list.py** | Hi there, Welcome to the Password vault, What do we call you? |
| Display prompt for creating an account | **Enter: Ac** | Enter your first name, last name, password and email address |
| Display prompt for login in | **Enter: log** | Enter your account details to log in |
| Display codes for navigation | **Successful login** | Choose an option: cr - Create Credential, dis - Display Credentials, cp - Copy Credential, go - exit |
| Display prompt for creating a credential | **Enter: cr** | Enter the site name, credentials, password and email address |
| Display a list of credentials | **Enter: dis** | Prints a list of saved credentials |
| Display prompt for which credential to copy | **Enter: cp** | Enter the site name of the credential you wish to copy. |
| Exit application | **Enter: go** | Exit the current navigation stage |

## Test Driven Development
To test the app, run this commands in the terminal;

$ python3.6 user_test.py

$ python3.6 credential_test.py

## License
The MIT License (MIT) Copyright (c) 2019 Teresa Wanjiku.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@rosa1-maker

Author

Designed by Teresa Wanjiku