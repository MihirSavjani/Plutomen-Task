
# Plutomen Task




## Run Locally

Clone the project

```bash
  git clone https://github.com/MihirSavjani/Plutomen-Task.git
```

Go to the project directory

```bash
  cd Plutomen-Task
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

#### Create User

```http
  POST http://localhost:3000/user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your username |
| `email` | `string` | **Required**. Your email |
| `password` | `string` | **Required**. Your password |
| `role` | `string` | **Required**. Your role |
| `department` | `string` | **Required**. Your department name |



#### Login User

```http
  POST http://localhost:3000/user/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required**. Your email |
| `password` | `string` | **Required**. Your password |


#### Get Contact List **[Login Required]**

```http
  GET http://localhost:3000/user/contact-list
```

#### Search Contacts 

```http
  GET http://localhost:3000/user/contacts?name='user name'&email='user email'&role='role name'
```

| Query Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` |  name |
| `email` | `string` | email id |
| `role` | `string` | role |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

SECRET_KEY="PLUTOMEN"

## Postman Collection

Import the postman collection **'Plutomen Task.postman_collection.json'** from root directory of the project.

