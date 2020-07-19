import axios from 'axios'

const flickrAppId = '671934968bbb0d59c92cac8fa7528aa5';

axios.defaults.baseURL = 'https://www.flickr.com/services/rest';

// axios.defaults.headers.common['Content-Type'] = 'application/json'

const responseBody = (response) => response.data;

const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody),
};

const Flickr = {
    search: (options) => 
        requests.get(
            `/?method=flickr.photos.search&api_key=${flickrAppId}&tags=${options.tags}&sort=${options.sort}&safe_search=${options.safeSearch}&content_type=${options.contentType}&media=${options.media}&per_page=${options.perPage}&page=${options.page}&format=json&nojsoncallback=1`
        )
}

export default Flickr
