# blog-application-backend

Backend for and Blog posting application where you can create your account and post blogs.

## Tech Used

- NodeJs
- ExpressJs
- MongoDb / Mongoose
- BcryptJs
- JWT Token

## Links
postman invite link: <a href="https://app.getpostman.com/join-team?invite_code=588b02ff58d146f4f872b39ac35fb0f9&target_code=26a5d395807fe05aad53d6d91b59bba3">  POSTMAN LINK </a>

Live Project Host: <a href="https://blog-application-backend.vercel.app/"> VERCEL LINK</a>
## APIs

### Authetication APIs

| API | Method | Function | Body | Headers |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `/api/auth/createUser` | POST |  Creates an user with required Credentials| {name, email, password, description} | N/A
| `/api/auth/loginuser` | POST |  Logging in an user with required Credentials| {email, password} | N/A
| `/api/auth/logutuser` | POST |  Logging out an user with required Credentials| N/A | N/A

### Blog APIs


| API | Method | Function | Body | Headers |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `/api/blog/createblog` | POST |  Creates Blog| {title, description, tags} |{authToken}
| `/api/blog/getBlogById` | GET |  Fetching blog with the use of Blog Id| {email, password} |{authToken, blogId}
| `/api/blog/editblog` | PUT |  Edits a blog | {title, description, tags} |{authToken}
| `/api/blog/deleteblog` | DELETE |  Deletes a blog | N/A |{authToken, blogId}

## Steps to run this into local system

1. clone this repo by this command

` git clone https://github.com/janmesh799/blog-application-backend`

2. get into the cloned git directory using the below mentioned command

` cd  blog-application-backend`

3. Install NPM packeges 

` npm install`

4. run the project on LocalHost

`npm run serve`