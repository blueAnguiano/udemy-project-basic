const path = require('path');

const __render = (file, response) => {
    return response.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuoteController {
    async index(request, response) {
        __render('quote', response);
    }


}

module.exports = new QuoteController();