let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apikey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apikey")) {
       window.open("enter-apikey.html",);
    }
       return localStorage.getItem("apikey");
   }