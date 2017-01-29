function getPage(url, method) {
    var x = new XMLHttpRequest();
    x.open(method, url);
    //x.responseType = 'json';
    x.responseType = 'document';
    x.onload = function() {
        // Parse and process the response from Google Image Search.
        html = x.response.children[0];
        body = html.children[1];
        container = body.children[0];
        renderHtml(container)
            return;
    };
    x.onerror = function() {
        renderHtml('<p>Network error.</p>');
        return;
    };
    x.send();

}

function renderHtml(html) {
    $('div#content').html(html);
    
    $('div#content a').bind("click", function(){
        link = $(this).attr('href');
        method = $(this).attr('data-method');
        if(method == null)
            method = "GET";
        getPage(link, method);
    });
    
}

document.addEventListener('DOMContentLoaded', function() {
    //getPage("http://localhost:3000", 'GET');
    getPage("http://walkie-talkie.herokuapp.com", 'GET');
});
