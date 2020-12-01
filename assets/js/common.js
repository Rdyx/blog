/**
 * Creates a dynamic hidden hitcount image
 * @param string hitCountDomain
 * @param string url
 */
function createHitCounterImgElement(hitCountDomain, url) {
  let imgElement = document.createElement('img');
  imgElement.src = 'https://' + hitCountDomain + '.pythonanywhere.com/count/tag.svg?url=' + url;
  imgElement.classList.add('hidden');
  document.getElementById('body').appendChild(imgElement);
}

/**
 * Replace target element inner html
 * @param string elementId
 * @param string text
 */
function replaceTextInElementById(elementId, text) {
  document.getElementById(elementId).innerHTML = text;
}

/**
 * Make ajax request and update hits counter
 * @param string url
 * @param string elementId
 */
function updateHitCounterText(url, elementId, count = false) {
  const hitCountDomain = 'rdyx';

  count && createHitCounterImgElement(hitCountDomain, url);

  return $.ajax('https://' + hitCountDomain + '.pythonanywhere.com/nocount', { data: { url: url } }).then(
    (hitCount) => {
      replaceTextInElementById(elementId, hitCount);
    }
  );
}
