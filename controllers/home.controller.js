const path = require('path');

const __render = (file, response) => {
    return response.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class HomeController {
    async index(request, response) {
        __render('home', response);
    }

    async about(request, response) {
        __render('about', response);
    }

}

module.exports = new HomeController();