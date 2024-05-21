function getUrl(){
    return "localhost:8080";
}

function getFormUrl(){
    return getUrl() + "/api/form";
}

function getLoginData(){
    return getUrl();
}

module.exports = { getUrl, getFormUrl, getLoginData };