$(document).ready(function(){
    getMessage(function(str){
        console.log("Response: " + str);
        $(document.body).prepend("<p class=\"wt-msg\">"+str+"</p>");
    }); 
});

//should be very similar to profile.js.erb in the Rails Server code
//pass in the id for the profile
function getMessage(callback){
    var x = new XMLHttpRequest();
    var u = "https://walkie-talkie.herokuapp.com/";
    //var u ="http://localhost:3000/"; 

    /*var url =  u + id + "/get-message";
    x.open("DELETE", url);
    */
    var url = u + "next-message";
    x.open("GET", url);
    x.responseType = 'json';
    x.onload = function() {
        // Parse and process the response from Google Image Search.
        response = x.response;
        if(!response)
            return false;
        else
            callback(response.text);
            return response.text;
        return;
    };
    x.onerror = function() {
        console.log("Error getting message");
        return false;
    };
    x.send();
}
