function batchInterceptor(instance) {
    instance.interceptors.request.use(request => {
    request.url = `${request.baseAPI}${request.url}`;
    request.params = {
        ...request.params
    }
    return request;
    }, error => {
        return Promise.reject(error)
    });
    }

export default batchInterceptor;