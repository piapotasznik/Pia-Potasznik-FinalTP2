class Validations {
  static validateBookData = (book) => {
    if (!book || typeof book !== "object") {
      throw new Error("Los datos del libro no son válidos");
    }

    if (!book.code || !book.title || !book.author) {
      throw new Error("Debe proporcionar código, título y autor del libro");
    }

    if (
      book.state !== "disponible" &&
      book.state !== "alquilado" &&
      book.state !== "no-apto"
    ) {
      throw new Error(
        'El estado del libro debe ser "disponible", "alquilado" o "no-apto"'
      );
    }
  };

  static sendNotification = (message) => {
    console.log(`[Notificación Externa] ${message}`);

  };
}

export default Validations;