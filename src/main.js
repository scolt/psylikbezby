import './styles/index.scss';

document.addEventListener('click', (event) => {
  if (event.target.matches('.collapsible-title')) {
    const status = event.target.parentNode.querySelector('input').checked;
    const gaEvent = {
      event_category: 'click',
      action: !status ? 'expand' : 'collapse',
      event_label: event.target.innerText
    };
    gtag('event', 'accordion', gaEvent);
  }
});
