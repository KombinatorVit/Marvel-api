
class MarvelService {
_apiBase ='https://gateway.marvel.com:443/v1/public/';
_apiKey = 'apikey=12dc802311d5b78feee29b6e092de6dd';

    getRecource =async (url) => {
        let res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    getAllCharacters = () => {
        return this.getRecource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getCharacters = (id) => {
        return this.getRecource(`${this._apiBase}characters/${id}?&${this._apiKey}`);
    }
}

export default MarvelService;