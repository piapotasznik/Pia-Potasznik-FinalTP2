import Factory from "../DAOs/Factory.js";
import { MODO } from "../config/config.js";
import { validateBookData } from "../utils/validations.js"; 
import bookMemoryDao from "../DAOs/Memory/bookMemoryDao.js";

class bookApi {
  constructor() {
    this.factory = Factory.factory(MODO);
  }

create = async (book) => {
  try {

    validateBookData(book);
    book.state = "disponible";

    const data = await this.factory.bookMemoryDao.create(book);
    return data;
  } catch (error) {
    throw error;
  }
};

getAll = async () => {
  try {
    const data = await this.factory.bookMemoryDao.getAll();
    return await data;
  } catch (error) {
    throw error;
  }
};

remove = async (code) => {
  try {
    const data = await this.factory.bookMemoryDao.remove(code);
    return await data;
  } catch (error) {
    throw error;
  }
};

getByCode = async (code) => {
  try {
    const data = await this.factory.bookMemoryDao.getByCode(code);
    return await data;
  } catch (error) {
    throw error;
  }
};
}

export default bookApi;
