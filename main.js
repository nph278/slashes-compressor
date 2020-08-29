
"use strict";

function compress(str) {
    if (/[^a-zA-Z0-9 ]/.test(str)){
        return "Please only use a-z + A-Z + 0-9 + space";
    } else {
        var alpha = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM 1234567890";
        var symbols = "!\"#$%&'()*+,-.:;<=>?@[]^_`{|}~";
        var counter = 0;
        for (var i = 0; i < alpha.length; i++) {
            for (var j = 0; j < alpha.length; j++) {
                if (counter<symbols.length&&("/"+symbols[counter]+"/"+alpha[i]+alpha[j]+"/"+str.split(alpha[i]+alpha[j]).join(symbols[counter])).length<str.length) {
                    str = "/"+symbols[counter]+"/"+alpha[i]+alpha[j]+"/"+str.split(alpha[i]+alpha[j]).join(symbols[counter]);
                    counter++;
                }
            }
        }
        return str;
    }
}
