// Function to fetch and display presidential actions
async function fetchPresidentialActions() {
  const url = 'https://www.whitehouse.gov/presidential-actions/';
  const headlinesList = document.getElementById('headlines');
  headlinesList.innerHTML = 'Loading...';

  try {
    // Fetch the HTML from the White House website
    const response = await fetch(url);
    const text = await response.text();

    // Parse the HTML to extract headlines
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const headlines = doc.querySelectorAll('h2 a');

    // Clear the loading text
    headlinesList.innerHTML = '';

    // Append headlines to the list
    headlines.forEach((headline) => {
      const listItem = document.createElement('li');
      listItem.textContent = headline.textContent;
      headlinesList.appendChild(listItem);
    });
  } catch (error) {
    headlinesList.innerHTML = 'Failed to load headlines. Please try again.';
    console.error('Error fetching presidential actions:', error);
  }
}

// Add event listener to the button
document.getElementById('fetch-data').addEventListener('click', fetchPresidentialActions);
