const weekDAY= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function weekNumbersToWords(x){
  return (x < 1) || (x > 7) ? null : weekDAY[x];
}

// ouput 
weekDAY[0]
'Sunday'
