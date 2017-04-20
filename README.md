# Chatguru
Sample application presenting React / Redux / Rails / ActionCable integration.

## Technology Stack
* Rails 5.0
* Ruby 2.3
* React 15.1.0
* Bootstrap 3
* PostgreSQL 9.6

## Setup
In order to setup this application, you need to have PostgreSQL database installed. if you don't have it, then below you can find installation notes.

Run setup script as presented below
```
./bin/setup
```

## Launch application
``` rails s```
``` npm start```

#### PostgreSQL Setup
You can follow the instructions on [PostgreSQL site](http://www.postgresql.org/download/) or use Homebrew.
- Follow instructions to install on [Homebrew site](http://brew.sh/)
- Type `brew install postgresql`
- Create your DB user `createuser -d -P postgres`

You can also use [Postgres.app](http://postgresapp.com/) and follow [Configure path section](http://postgresapp.com/documentation/cli-tools.html)

Create `config/database.yml`:

```sh
cp config/database.sample.yml config/database.yml
```

Create database:

```sh
rake db:setup
```
