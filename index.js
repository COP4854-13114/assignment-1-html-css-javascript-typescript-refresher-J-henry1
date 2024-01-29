

function updateImage(imageSource){
    document.getElementById('image').src = imageSource;
    
}


function showReviews(){
   
    var reviewHistory =  document.getElementById('reviewHistory');
    var inputField = document.getElementById('reviewInput')

    if(inputField.style.display === 'block'){
        
        reviewHistory.style.display = 'block';
        inputField.style.display = 'none';
    }
    else{
        reviewHistory.style.display = 'block';
    }

    
}// end showReviews function

function writeReview(){

    inputField = document.getElementById('reviewInput');
    reviewHistory = document.getElementById('reviewHistory');

    if(reviewHistory.style.display === 'block'){
        reviewHistory.style.display = 'none';
        inputField.style.display = 'block';
        
    }
    else{
        inputField.style.display = 'block';
    }
}//end writeReview function

//set state of starsAdded
var starsAdded = false;

function starRating(){
    
    //gets the rating selected by user
    var rating = document.getElementById("rating").value

   

    if(!starsAdded){
        //creates star elemement, inserts icon, then appends star to the i element
        //checks if looped through value is equal to or less than the rating. If yes, make star
        //gold. if No, color star grey
    for(var i = 1; i <= 5; i++){
        var starElement = document.createElement('i');   
        starElement.className = 'fa fa-star';
        var targetDiv = document.getElementById('starContainer');
        targetDiv.appendChild(starElement)
        

        if(i <= rating){
            starElement.style.color = 'gold';
        }
        else{
            starElement.style.color = 'grey';
        }
    }
    
    //update stars added state/flag to true once stars are created to keep simutanious entries
    starsAdded = true;
}//end if starsAdded

}
