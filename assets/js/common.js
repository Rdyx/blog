function createHitCounterImgElement(hitCountDomain, url) {
  let imgElement = document.createElement('img'); 
  imgElement.src = 'https://' + hitCountDomain + '.pythonanywhere.com/count/tag.svg?url='+url; 
  imgElement.classList.add('hidden');
  document.getElementById('body').appendChild(imgElement); 
}

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
function updateHitCounterText(url, elementId, count=false) {
  const hitCountDomain = 'rdyx';
  count && createHitCounterImgElement(hitCountDomain, url);
  return $.ajax('https://' + hitCountDomain + '.pythonanywhere.com/nocount',{data:{url: url}}).then(hitCount => {
    replaceTextInElementById(elementId, hitCount);
  });
};