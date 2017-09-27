module.exports = function zeros(expression) {
  expression = expression.split('*');
  var count2 = 0;
  var count5 = 0;
  for ( var i = 0; i < expression.length; i++){
      if (expression[i].indexOf('!!') === -1){
          expression[i] = Number(expression[i].slice(0,-1));
          for (var j = 1; j <= expression[i]; j++){
              if(j % 2 === 0) count2++;
              if(j % 5 === 0 && j % 25 !== 0) count5++;
              if(j % 25 === 0) count5 += 2;
          }
      }
      else {
          expression[i] = Number(expression[i].slice(0,-2));
          if (expression[i] % 2 === 0){
              for (j = 2; j <= expression[i]; j += 2){
                  if(j % 2 === 0) count2++;
                  if(j % 5 === 0 && j % 25 !== 0) count5++;
                  if(j % 25 === 0) count5 += 2;
              }
          }
          else {
              for (j = 1; j <= expression[i]; j += 2){
                  if(j % 2 === 0) count2++;
                  if(j % 5 === 0 && j % 25 !== 0) count5++;
                  if(j % 25 === 0) count5 += 2;
              }
          }
      }
  }
  return Math.min(count2, count5);
};