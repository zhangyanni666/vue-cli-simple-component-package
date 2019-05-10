(function (factory) {
    if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        window.Base64 = factory()
    }
})(function () {
    var base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var alphabet = base64.split('')
    var prefix = '0000000';

    return {
        /**
         * 加密算法实现
         */
        encode:function(plainText){
            
            plainText = escape(plainText);
            
            var groups = plainText.split(/(.{3})/);
            
            groups = groups.map(function (group) {
                if (group.length > 0) {
                    group = group.replace(/(.)/g, function (char) {
                        var code = char.charCodeAt();
                        var binCode = code.toString(2);
                        //补全8位二进制
                        return (prefix + binCode).slice(-8)
                    })
    
                    var sixbin = group.split(/(.{6})/);
    
                    sixbin = sixbin.map(function (bin) {
                        if (bin.length > 0) {
                            if (bin.length < 6) {
                                //如果不足6位，尾部补0
                                bin = (bin + prefix).substr(0, 6)
                            }
                            var code = parseInt(bin, 2); // 二进制转十进制
                            return alphabet[code]
                        }
                    })
    
                    sixbin = sixbin.join('');
    
                    if (sixbin.length < 4) {
                        sixbin = (sixbin + '==').substr(0, 4)
                    }
                    return sixbin
                }
            })
    
            return groups.join('')
        },

        /**
         * 解密算法实现
         */
        decode:function(cipherText){
            var prefix = '0000000';
    
            var groups = cipherText.split(/(.{4})/);
            groups = groups.map(function (group) {
                if (group.length > 0) {
                    // YWJj
                    if (group.indexOf('=') == -1) {
                        //24位二进制
                        group = group.replace(/(.)/g, function (char) {
                            var code = alphabet.indexOf(char);
                            var binCode = code.toString(2);
                            return (prefix + binCode).slice(-6)
                        })
    
                        var eightbin = group.split(/(.{8})/);
    
                        //三个八进制
                        eightbin = eightbin.map(function (bin) {
                            if (bin.length > 0) {
                                var code = parseInt(bin, 2); // 二进制转十进制
                                return String.fromCharCode(code)
                            }
                        })
                        return eightbin.join('')
                    } else {
                        var sixbin = group.replace(/(.)/g, function (char) {
                            if (char != '=') {
                                var code = alphabet.indexOf(char);
                                var binCode = code.toString(2);
                                return (prefix + binCode).slice(-6)
                            } else {
                                return ''
                            }
                        })
                        var eightbin = sixbin.split(/(.{8})/);
    
                        eightbin = eightbin.map(function (bin) {
                            if (bin.length == 8) {
                                var code = parseInt(bin, 2); // 二进制转十进制
                                return String.fromCharCode(code)
                            }
                        })
    
                        return eightbin.join('')
                    }
                }
            })
    
            return unescape(groups.join(''))
        }
    }
})