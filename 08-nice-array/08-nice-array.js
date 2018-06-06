function isNice(arr){
  if(arr.length === 0) {
  return false;
  }
  let nice = true;
  for(i in arr) {
    if(arr.includes(arr[i]+1) || arr.includes(arr[i]-1)) {
    } else {
    nice = false;
    }
  }
  return nice;
};

