var Http = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        resolve(JSON.parse(request.responseText));
                    } else {
                        reject(request.statusText);
                    }
                }
            };
            request.open('GET', url);
            request.send();
        });
    }
}