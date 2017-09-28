var friends=['jake','troup','john','dan','bill'];
var plural=('line')

for (var f= 0; f <= 4 ; f++){
    console.log(friends[f]);
    for (var i= 99; i >= 3; i--){
        console.log( i+' lines of code in the file, ' + i + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out, '+ (i-1) + ' lines of code in the file');
    }
    if(i==2){
        console.log(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out, '+ (i-1) + ' line of code in the file');
    }
    
        console.log((i-1) +' line of code in the file '+ (i-1) +' line of code ' + friends[f] + ' strikes out, clears it all out, no more lines of code in the file');
  
        
  
}

   
