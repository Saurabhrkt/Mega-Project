class ApiError extends Error {
  constructor( 
    
    statusCode = statusCode,
    message = "something went wrong"||message,
    errors = [],
    statck =""
){
    super(message)
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    if(statck){
      this.stack = stack;
    }else{
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export {ApiError};