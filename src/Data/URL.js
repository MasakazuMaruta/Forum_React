function getUrl(){
    return "localhost:8080";
}

function getFormUrl(){
    return getUrl() + "/api/form";
}

function getLoginUrl(){
    return getUrl() + '/login';
}

function getRegisterUrl(){
    return getUrl() + '/login';
}

module.exports = { getUrl, getFormUrl, getLoginUrl,getRegisterUrl };