class ApiResponse {
  constructor(statusCode, message="Success", data) {
    this.statusCode = this.statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode<400;
  }
}