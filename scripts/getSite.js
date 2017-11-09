let getBttn = $("#get-blog-button");
let link = document.getElementById('link');

getBttn.click(changeUrl);

let newUrl = 'https://static.wixstatic.com/sites/e889ee_ca74c3d7906860da7325a4f3a2996fa9_1449.json.z?v=3';
let urls = [];

$.get(newUrl, (response) => {
    console.log(response);
    let obj = response.data.document_data;

    Object.keys(obj).forEach((key) => {
        if(obj[key].type === 'ExternalLink'){
            urls.push(obj[key].url);
        }
    });

    urls = urls.filter(url => url.includes('wordpress.com'));
    changeUrl();
    console.log(urls);
});

function changeUrl(){
    let index = Math.floor((Math.random() * urls.length));
    link.href = urls[index];
}



