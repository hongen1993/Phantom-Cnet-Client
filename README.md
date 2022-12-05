# ...Phantom CNET...

### The project is executed with:

- [React.js](https://es.reactjs.org)

## URLs Grid

| Path                                      | Description                               |
| ----------------------------------------- | ----------------------------------------- |
| /                                         | Home                                      |
| /signup                                   | Sign up                                   |
| /login                                    | Log in                                    |
| /logout                                   | Log out                                   |
| /users                                    | [ADMIN] Get all users                     |
| /profile                                  | User profile                              |
| /edit-profile/:id                         | Edit user profile                         |
| /edit/:id                                 | [ADMIN] Get data of user                  |
| /taskboard/:id                            | Get task cards from profile               |
| /taskboard/edit-taskcards                 | Edit task cards page                      | 

## Components
| Components         |                                  Description                                   |
| ------------------ | ------------------------------------------------------------------------------ |
| IsAnon             | If the user is not logged, show home page, if it is, then show taskboard page. |
| IsPrivate          | If the user is not logged, show login page, if it is, then show profile page.  |
| Loading            | Display loading spinner.                                                       |
| Navbar             | Navbar menu.                                                                   |
| User               | Display user profile data.                                                     |
| Taskcard           | Display task cards.                                                            |

## Enviroment variables required 

REACT_APP_SERVER_URL

## Author

### Development made by [Hongen](https://phantom.com)