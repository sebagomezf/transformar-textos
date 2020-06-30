
let regex_a = new RegExp("á", "g");
let regex_aa = new RegExp("Á", "g");
let regex_e = new RegExp("é", "g");
let regex_ee = new RegExp("É", "g");
let regex_i = new RegExp("í", "g");
let regex_ii = new RegExp("Í", "g");
let regex_o = new RegExp("ó", "g");
let regex_oo = new RegExp("Ó", "g");
let regex_u = new RegExp("ú", "g");
let regex_uu = new RegExp("Ú", "g");
let regex_n = new RegExp("ñ", "g");
let regex_nn = new RegExp("Ñ", "g");
let regex_dash = new RegExp("-", "g");
let regex_question1 = new RegExp("¿", "g");
let regex_question2 = new RegExp("\\?", "g");
let regex_exclamation1 = new RegExp("¡", "g");
let regex_exclamation2 = new RegExp("!", "g");





function transformarSVN(){

    
    // Signos
    let replace_dash = "&#45;"
    let replace_question1 = "&#191;"
    let replace_question2 = "&#63;"
    let replace_exclamation1 = "&#161;"
    let replace_exclamation2 = "&#33;"
    
    
    let actualContent = future.value;
    let pastContent = actualContent.replace(regex_a, replace_a).replace(regex_e, replace_e).replace(regex_i, replace_i).replace(regex_o, replace_o).replace(regex_u, replace_u).replace(regex_aa, replace_aa).replace(regex_ee, replace_ee).replace(regex_ii, replace_ii).replace(regex_oo, replace_oo).replace(regex_uu, replace_uu).replace(regex_n, replace_n).replace(regex_nn, replace_nn).replace(regex_dash, replace_dash).replace(regex_question1, replace_question1).replace(regex_question2, replace_question2).replace(regex_exclamation1, replace_exclamation1).replace(regex_exclamation2, replace_exclamation2);
    
    past.value = pastContent;
    
}



function transformarTIDE(){
    //á y Á
    let replace_a = "&#225;";
    let replace_aa = "&#193;";
    
    //é y É
    let replace_e = "&#233;";
    let replace_ee = "&#201;";
    
    //í e Í
    let replace_i = "&#237;";
    let replace_ii = "&#205;";
    
    //ó y Ó
    let replace_o = "&#243;";
    let replace_oo = "&#211;";
    
    //ú y Ú
    let replace_u = "&#250;";
    let replace_uu = "&#218;";
    
    //ñ y Ñ
    let replace_n = "&#241;";
    let replace_nn = "&#209;";
    
    // Signos
    let replace_dash = "&#45;"
    let replace_question1 = "&#191;"
    let replace_question2 = "&#63;"
    let replace_exclamation1 = "&#161;"
    let replace_exclamation2 = "&#33;"
    
    
    let actualContent = future.value;
    let pastContent = actualContent.replace(regex_a, replace_a).replace(regex_e, replace_e).replace(regex_i, replace_i).replace(regex_o, replace_o).replace(regex_u, replace_u).replace(regex_aa, replace_aa).replace(regex_ee, replace_ee).replace(regex_ii, replace_ii).replace(regex_oo, replace_oo).replace(regex_uu, replace_uu).replace(regex_n, replace_n).replace(regex_nn, replace_nn).replace(regex_dash, replace_dash).replace(regex_question1, replace_question1).replace(regex_question2, replace_question2).replace(regex_exclamation1, replace_exclamation1).replace(regex_exclamation2, replace_exclamation2);
    
    past.value = pastContent;
    
    return pastContent;
    
}




