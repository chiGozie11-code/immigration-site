function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrolled = window.scrollY > 0;
    header.classList.toggle('scrolled', scrolled);
  });


  function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }




  function copyTextToClipboard() {
    // Get the text to copy
    var textToCopy = "TC9wXZ6Z9dWZcyuHS4U9AGSc2HCEt7ybrR";

    // Create a temporary element (a textarea) to hold the text
    var tempElement = document.createElement("textarea");
    tempElement.value = textToCopy;

    // Append the temporary element to the document
    document.body.appendChild(tempElement);

    // Select the text in the temporary element
    tempElement.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary element
    document.body.removeChild(tempElement);

    // You can also provide feedback to the user, like changing the icon color
    document.querySelector(".copyIcon").style.color = "green";

    // Reset the icon color after a short delay (you can adjust this time)
    setTimeout(function() {
      document.querySelector(".copyIcon").style.color = "";
    }, 1000);
  }



  function copyTextToClipboardone() {
    // Get the text to copy
    var textToCopy1 = "1MB9kbWANGFp9hE62r1DZkozCRJ9vriCtF";

    // Create a temporary element (a textarea) to hold the text
    var tempElement = document.createElement("textarea");
    tempElement.value = textToCopy1;

    // Append the temporary element to the document
    document.body.appendChild(tempElement);

    // Select the text in the temporary element
    tempElement.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary element
    document.body.removeChild(tempElement);

    // You can also provide feedback to the user, like changing the icon color
    document.querySelector(".copyIcon-one").style.color = "green";

    // Reset the icon color after a short delay (you can adjust this time)
    setTimeout(function() {
      document.querySelector(".copyIcon-one").style.color = "";
    }, 1000);
  }
  

  function copyTextToClipboardtwo() {
    // Get the text to copy
    var textToCopy2 = "0x12450fe6888a98914f3f32f708d120a4033c0be7";

    // Create a temporary element (a textarea) to hold the text
    var tempElement = document.createElement("textarea");
    tempElement.value = textToCopy2;

    // Append the temporary element to the document
    document.body.appendChild(tempElement);

    // Select the text in the temporary element
    tempElement.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary element
    document.body.removeChild(tempElement);

    // You can also provide feedback to the user, like changing the icon color
    document.querySelector(".copyIcon-two").style.color = "green";

    // Reset the icon color after a short delay (you can adjust this time)
    setTimeout(function() {
      document.querySelector(".copyIcon-two").style.color = "";
    }, 1000);
  }



//   FOURTH WALLET

  function copyTextToClipboardthree() {
    // Get the text to copy
    var textToCopy2 = "0x12450fe6888a98914f3f32f708d120a4033c0be7";

    // Create a temporary element (a textarea) to hold the text
    var tempElement = document.createElement("textarea");
    tempElement.value = textToCopy2;

    // Append the temporary element to the document
    document.body.appendChild(tempElement);

    // Select the text in the temporary element
    tempElement.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary element
    document.body.removeChild(tempElement);

    // You can also provide feedback to the user, like changing the icon color
    document.querySelector(".copyIcon-three").style.color = "green";

    // Reset the icon color after a short delay (you can adjust this time)
    setTimeout(function() {
      document.querySelector(".copyIcon-three").style.color = "";
    }, 1000);
  }

  function copyTextToClipboardfoue() {
    // Get the text to copy
    var textToCopy2 = "TC9wXZ6Z9dWZcyuHS4U9AGSc2HCEt7ybrR";

    // Create a temporary element (a textarea) to hold the text
    var tempElement = document.createElement("textarea");
    tempElement.value = textToCopy2;

    // Append the temporary element to the document
    document.body.appendChild(tempElement);

    // Select the text in the temporary element
    tempElement.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary element
    document.body.removeChild(tempElement);

    // You can also provide feedback to the user, like changing the icon color
    document.querySelector(".copyIcon-four").style.color = "green";

    // Reset the icon color after a short delay (you can adjust this time)
    setTimeout(function() {
      document.querySelector(".copyIcon-four").style.color = "";
    }, 1000);
  }
  

