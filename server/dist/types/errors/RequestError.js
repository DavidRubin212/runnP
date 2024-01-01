class RequestError extends Error {
    constructor(message, status) {
        super(message);
        this.statusCode = status;
    }
}
export default RequestError;
//# sourceMappingURL=RequestError.js.map