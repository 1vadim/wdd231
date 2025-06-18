    const timestampField = document.getElementById('timestamp');
  if (timestampField) {
    const now = new Date().toISOString();
    timestampField.value = now;
  }

  const timestampField1 = document.getElementById('timestamp1');
  if (timestampField1) {
    const now1 = new Date().toISOString();
    timestampField1.value = now1;
  }

function parseQueryString() {
      const params = new URLSearchParams(window.location.search);
      let resultHtml = '<ul>';
      for (const [key, value] of params.entries()) {
        resultHtml += `<li><strong>${key}:</strong> ${value}</li>`;
      }
      resultHtml += '</ul>';
      return resultHtml;
    }

    document.getElementById('result-container').innerHTML = parseQueryString();

