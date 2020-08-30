
"use strict";

function compress(str) {
    var setstr = Array.from(new Set(str)).join("");
    var symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789 \n!\"#$%&'()*+,-.:;<=>?@[]^_`{|}";
    for (var i = 0; i < setstr.length; i++) {
        var a = symbols.indexOf(setstr[i]);
        symbols = symbols.slice(0,a)+symbols.slice(a+1,symbols.length);
    }
    alert(symbols);
    var alpha = setstr + symbols;
    var counter = 0;
    for (var i = 0; i < alpha.length; i++) {
        for (var j = 0; j < alpha.length; j++) {
            if (counter<symbols.length&&("/"+symbols[counter]+"/"+alpha[i]+alpha[j]+"/"+str.split(alpha[i]+alpha[j]).join(symbols[counter])).length<str.length) {
                str = "/"+symbols[counter]+"/"+alpha[i]+alpha[j]+"/"+str.split(alpha[i]+alpha[j]).join(symbols[counter]);
                counter++;
            }
        }
    }
    for (var i = 0; i < alpha.length; i++) {
        for (var j = 0; j < alpha.length; j++) {
            if (counter<symbols.length&&("/"+symbols[counter]+"/"+alpha[i]+alpha[j]+"/"+str.split(alpha[i]+alpha[j]).join(symbols[counter])).length==str.length) {
                str = "/"+symbols[counter]+"/"+alpha[i]+alpha[j]+"/"+str.split(alpha[i]+alpha[j]).join(symbols[counter]);
                    counter++;
            }
        }
    }
    if (("/~/\\/\\//"+str.split("//").join("~")).length<str.length) {
        str = "/~/\\/\\//"+str.split("//").join("~");
        counter++;
    }
    return str;
}
