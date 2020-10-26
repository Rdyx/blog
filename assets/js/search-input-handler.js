function toggleResultsContainerVisibility(inputValue) {
  return inputValue ? $('#results-container').show() : $('#results-container').hide();
}

function hideResultsContainer() {
  $('#results-container').hide();
}

input = document.getElementById('search-input')

// Trigger at every change
input.addEventListener('input', (evt) => toggleResultsContainerVisibility(evt.target.value));
// Trigger when user click on input
input.addEventListener('focus', (evt) => toggleResultsContainerVisibility(evt.target.value));
// Trigger when user click out of input
input.addEventListener('focusout', () => hideResultsContainer());