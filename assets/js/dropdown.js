document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.getElementById('dropdown-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');
  
  if (dropdownToggle && dropdownMenu) {
    // Toggle dropdown when button is clicked
    dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      dropdownMenu.classList.toggle('active');
      document.body.classList.toggle('dropdown-active');
      
      // Calculate dropdown height for content pushing
      if (dropdownMenu.classList.contains('active')) {
        const dropdownHeight = dropdownMenu.offsetHeight;
        document.documentElement.style.setProperty('--dropdown-height', dropdownHeight + 'px');
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      const isClickInside = dropdownToggle.contains(e.target) || dropdownMenu.contains(e.target);
      
      if (!isClickInside && dropdownMenu.classList.contains('active')) {
        dropdownMenu.classList.remove('active');
        document.body.classList.remove('dropdown-active');
      }
    });
    
    // Close dropdown when window is resized to desktop size
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 769 && dropdownMenu.classList.contains('active')) {
        dropdownMenu.classList.remove('active');
        document.body.classList.remove('dropdown-active');
      }
    });
  }
});
