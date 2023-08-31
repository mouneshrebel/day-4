//2. Use the rest countries API url -> https://restcountries.com/v2/all and display all the country flags in console
//setting up http request
var xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");
xhr.send();

//Setting up a listner where server listens to our request 
xhr.onload=function(){
    //processes the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //converts raw into js notation format 
         var data=JSON.parse(xhr.response);
            // console.log(data);
            for(var i=0; i<data.length; i++){
                console.log(data[i].name + " : "+ data[i].flag);
            }
    }else{
        //you should print the error 
        console.log("Data is not available");
    }
}
/*Output 
Afghanistan : https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
allflags.js:15 Åland Islands : https://flagcdn.com/ax.svg
allflags.js:15 Albania : https://flagcdn.com/al.svg
allflags.js:15 Algeria : https://flagcdn.com/dz.svg
allflags.js:15 American Samoa : https://flagcdn.com/as.svg
allflags.js:15 Andorra : https://flagcdn.com/ad.svg
allflags.js:15 Angola : https://flagcdn.com/ao.svg
allflags.js:15 Anguilla : https://flagcdn.com/ai.svg
allflags.js:15 Antarctica : https://flagcdn.com/aq.svg
allflags.js:15 Antigua and Barbuda : https://flagcdn.com/ag.svg
allflags.js:15 Argentina : https://flagcdn.com/ar.svg
.
.
.
*/