# Recommended VSCode settings
1. install eslint, prettier extensions
2. File > Preferences > Settings > (turn off detect indentation, set tab to 4 spaces)

# To standardise your code style, run
  $ npm run format

  $ npm run lint

# To start development server
  $ npm install

  $ npm run start

# To start postgres version 12, alongwith version 9.3

1. Refer https://medium.com/keeping-code/running-multiple-postgresql-versions-simultaneously-on-macos-linux-90b3d7e08ffd

  $ get version 12, postgres-common.

  $ pg_lsclusters

2. Change pg_hba.conf (/etc/postgresql/12/main/pg_ba.conf) for version 12 to give passwordless access to users:

  $ sudo vi /etc/postgresql/12/main/pg_ba.conf

  $ change 'md5' and 'peer' to 'trust'

  $ sudo systemctl restart postgresql@12-main

3. Create user and database:

  $ sudo su - postgres

  $ psql --cluster 12/main

  $ create user vahan;

  $ create database jobfinder;

4. Check if you can access database: psql --cluster 12/main -U vahan -d jobfinder

# database migrations

1. Create, update or delete an entity in src/db/entities/

2. Run

  $ npm run migration:generate -- -n [migrationName]

  $ npm run migration:run

3. If instead of changing the entities you want to write a new migration:

  $ npm run migration:create -- -n [migrationName]

