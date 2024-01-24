class HomeController {
    async index(request, response) {
        return response.send({ message: 'Hello World'});
    }
}

module.exports = new HomeController();