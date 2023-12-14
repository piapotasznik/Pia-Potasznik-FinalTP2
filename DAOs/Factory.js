import bookMemoryDao from "./Memory/bookMemoryDao.js";

class Factory {
  constructor() {}

  static factory = (modo) => {
    if (modo === "memory") {
      return {
        xDao: new bookMemoryDao(),
        userDao: "useMemoryDao",
      };
    }
    if (modo === "sql") {
      return {
        xDao: "xSqlDao",
        userDao: "userSqlDao",
      };
    }
    if (modo === "mongo") {
      return {
        xDao: "xMongoDao",
        userDao: "userMongoDao",
      };
    }
  };
}

export default Factory;
