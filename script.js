

var friends=['jake','troup','john','dan','bill'];
var plural=('line')



   


document.addEventListener('DOMContentLoaded',function(){
    var button=document.createElement('button')
    var text=document.createTextNode('sing');
    button.appendChild(text);
    document.body.appendChild(button);
  
});





addEventListener('click',function(){
   
  
    for (var f= 0; f <= 4 ; f++){
       
        var friend=document.createElement('div');
        var header=document.createElement('h3');
        header.style.textTransform="uppercase";
        document.body.appendChild(friend);
        friend.appendChild(header);
        fname=document.createTextNode(friends[f]);
        header.appendChild(fname);
        
        
      
    
        for (var i= 99; i >= 3; i--){
           var song=document.createElement('p');
           friend.appendChild(song);
           fsong=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out, '+ (i-1) + ' lines of code in the file');
           song.appendChild(fsong);
        }
        if(i==2){
           var song=document.createElement('p');
           friend.appendChild(song);
           dname=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out, '+ (i-1) + ' line of code in the file');
            song.appendChild(dname);
        }
           var song=document.createElement('p');
           friend.appendChild(song);
           sname=document.createTextNode((i-1) +' line of code in the file '+ (i-1) +' line of code ' + friends[f] + ' strikes out, clears it all out, no more lines of code in the file')
            song.appendChild(sname);
      
    }
    
})