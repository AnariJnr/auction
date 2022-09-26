const auctionData = [];

var nameField = document.querySelector("#name");
var bidField = document.querySelector("#bid");
var submitBtn = document.querySelector("#submit_btn"); 
var topPage = document.querySelector(".top");


//submit button
submitBtn.addEventListener("click",function(e){
 e.preventDefault(); // prevent form from submiting

 if(nameField.value === ''){
    return alert("Enter name");
 }
 if(bidField.value === ''){
  return alert("Enter a value");
 }
 // auction object
   var auctioneers = {
    name: nameField.value,
    bid: bidField.value,
  }

  
  // pushing data from object to auction data 
  auctionData.push(auctioneers);
  console.log(auctionData);
  
  // sorting data so that the highest will be at the top
  auctionData.sort(function(a,b){
    return b.bid - a.bid;
  });
  // displaying data in auction data
  displayAuctionEvents(auctionData);

   maxBid(); 
   
 console.log(auctionData[0].name);

 var topPage = document.querySelector(".top");
 // display at top page
//  var stringTop2 = "The highest bid:" + auctionData[0].name + "," + " Bid:" + auctionData[0].bid;
 var stringTop = `<h2 class="top">The highest bid: ${cap(auctionData[0].name)}, Bid: <strong>$${auctionData[0].bid}</strong></h2>`;
 topPage.innerHTML = stringTop;

 console.log(stringTop);
  
console.log(maxBid());
   
//reset form
 document.forms[0].reset();
});

// max number for bid function
 function maxBid(){
  const bidsOnly = auctionData.map(function(item){
    return item.bid;  
 });
 return Math.max(...bidsOnly);
};

// sort 



// displayAuctionEvents function

function displayAuctionEvents(array){
 // display all details of affairs
 var product_display_bid_Section = document.querySelector("#product_display_bid_Section");
 var displayDetails = array.map(function(item){
   return ` <div class="productHeadingContainer">
            <p class="invisible">${item.name}</p>
            <p>${cap(item.name)} bid: <strong>$${item.bid}</strong> for this low rider</p>
            <button class="del btn btn-sm btn-success">Delete</button>
            </div>`;

 });
 displayDetails = displayDetails.join(" ");
 product_display_bid_Section.innerHTML = displayDetails;

//  setting up the delete button
var deleteButtons = document.querySelectorAll(".del");
console.log(deleteButtons);

deleteButtons.forEach(function(deleteButton){
deleteButton.addEventListener("click",function(e){
 var targetIndex = e.currentTarget.parentElement.children[0].innerHTML;
//  console.log(targetIndex);

// searching object of array and picking out the particular object you want
 var deleteItem = auctionData.find(function(val){
      if(val.name === targetIndex){
        return val;
      }
      
 });

//  picking out the index of an item in an array 
 var index = auctionData.indexOf(deleteItem);
 console.log(index);

 if(index > -1){
    auctionData.splice(index,1);
 }

 console.log(auctionData);

//  sorting the array
 auctionData.sort(function(a,b){
  return b.bid - a.bid;
});
 displayAuctionEvents(auctionData);

//  error check if array is empty 
if(auctionData.length === 0){
  return topPage.innerHTML = "Welcome";
}
 var stringTop = `<h2 class="top">The highest bid: ${cap(auctionData[0].name)}, Bid: <strong>$${auctionData[0].bid}</strong></h2>`;
 topPage.innerHTML = stringTop;
});

});

}


// i want the highest bidder name and amount to show att the top

// capitalize and trim string 
function cap(ev) {
 return ev.charAt(0).trim().toUpperCase() + ev.slice(1);
}

// test part

// ==============================================
// var hello = " hello";

// var theRest = hello.charAt(0).toUpperCase() + hello.slice(1); ;

// console.log(theRest.trim());

// console.log( cap(hello));

// ==============================================

var arr = [
  {
    firstName: "Anari",
    id: 3,
  },

  {
    firstName: "John",
    id: 4,
  }
];

// let results = arr.find(val => val.id ===3);
let results = arr.find(function(val){
  if(val.firstName === "John"){
    console.log(val);
  }
});
console.log(results);


function isZero(num){
  // if(num.charAt(num.length() - 1))
   if(num % 2 !== 0 && num % 10 !== 5){
    console.log("its odd and does not end with 5 ");
}else {
  console.log("dame");
}
}
isZero(13);


