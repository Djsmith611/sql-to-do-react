# Server-Side To Do App <a name="top"></a>

This project is a web-based to do list application that organizes tasks effectively. Users can easily add, edit, delete, and mark tasks as complete. The user interface is designed resembling neon lights. The tasks are organized in an easy to read list, and completed tasks are distict from incomplete ones.

![App Screenshot](/public/images/app-screenshot.png)

## Navigation
- [Features](#features)
- [Technologies used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features 

- Adding to the list
- Removal from list
- Mark complete or uncomplete
- Edit mode

[Back to Top](#top)
## Technologies Used

- `HTML`: Structure of the to do list and its components
- `CSS`: Styling of the HTML page and components
- `JavaScript`: Form submission, communication with server, communication with database.
- `React`: Jsx extension of JavaScript, component creation, useEffect, useState
- `Express.js`: Server-side logic to store, modify, and retrieve list items
- `Axios`: Promise-based HTTP client for making requests to the server
- `Material UI`: React UI component library

[Back to Top](#top)
## Getting Started

### Prerequisites

- `Node.js` installed on your machine
- A modern web browser
- Access to Postgres and Postico(Only availible on MAC)

### Installation

1. Clone this repository to your local machine using Terminal:

    - Click the green code button on this repository to get the SSH address and paste it into your terminal after typing:
        ```shell
        git clone
        ```
    - Make sure to set up your SSH key with GitHub prior.
2. Navigate to the project directory:

    ```shell
    cd sql-to-do-react
    ```

3. Install the required dependencies:

    ```shell
    npm install
    ```
4. Start the server:

    ```shell
    npm run server
    ```
5. Start the client in a separate terminal:

    ```shell
    npm run client
    ```
5. Open your web browser and navigate to [localhost:5173](http://localhost:5173/"To Do") to access the app.

### Usage

- Use the input field marked with "Type here!" to type the task that you want to add
- Click the `+` button to add the task to your list.
- Click the white square next to a task to mark it as complete.
- Click the `The pen icon` button to reveal delete buttons.
- Click `The trash icon` to remove a task, or `The pen icon` to stop editing.

[Back to Top](#top)

### License

Distributed under the MIT License. See `LICENSE` for more Information.