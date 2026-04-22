
# YouTube enhanced backend

![GitHub stars](https://img.shields.io/github/stars/priyansh-goel-548/basic-backend?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/priyansh-goel-548/basic-backend?style=for-the-badge&logo=github) ![GitHub issues](https://img.shields.io/github/issues/priyansh-goel-548/basic-backend?style=for-the-badge&logo=github) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![License](https://img.shields.io/badge/license-ISC-green?style=for-the-badge)

## 📑 Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Key Dependencies](#key-dependencies)
- [Run Commands](#run-commands)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## 📝 Description

basic-backend is a robust and streamlined server-side starter kit powered by Express.js. Designed to jumpstart your web development projects, it features integrated database support and a clean architecture for building scalable web applications. Whether you are building a RESTful API or a backend for a modern web app, this project provides the essential foundation you need to get up and running quickly.

## ✨ Features

- 🗄️ Database
- 🕸️ Web
- [Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

## 🛠️ Tech Stack

- 🚀 Express.js

## ⚡ Quick Start

```bash

# Clone the repository
git clone https://github.com/priyansh-goel-548/basic-backend.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Key Dependencies

```
bcrypt: ^6.0.0
cloudinary: ^2.9.0
cookie-parser: ^1.4.7
cors: ^2.8.6
dotenv: ^17.2.4
express: ^5.2.1
jsonwebtoken: ^9.0.3
mongoose: ^9.2.0
mongoose-aggregate-paginate-v2: ^1.1.4
multer: ^2.0.2
```

## 🚀 Run Commands

- **dev**: `npm run dev`

## 📁 Project Structure

```
.
├── Readme.md
├── package.json
└── src
    ├── app.js
    ├── constants.js
    ├── controllers
    │   ├── comment.controller.js
    │   ├── dashboard.controller.js
    │   ├── healthcheck.controller.js
    │   ├── like.controller.js
    │   ├── playlist.controller.js
    │   ├── subscription.controller.js
    │   ├── tweet.controller.js
    │   ├── user.controller.js
    │   └── video.controller.js
    ├── db
    │   └── index.js
    ├── index.js
    ├── middlewares
    │   ├── auth.middleware.js
    │   └── multer.middleware.js
    ├── models
    │   ├── comment.model.js
    │   ├── like.model.js
    │   ├── playlist.model.js
    │   ├── subscription.model.js
    │   ├── tweet.model.js
    │   ├── user.model.js
    │   └── video.model.js
    ├── routes
    │   ├── comments.routes.js
    │   ├── dashboard.routes.js
    │   ├── healthcheck.routes.js
    │   ├── like.routes.js
    │   ├── playlist.routes.js
    │   ├── subscription.routes.js
    │   ├── tweet.routes.js
    │   ├── user.routes.js
    │   └── video.routes.js
    └── utils
        ├── ApiError.js
        ├── ApiResponse.js
        ├── asyncHandler.js
        └── cloudinary.js
```

## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/priyansh-goel-548/basic-backend.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.
