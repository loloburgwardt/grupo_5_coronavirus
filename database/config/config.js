module.exports = {
  "development": {
    "username": "root",
    "password": '',
    "database": "proyectoint",
    "host": "127.0.0.1",
    "port":3306,
    "dialect": "mysql",
    "operatorsAliases": 0,
    "define": {
      "paranoid": 1,
      "underscored": 1
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}