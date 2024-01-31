

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

var reviewCount = 1;
var totalRating = [];


function calcAverageStars(totalRating) {

    var sum = 0;

    for (var i = 0; i < totalRating.length; i++) {
        sum += totalRating[i];
        console.log(sum);
    }

    var averageRating = sum / totalRating.length;

    console.log(averageRating);

    return averageRating;

    
    
}

var reviewFlag = false;

function saveReview(){
    
    

    // variables for review values
    var name = document.getElementById('reviewName').value;
    var header = document.getElementById('headerReview').value;
    var description = document.getElementById('reviewDescription').value;
    //parse float so that it doesnt save in array as string
    var starRating = parseFloat(document.getElementById('rating').value);

    //createing elements for each input field
    
    var reviewHeader = document.createElement('h3');
    var reviewName = document.createElement('p');
    var reviewDescription = document.createElement('p');
    var starContainer = document.createElement('i');

    //storing text content of each input value
    reviewHeader.textContent = "Review #"+ reviewCount + ":  " + header;
    reviewName.textContent = name;
    reviewDescription.textContent = description;

    reviewHistory = document.getElementById('reviewHistory')
    reviewHistory.appendChild(reviewHeader);

    //appending values to each element previously created
    for(var i = 1; i <= 5; i++){
        
        var starContainer = document.createElement('i');
        starContainer.className = "fa fa-star";
        

        if(starRating >= i){
            starContainer.style.color = 'gold';
        }
        else{
            starContainer.style.color = 'grey';

        }

        reviewHistory.appendChild(starContainer);
    }
    
    
    
    reviewHistory.appendChild(reviewName);
    reviewHistory.appendChild(reviewDescription);
    // reviewHeader.appendChild(reviewHeader);

    //counts reviews each time one is submitted
    reviewCount++;
    //push rating onto array
    totalRating.push(starRating);
 
    var averageStars = calcAverageStars(totalRating);

    var totalReviews = document.getElementById('totalReviews');

    //if not divided to whole number, only show 1 decimal place
    if(averageStars%1 !== 0){
        averageStars = averageStars.toFixed(1);
        totalReviews.innerHTML = "Average Rating: " + averageStars;
    }
   
        totalReviews.innerHTML = "Average Rating: " + averageStars;
    
    
    for(var j = 1; j <= 5; j++){

        var averageStarContainer = document.createElement('i');
        averageStarContainer.className = "fa fa-star";

        if(averageStars >= j){
            averageStarContainer.style.color = 'gold';
        }
        else{
            averageStarContainer.style.color = 'grey'
        }

        totalReviews.appendChild(averageStarContainer);
    }






    

  


}//end
































//set state of starsAdded
// var starsAdded = false;

// function starRating(){
    
//     //gets the rating selected by user
//     var rating = document.getElementById("rating").value

   

//     if(!starsAdded){
//         //creates star elemement, inserts icon, then appends star to the i element
//         //checks if looped through value is equal to or less than the rating. If yes, make star
//         //gold. if No, color star grey
//     for(var i = 1; i <= 5; i++){
//         var starElement = document.createElement('i');   
//         starElement.className = 'fa fa-star';
//         var targetDiv = document.getElementById('starContainer');
//         targetDiv.appendChild(starElement)
        

//         if(i <= rating){
//             starElement.style.color = 'gold';
//         }
//         else{
//             starElement.style.color = 'grey';
//         }
//     }
    
//     //update stars added state/flag to true once stars are created to keep simutanious entries
//     starsAdded = true;
// }//end if starsAdded

// }
