const initial = document.getElementById('initial-content');
const transformed = document.getElementById('transformed-content');
const namedCodeButton = document.getElementById('named-code-button');
const numericCodeButton = document.getElementById('numeric-code-button');
const copyButton = document.getElementById('copy-button');

const namedCodes = {
    á:"&aacute;",
    Á:"&Aacute;",
    é:"&eacute;",
    É:"&Eacute;",
    í:"&iacute;",
    Í:"&Iacute;",
    ó:"&oacute;",
    Ó:"&Oacute;",
    ú:"&uacute;",
    Ú:"&Uacute;",
    ñ:"&ntilde;",
    Ñ:"&Ntilde;"
};


const numericCodes = {
    á:"&#225;",
    Á:"&#193;",
    é:"&#233",
    É:"&#201",
    í:"&#237;",
    Í:"&#205;",
    ó:"&#243;",
    Ó:"&#211;",
    ú:"&#250;",
    Ú:"&#218;",
    ñ:"&#241;",
    Ñ:"&#209;"
};

namedCodeButton.addEventListener('click', transformNamed);
numericCodeButton.addEventListener('click', transformNumeric);

function transformNumeric(){
    let initialContent = initial.value;
    let transformedContent = initialContent.replace(/á|Á|é|É|í|Í|ó|Ó|ú|Ú|ñ|Ñ/g, function(code){
        return numericCodes[code];
    });
    transformed.value = transformedContent;
}

function transformNamed(){
    let initialContent = initial.value;
    let transformedContent = initialContent.replace(/á|Á|é|É|í|Í|ó|Ó|ú|Ú|ñ|Ñ/g, function(code){
        return namedCodes[code];
    });
    transformed.value = transformedContent;
}

//Copy
copyButton.addEventListener('click', copyClipboard);

function copyClipboard(){
    let copyText = transformed.value;
    console.log(copyText)
    
    transformed.select();
    transformed.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
    
    alert("Texto Copiado.");
}
