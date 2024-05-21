function getUrl(){
    return "http://localhost:8080";
}

function getFormUrl(){
    return getUrl() + "/api/form";
}

function getLoginUrl(){
    return getUrl() + '/login';
}

function getRegisterUrl(){
    return getUrl() + 'api/register';
}

module.exports = { getUrl, getFormUrl, getLoginUrl,getRegisterUrl };