var bookmarkName = document.getElementById("bookmarkNameInput");
var websiteLink = document.getElementById("websiteLinkInput");


var bookmarkArray = [];


if( JSON.parse(localStorage.getItem("allInfo")) != null){
    bookmarkArray =  JSON.parse(localStorage.getItem("allInfo"))
    displayBookMark()
    
  
}

////add bookmark/////
function addBookmark(){
    var bookmark = {
        name:bookmarkName.value,
        site:websiteLink.value,
    }
    
    console.log(bookmarkArray)
    clear()

    if(validUrl()==true &&   validName()==true){

        var bookmark = {
            name:bookmarkName.value,
            site: websiteLink.value,
        }

        bookmarkArray.push(bookmark)
        displayBookMark()


    }
    else{
        alert(`Site Name or Url is not valid, Please follow the rules below :
        1)Site name must contain at least 3 characters
        2)Site URL must be a valid one`)
    }
    





    localStorage.setItem("allInfo" , JSON.stringify(bookmarkArray))

}




////display bookmark/////

function displayBookMark(){


    var cartona = ""

    for(var i = 1 ; i < bookmarkArray.length ; i++){
    
        cartona += `<tr>
        <td>${i}</td>
        <td>${bookmarkArray[i].name}</td>
        
        <td><a href="${bookmarkArray[i].site}"><button class="btn btn-success"><i class="fa-solid fa-eye"></i> visit</button>  </a></td>
    
        <td><button class="btn btn-danger" onclick="deleteElements(${i}), remove(${bookmarkArray[i].bookmark})" ><i class="fa-solid fa-trash"></i> Delete</button></td>
    </tr>
        `
        console.log(cartona)
       
    }
    document.getElementById("tbody").innerHTML = cartona
    
    }










    /////valid url & name///////

    function validUrl(){
        var urlRegex = /^https?:\/\//
      return urlRegex.test(websiteLink.value)
      
    }
  
    function validName(){
        var nameRegex = /^\w{3,}(\s+\w+)*$/
        return nameRegex.test(bookmarkName.value)
    }




    ////delete elements/////
    function deleteElements(idx){

        bookmarkArray.splice(idx , 1)
        displayBookMark()
       
    }


    function remove(idx){
        localStorage.removeItem("allInfo")
    }


///clear////

function clear(){
     bookmarkName.value="";
     websiteLink.value="";
}