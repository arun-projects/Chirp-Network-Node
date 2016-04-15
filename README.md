# Chirp Social Network NodeJS

- In this lab we will be developing a small Twitter clone called Chirp! in NodeJS.
- All of the code setup has been taken care of for you already, but you will need to set up your development environment to run the project:

##### Install node:

- Visit the [Node website](https://nodejs.org/en/) and install using the installer.

##### Install software dependencies (make sure you are in the project directory):

```bash
npm install
```

##### Install Sequelize-CLI:

Sequelize command line tools:

```bash
sudo npm install sequelize-cli -g
```

##### Install Nodemon, our development server:

```bash
sudo npm install nodemon -g
```

##### Migrate development database:

```bash
sequelize db:migrate
```

##### Run the development server:

```bash
nodemon
```

> Now you should be able to visit your site at http://localhost:3000