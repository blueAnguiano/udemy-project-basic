/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next - the response will be sent by the next function
 */

module.exports = (request, response, next) => {
    return response.status(404).send({message: 'Page not found'});
}