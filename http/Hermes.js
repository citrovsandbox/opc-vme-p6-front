/**
 * Petit client Http permettant de gérer les requêtes
 * Ainsi que la mise en cache des données.
 * Très utile et réutilisable.
 * A consommer...sans modération !
 * 
 * MIT Licence - Victor MAHE 2019
 */
const Hermes = {
    _url:'http://42615b1d.ngrok.io',
    _cache:{},
    _isDebugMode:false,
    /**
     * @public
     * Fait un appel fetch() en method GET
     * @String url L'url du point d'API
     * @Object data La donnée au format Objet à envoyer
     * @return {Object}
     */
    get: function (uri, data) {
        let sFullUrl = this._url + uri;
        return new Promise(function(fnResolve, fnReject) {
            fetch(sFullUrl, {
                method: 'GET',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response);
                response.json().then((data) => {
                    console.log(data);
                    fnResolve(data);
                }).catch((err) => {
                    fnReject(err);
                });
            }).catch((err) => {
                fnReject(err);
            });
        });
    },
    /**
     * @public
     * Fait un appel fetch() en method POST
     * @String uri L'uri du point d'API
     * @Object data La donnée au format Objet à envoyer
     * @return {Object}
     */
    post: function (uri, data) {
        let sFullUrl = this._url + uri;
        return new Promise(function(fnResolve, fnReject) {
            fetch(sFullUrl, {
                method: 'POST',
                headers:{
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            }).then((response) => {
                console.log(response);
                response.json().then((parsedData) => {
                    fnResolve(parsedData);
                }).catch((err) => {
                    fnReject(err);
                });
            }).catch((err) => {
                fnReject(err);
            });
        });
    },
    /**
     * @public
     * Fait un appel fetch() en method PUT
     * @String uri L'uri du point d'API
     * @Object data La donnée au format Objet à envoyer
     * @return {Object}
     */
    put: function (uri, data) {
        console.log(data);
        let sFullUrl = this._url + uri;
        console.log(sFullUrl);
        return new Promise(function(fnResolve, fnReject) {
            fetch(sFullUrl, {
                method: 'PUT',
                headers:{
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            }).then((response) => {
                console.log(response);
                response.json().then((parsedData) => {
                    fnResolve(parsedData);
                }).catch((err) => {
                    fnReject(err);
                });
            }).catch((err) => {
                fnReject(err);
            });
        });
    },
    /**
     * @public
     * Fait un appel fetch() en method PUT
     * @String uri L'uri du point d'API
     * @Object data La donnée au format Objet à envoyer
     * @return {Object}
     */
    patch: function (uri, data) {
        let sFullUrl = this._url + uri;
        return new Promise(function(fnResolve, fnReject) {
            fetch(sFullUrl, {
                method: 'PATCH',
                headers:{
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            }).then((response) => {
                console.log(response);
                response.json().then((parsedData) => {
                    fnResolve(parsedData);
                }).catch((err) => {
                    fnReject(err);
                });
            }).catch((err) => {
                fnReject(err);
            });
        });
    },
    /**
     * @public
     * Fait un appel fetch() en method PATCH
     * @String uri L'uri du point d'API
     * @Object data La donnée au format Objet à envoyer
     * @return {Object}
     */
    delete: function (uri, data) {
        let sFullUrl = this._url + uri;
        return new Promise(function(fnResolve, fnReject) {
            fetch(sFullUrl, {
                method: 'DELETE',
                headers:{
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            }).then((response) => {
                console.log(response);
                response.json().then((parsedData) => {
                    fnResolve(parsedData);
                }).catch((err) => {
                    fnReject(err);
                });
            }).catch((err) => {
                fnReject(err);
            });
        });
    },
    getCache: function () {
        return this._cache;
    }
}

module.exports = Hermes;
/**
 * Code A : AS59ET47
 * uuidUser : 6e22675c-4987-11e9-b27a-08606ede4d1b
 */