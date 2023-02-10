const apiKey = '9a129acec04ba9119fb65a66227b402a';
const baseUrl = 'https://api.themoviedb.org/3/';

class MovieService{
    async getPopular(page = 1, lang = 'en-US'){
        const url = `${baseUrl}movie/popular?api_key=${apiKey}&language=${lang}&page=${page}`;
        const response = await fetch(url)
        return await response.json()
    }
    async getGenres(){
        const url = `${baseUrl}genre/movie/list?api_key=${apiKey}&language=en-US`;
        const response = await fetch(url)
        return await response.json()
    }
}

export default new MovieService();