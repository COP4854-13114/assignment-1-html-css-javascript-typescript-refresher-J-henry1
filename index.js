

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