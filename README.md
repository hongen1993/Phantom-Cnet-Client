# ...Phantom CNET...

### The project is executed with:

- [React.js](https://es.reactjs.org)

## URLs Grid

| Path                                      | Description                               |
| ----------------------------------------- | ----------------------------------------- |
| /                                         | Home.                                     |
| /signup                                   | Sign up.                                  |
| /login                                    | Log in.                                   |
| /logout                                   | Log out.                                  |
| /users                                    | [ADMIN] Get all users.                    |
| /projects                                 | User projects data.                       |
| /profile/edit/:id                         | Edit user profile.                        |
| /project/:id                              | Get project tasks from profile.           |

## Components

| Components         |                                  Description                                   |
| ------------------ | ------------------------------------------------------------------------------ |
| CreateProject      | User create a new project                                                      |
| IsAdmin            | Only can access if user has Admin role                                         |
| IsAnon             | If the user is not logged, show home page, if it is, then show taskboard page. |
| IsPrivate          | If the user is not logged, show login page, if it is, then show profile page.  |
| Loading            | Display loading spinner.                                                       |
| Navbar             | Navbar menu.                                                                   | 
| Partners           | Add users to a project.                                                        | 
| ProjectCard        | Card that display each project in users profile.                               | 
| ProjectTaskBoard   | Display, manage the tasks of a project                                         | 
| Sidebar            | Sidebar menu that displays user info.                                          | 
| Todo               | Create and edit to do list.                                                    | 
| UserCard           | Card that display each user in the database.                                  |

## Enviroment variables required 

REACT_APP_SERVER_URL

## Author

### Development made by [Hongen Shyu Barcel](phantom-cnet.vercel.app)