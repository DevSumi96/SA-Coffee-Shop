document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    //  Search Box Functionality (Optional)
    const searchForm = document.querySelector('.search-box');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const searchTerm = searchForm.querySelector('input[type="search"]').value;
            // Perform the search functionality 
            console.log('Search Term:', searchTerm);
            // Implement  search functionality
        });
    }

    // Menu Filter Section
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
  
        const filter = this.getAttribute('data-filter');
        
        // Show/Hide categories based on the filter
        menuCategories.forEach(category => {
          category.classList.remove('show');
          if (filter === 'all' || category.classList.contains(filter)) {
            category.classList.add('show');
          }
        });
      });
    });

    // Scroll behavior 
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Buy Button Click Event
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemTitle = this.parentElement.querySelector('.item-title').textContent;
            alert(`You have added ${itemTitle} to your cart!`);
        });
    });

    // Category Filter Functionality
    const categoryButtons = document.querySelectorAll('.filter-btn-s');
    const shopItems = document.querySelectorAll('.shop-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            
            shopItems.forEach(item => {
                item.classList.remove('show');
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.add('show');
                }
            });
        });
    });
});

  