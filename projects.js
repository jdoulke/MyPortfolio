function initCarousel(currentImgId, nextImgId, imagesArray, intervalTime = 8000, transitionTime = 1000) {
  let currentIndex = 0;
  const currentImage = document.getElementById(currentImgId);
  const nextImage = document.getElementById(nextImgId);

  function transitionImages() {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    let called = false;

    function animateTransition() {
      if (called) return;
      called = true;
      nextImage.style.display = 'block';
      nextImage.style.transition = 'none';
      nextImage.style.transform = 'translateX(100%)';
      nextImage.style.opacity = '0';
      void nextImage.offsetWidth;
      currentImage.style.transition = `transform ${transitionTime}ms ease, opacity ${transitionTime}ms ease`;
      nextImage.style.transition = `transform ${transitionTime}ms ease, opacity ${transitionTime}ms ease`;
      currentImage.style.transform = 'translateX(-100%)';
      currentImage.style.opacity = '0';
      nextImage.style.transform = 'translateX(0)';
      nextImage.style.opacity = '1';
      setTimeout(() => {
        currentImage.src = nextImage.src;
        currentImage.style.transition = '';
        currentImage.style.transform = 'translateX(0)';
        currentImage.style.opacity = '1';
        nextImage.style.display = 'none';
        nextImage.style.transition = '';
      }, transitionTime);
    }

    nextImage.onload = function() {
      animateTransition();
    };

    nextImage.src = imagesArray[currentIndex] + '?t=' + new Date().getTime();

    if (nextImage.complete) {
      setTimeout(() => {
        if (!called) {
          animateTransition();
        }
      }, 50);
    }
  }

  setInterval(transitionImages, intervalTime);
}

document.addEventListener('DOMContentLoaded', function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  var progressCircle = document.getElementById("progress-circle");
  var circumference = progressCircle.getTotalLength();
  
  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;
  
  if (document.documentElement.scrollTop === 0 && document.body.scrollTop === 0) {
    scrollToTopBtn.style.display = "none";
  }
  
  window.addEventListener("scroll", function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (scrollTop > 20) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
    
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollFraction = scrollTop / scrollHeight;
    var offset = circumference * (1 - scrollFraction);
    progressCircle.style.strokeDashoffset = offset;
  });
  
  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

initCarousel('current-image-shop-management', 'next-image-shop-management', [
  'images/projects/shop-management/home-page.png',
  'images/projects/shop-management/order-creation.png',
  'images/projects/shop-management/search-sale.png',
  'images/projects/shop-management/login-image.png',
  'images/projects/shop-management/search-customer.png'
]);

initCarousel('current-image-plugins', 'next-image-plugins', [
  'images/projects/plugins/Gamerule-image1.png',
  'images/projects/plugins/Gamerule-image2.png',
  'images/projects/plugins/Gamerule-reviews.png',
  'images/projects/plugins/WeightRPG.png',
]);

initCarousel('current-image-portfolio', 'next-image-portfolio', [
  'images/projects/portfolio/javascript.png',
  'images/projects/portfolio/oracle-linux.png',
  'images/projects/portfolio/mariadb.png'
]);

initCarousel('current-image-android', 'next-image-android', [
  'images/projects/shop-management-android/main-page.jpg',
  'images/projects/shop-management-android/navigation-bar.jpg',
  'images/projects/shop-management-android/customer-page.jpg',
  'images/projects/shop-management-android/order-create.jpg',
  'images/projects/shop-management-android/order-search.jpg',
  'images/projects/shop-management-android/order-search2.jpg'
]);

initCarousel('current-image-thesssense', 'next-image-thesssense', [
  'images/projects/thesssense/home.png',
  'images/projects/thesssense/main.jpg',
  'images/projects/thesssense/water-data.jpg',
  'images/projects/thesssense/air-data.jpg',
  'images/projects/thesssense/water-comparisson.jpg',
  'images/projects/thesssense/air-comparisson.jpg'
]);
