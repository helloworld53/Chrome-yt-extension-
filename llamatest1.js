// fetch('http://127.0.0.1:8080/completion', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       'prompt': 'give me ONLY a one word response'
//     }).then(response => {
//       // console.log(response)
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       // Return the response s
//       return response;
//   })
//   .catch(error => {
//       console.error('Error:', error);
//       throw error;
//   })
//   })
function gettheTranscript(){
  //more button
   //textareaElement.textContent = '';
  waitForElementAndAct('tp-yt-paper-button#expand', (elm) => {
      // getTranscript(expandButton);
      elm.click()
      console.log("the element finally found");
  });

  // Show transcript button
  waitForElementAndAct('#primary-button ytd-button-renderer yt-button-shape button', (elm) => {
  elm.click();
 console.log('show transcript done')
  //return the edited transcript
  });
  waitForElementAndAct('#segments-container', (elm) => {
  textt = elm.textContent;
  console.log(textt);
  text_cleaned = removenewlines(textt);
  // console.log(text_cleaned)
  
  // })

  //close transcript
  waitForElementAndAct('[aria-label="Close transcript"]', (elm) => {
      elm.click();
      console.log('close ' + elm);
      
  });return text_cleaned }); }


gettheTranscript()

const removenewlines = (textt) => {
  const pairs = textt.split(/\s+(?=\d+:)/).filter(Boolean); 
  const p = pairs.map(pair => pair.replace(/\n\s+/g, ' ').trim())
  return p;}
 
// Wait for Element to load on page
function waitForElementAndAct(selector, actionCallback) {
  

  const observer = new MutationObserver((mutations) => {
      const targetElement = document.querySelector(selector);
      if (targetElement) {
          actionCallback(targetElement);
          observer.disconnect(); 
          
      }
  });

  observer.observe(document.body, { childList: true, subtree: true });
 
}