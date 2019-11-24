var lab_scheme = {
    'NO': ['###', '###', '###'],
    'LR': ['###', '   ', '###'],
    'LT': ['# #', '  #', '###'],
    'BR': ['###', '#  ', '# #'],
    'LB': ['###', '  #', '# #'],
    'TR': ['# #', '#  ', '###']
};

var rendered = render([
    ['NO', 'BR', 'LR', 'LB', 'NO'],
    ['LR', 'LT', 'NO', 'TR', 'LR']
]);

// ###############
// ####       ####
// #### ##### ####
// #### ##### ####
//      #####     
// ###############

//MY CODE GOES HERE
function render(map) {
    var render = [];
    for(var i = 0, len = map.length; i < len; i++) {
        var line = map[i];
        for(var j = 0; j < line.length; j++) {
            var block = lab_scheme[line[j]];
            for(var n = 0; n < block.length; n++) {
                var renderLine = i * block.length + n;
                if(!render[renderLine]) render[renderLine] = '';
                render[renderLine] += block[n];
            }
        }
    }
    return render;
}
function stringifyRender(render) {
    return render.reduce((accum, line) => accum += '\n' + line);
}
console.log(rendered);
console.log(stringifyRender(rendered));