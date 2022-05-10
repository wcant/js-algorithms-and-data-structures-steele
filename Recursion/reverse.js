function reverse(str){
    if (str.length === 0) return '';
    let revStr = str.slice(str.length-1);
    return revStr + reverse(str.slice(0,str.length-1));
  }

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'