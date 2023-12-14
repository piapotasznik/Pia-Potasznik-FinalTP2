import bookApi from "../Api/bookApi.js";

class bookController {
  constructor() {
    this.bookApi = new bookApi();
  }

  create = async (req, res) => {
    try {
      const { book } = req.body;  
      if (!book) throw new Error("No se proporcionaron datos del libro");
      const data = await this.bookApi.create(book);
      res.status(201).send({ message: data });  
    } catch (error) {
      res.status(422).send({ errorMsg: error.message });
    }
  };

  getAll = async (req, res) => {
    try {
      const data = await this.bookApi.getAll();
      res.status(200).send({ message: data });
    } catch (error) {
      res.status(422).send({ errorMsg: error.message });
    }
  };

  remove = async (req, res) => {
    try {
      const { code } = req.params;
      const data = await this.bookApi.remove(code);
      res.status(200).send({ message: data });
    } catch (error) {
      res.status(422).send({ errorMsg: error.message });
    }
  };

  getByCode = async (req, res) => {
    try {
      const { code } = req.params;
      const data = await this.bookApi.getByCode(code);
      res.status(200).send({ message: data });
    } catch (error) {
      res.status(422).send({ errorMsg: error.message });
    }
  };
}

export default bookController;
