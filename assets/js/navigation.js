document.addEventListener('DOMContentLoaded', function() {
  // Get current page URL
  var currentPath = window.location.pathname;
  
  // Find all navigation links
  var navLinks = document.querySelectorAll('.site-nav .page-link');
  
  // Loop through each link and check if it matches current URL
  navLinks.forEach(function(link) {
    var linkPath = link.getAttribute('href');
    
    // Handle home page
    if (linkPath === '/' && (currentPath === '/' || currentPath === '')) {
      link.classList.add('active');
    } 
    // For other pages, check if the current path contains the link path
    // but make sure we're matching complete segments
    else if (linkPath !== '/' && currentPath === linkPath) {
      link.classList.add('active');
    }
    // Check by page name
    else if (linkPath !== '/' && linkPath !== '') {
      // Extract the page name from the path (e.g., /projects/ -> projects)
      var linkPage = linkPath.split('/').filter(Boolean)[0];
      var currentPage = currentPath.split('/').filter(Boolean)[0];
      
      if (linkPage && currentPage && linkPage === currentPage) {
        link.classList.add('active');
      }
    }
  });
}); 