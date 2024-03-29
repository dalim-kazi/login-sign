class GeneralError extends Error {
    constructor(message, code = 500) {
      super(message);
      this.name = this.constructor.name;
      this.code = code;
    }
  
    toJSON() {
      return {
        error: {
          name: this.name,
          message: this.message,
          code: this.code,
        },
      };
    }
  }
  
  class BadRequest extends GeneralError {
    constructor(message) {
      super(message, 400);
    }
  }
  
  class NotFound extends GeneralError {
    constructor(message) {
      super(message, 404);
    }
  }
  
class Unauthorized extends GeneralError{
  constructor(message) {
      super(message,401)
    }
  }
  module.exports = {
    GeneralError,
    BadRequest,
    NotFound,
    Unauthorized
  };