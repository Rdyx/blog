/**
 * Replace target element inner html
 * @param {*} elementId 
 * @param {*} text 
 */
function replaceTextInElementById(elementId, text){
  document.getElementById(elementId).innerHTML = text;
};

/**
 * Make ajax request and update hits counter
 * @param {*} url 
 * @param {*} elementId 
 */
function updateHitCounterText(url, elementId) {
  return $.ajax('https://hitcounter.pythonanywhere.com/count',{data:{url: url}}).then(hitCount => {
    replaceTextInElementById(elementId, hitCount)
  });
};