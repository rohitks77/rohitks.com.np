// Function to display the message in the response div and stop redirection
  function displayMessage(message, isError = false) {
    const responseDiv = document.getElementById('response');

    responseDiv.innerText = message;
    responseDiv.style.display = 'block';
    responseDiv.style.color = isError ? 'red' : 'green'; // Set text color based on error or success

    // Clear message after 7 seconds
    setTimeout(() => {
      responseDiv.innerText = '';
      responseDiv.style.display = 'none';
    }, 7000); // 7 seconds

    // Prevent default form submission
    return false;
  }

  // Function to handle form submission
  function submitForm() {
    // Get form data
    const formData = new FormData(document.querySelector("form[name='contact']"));

    // Send form data asynchronously
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData).toString()
    })
    .then(response => {
      if (response.ok) {
        handleFormSubmissionSuccess();
      } else {
        handleFormSubmissionError();
      }
    })
    .catch(error => {
      handleFormSubmissionError();
    });

    // Prevent default form submission
    return false;
  }

  // Function to handle successful form submission
  function handleFormSubmissionSuccess() {
    displayMessage('Form submitted successfully!');
    // Clear form data
    document.querySelector("form[name='contact']").reset();
  }

  // Function to handle form submission errors
  function handleFormSubmissionError() {
    displayMessage('Form submission failed. Please try again.', true);
  }

  // Add event listener for form submission
  document.querySelector("form[name='contact']").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
    // Submit form asynchronously
    submitForm();
  });
// form submission netlify code end here

    const video_btn = document.querySelector(".video_btn");
    const content_btn = document.querySelector(".content_btn");
    const all_btn = document.querySelector(".all_btn");

    const content_port = document.querySelectorAll("#content_strategist_portfolio");
    const video_port = document.querySelectorAll("#video_editing_portfolio");

    all_btn.addEventListener("click", () => {
        content_port.forEach(item => {
            item.style.display = "flex";
            item.style.flexDirection = "column";
        });
        video_port.forEach(item => {
            item.style.display = "flex";
            item.style.flexDirection = "column";
        });
    });

    video_btn.addEventListener("click", () => {
        video_port.forEach(item => {
            item.style.display = "flex";
            item.style.flexDirection = "column";
        });
        content_port.forEach(item => {
            item.style.display = "none";
        });
    });

    content_btn.addEventListener("click", () => {
        content_port.forEach(item => {
            item.style.display = "flex";
            item.style.flexDirection = "column";
        });
        video_port.forEach(item => {
            item.style.display = "none";
        });
    });


    const previous_btn = document.querySelector("#previous_icon");
    const next_btn = document.querySelector("#next_icon");
    const portfolio_container = document.querySelector(".portfolio_bottom_part");
    const movePrevious = () => {
        // alert("Previous clicked");
        portfolio_container.scrollLeft -= 350; // Adjust the scroll amount as needed
    };

    const moveNext = () => {
        // alert("Next clicked");
        portfolio_container.scrollLeft += 350; // Adjust the scroll amount as needed
    };

    previous_btn.addEventListener("click", movePrevious);
    next_btn.addEventListener("click", moveNext);


// slide menu code here start
const menu_open = document.querySelector(".right_nav");
const menu_close = document.querySelector(".right_nav ul");
  function SclideMenu(){
     menu_open.style.display="block";
     menu_open.style.animation="slidemenu 2s forwards";
     
     menu_close.addEventListener("click",()=>{
        // alert("clicke");
        const myTimeout = setTimeout(Close, 300);
        function Close(){
            menu_open.style.display="none";
            clearTimeout(myTimeout);
        }
        
     })
  }
  



    const like = document.querySelector(".fa-thumbs-up");
    let isLiked = false; // Variable to track whether the icon is liked or not

    like.addEventListener("click", () => {
        isLiked = !isLiked; // Toggle the like state
        if (isLiked) {
            like.style.color = "yellow"; // Set color to red if liked
        } else {
            like.style.color = "white"; // Set color to default if not liked
        }
    });

//     // form submisssion javascript code here

//     function selectInterest(button, interest) {
//         // Do something with the selected interest (e.g., store it in a variable or display it)
//         console.log("Selected Interest:", interest);

//         // Remove the 'selected' class from all buttons
//         document.querySelectorAll('.intrest button').forEach(function (btn) {
//             btn.classList.remove('selected');
//         });

//         // Add the 'selected' class to the clicked button
//         button.classList.add('selected');
//     }
// // 
// document.getElementById("myForm").addEventListener("submit", function(event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Get form data
//         var formData = new FormData(this);

//         // Send form data to server using AJAX
//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", "submit.php", true);
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 document.getElementById("response").innerHTML = xhr.responseText;
//                             // Display success message
//         showMessage("Message sent successfully!", "green");

//                 // Clear form fields after successful submission
//                 document.getElementById("myForm").reset();

//             }
//         };
//         xhr.send(formData);
//     });

//     function showMessage(message, color) {
// var messageNode = document.createTextNode(message);
// var messageDiv = document.getElementById("response");
// messageDiv.appendChild(messageNode);
// messageDiv.style.color = color;
// messageDiv.style.marginTop = "10px";
// messageDiv.style.fontWeight = "bold";
// setTimeout(function() {
//     messageDiv.textContent = ''; // Clear the message after 3 seconds
// }, 3000);
// }
