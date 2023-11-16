// class XApi {
//   constructor() {
//     this.memory = [];
//   }

//   create = async (info) => {
//     try {
//       this.memory.push(info);
//       return await info;
//     } catch (error) {
//       throw error;
//     }
//   };
// }

// export default XApi;

// ------------------------------
import Factory from "../DAOs/Factory.js";
import { MODO } from "../config/config.js";

class XApi {
  constructor() {
    this.factory = Factory.factory(MODO);
  }

  create = async (info) => {
    try {
      const data = await this.factory.xDao.create(info);
      return await data;
    } catch (error) {
      throw error;
    }
  };
}

export default XApi;
