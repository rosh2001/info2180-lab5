window.addEventListener('load', ()=>{

    let sanitizedUrl;
    let sanitizedVal;

    let heading = document.querySelector("header h1");
    heading.style.color = "#fff";
    heading.style.transition = "all 2s ease-in-out";
    
    let resultDiv = document.querySelector("div#result");
    document.querySelector("button#lookup").addEventListener("click", (event)=>{
        sanitizedVal = document.querySelector("input#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        sanitizedUrl = `world.php?country= ${sanitizedVal}`.replace( /"[^-0-9+@#/%?~_|!:,.;\(\)]"/g,'');
        ajaxCall(event);

    });

    document.querySelector("button#citylookup").addEventListener("click", (event)=>{
        sanitizedVal = document.querySelector("input#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        sanitizedUrl = `world.php?country= ${sanitizedVal}&context=cities`.replace( /"[^-0-9+@#/%?~_|!:,.;\(\)]"/g,'');
        ajaxCall(event);
    });

    let ajaxCall = (event) =>{
        event.preventDefault();
        fetch(sanitizedUrl, {method : 'GET'})
        .then(resp => resp.text())
        .then(info => {
            resultDiv.innerHTML = '';
            resultDiv.innerHTML = info;
        })
    }

    
});