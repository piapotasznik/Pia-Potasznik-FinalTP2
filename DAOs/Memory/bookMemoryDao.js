import {sendNotification} from "../utils/validations.js";

class bookMemoryDao{
     constructor(){
          this.memory = [];
     }

        create = async (book) => {
          try {
            this.memory.push(book);
            return await book;
          } catch (error) {
            throw error;
          }
        };
      
        getAll = async () => {
          try {
            const books = [...this.memory];
            return books;
          } catch (error) {
            throw error;
          }
        };
      
        remove = async (code) => {
          try {
            const index = this.memory.findIndex((book) => book.code === code);
      
            if (index !== -1) {
              const removedBook = this.memory.splice(index, 1)[0];
      
              if (this.memory.length === 0) {
                sendNotification("No hay libros disponibles para alquilar.");
              } else {
                sendNotification("La situación de alquiler se ha normalizado.");
              }
      
              return removedBook;
            } else {
              throw new Error("Libro no encontrado");
            }
          } catch (error) {
            throw error;
          }
        };
     
        getByCode = async (code) => {
          try {
            const book = this.memory.find((b) => b.code === code);
      
            if (book) {
              return book;
            } else {
              throw new Error("Libro no encontrado");
            }
          } catch (error) {
            throw error;
          }
        };
}
export default bookMemoryDao