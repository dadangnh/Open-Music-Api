# Installation Method

### Requirement
Before running this script, you need the following software installed:
1. [nodeJS](https://nodejs.org/en/)
2. [git](https://git-scm.com/)
3. [Docker Engine](https://www.docker.com/get-started/)

### Installation
First, clone this repository:

```bash
$ git clone git@gitlab.com:dadangnh/open-music-api.git some_dir
$ cd some_dir
```

Then, create your `.env` file by copying `.env.example` file. Applied the configuration to `docker-compose.yml` file.

Turn on the database:
```bash
$ docker-compose up -d database
```

Install the dependencies:
```bash
$ npm install
```

Run migration:

```bash
$ npm run migrate up
```

Start the development server:

```bash
$ npm run start-dev
```

Now your development app are ready to use:

API: [http://localhost:5000/](http://localhost:5000/)

#### Test

Unit testing also available with the following command:

```bash
$ npm run test
```
