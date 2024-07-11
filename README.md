## Automation Test Projects for Unsplash


These automation test projects are designed for testing Unspash. They are built on PLaywright (Typescript is the main programming language). The project follows the TDD (Test-Driven Development).

### Projects Overview

**1. Set Up Your Environment**
```
npm install playwright
```
**2. Create a New Playwright Project**
```
mkdir playwright-unsplash
cd playwright-unsplash
npm init -y
```
**3. Install Playwright**
```
npm install --save-dev playwright
```

#### Unsplash Automation Test Project

**Solution Structure:**
1. **core**: Contains utilities for initializing Web Driver, element.
2. **service**: Handles API interactions, request/response body generation, and request creation (POST, GET, PUT, DELETE) of Account API and BookStore API.
3. **test**: Contains test cases. Depends on core and service.

**Development Tools:**
- Visual Studio Code

**Running Tests:**
1. **Visual Studio Code**: Use Test Explorer to select and run tests.
2. **Command Line**:
   - Install dependencies: `npm install`
   - Run tests: `npx playright test`
   - Export report: `npx playwight show-report`

**Account Information:**
Go to the  [Unsplash create account form](https://unsplash.com/join) to create your own credentials.

**Get Client ID, Client Secret, Redirect URI and Authorization code**
Go to [Unsplash Developers Page](https://unsplash.com/developers) create your own application and read the documentation for more information.

**Generate token by Postman**

Send POST request: https://unsplash.com/oauth/token?client_id=`[Your client ID]`&client_secret=`[Your client secret]`&redirect_uri=`[Redirect URI]`&code=`[Your authorization code]`&grant_type=authorization_code

### Creating `account.ts`

Create a `account.ts` file in the `data` of your project to store your credentials. The format of the file should be as follows:

```account.ts
{
    fullName: [Your full name],
    email: [Your email],
    password: [Your password],
    token: [Your token],
}
```

**Note**: Keep your `fullName`, `email`, `password` and `token` secret and do not expose them in public repositories.

### Example Command for Running Tests with Credentials

After setting up your `account.ts` file, you can run your tests by following the steps mentioned above. Ensure that your credentials are correctly set up in the `account.ts` file before running the tests.