// Function to open a mailto link with a subject and body
function sendMail(subject, body) {
    const mailToLink = `mailto:shubhampjpt87@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailToLink;
  }
  
  // (Optional) Add event listeners to trigger email sending
  // For example, clicking on a "Contact Me" button
  