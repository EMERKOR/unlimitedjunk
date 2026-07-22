document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href^="tel:"], a[href^="sms:"]');
  if (link && typeof gtag === 'function') {
    var href = link.getAttribute('href') || '';
    gtag('event', 'contact_click', {
      method: href.indexOf('sms:') === 0 ? 'text' : 'call',
      link_url: href,
      page_path: location.pathname
    });
    return;
  }
  var review = e.target.closest('a[href*="g.page/r/"]');
  if (review && typeof gtag === 'function') {
    gtag('event', 'review_link_click', {
      link_url: review.getAttribute('href'),
      page_path: location.pathname
    });
  }
});
