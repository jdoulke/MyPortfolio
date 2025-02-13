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

initCarousel('current-image', 'next-image', [
  'images/work-experience/deloitte-logo.png',
  'images/work-experience/mulesoft.png',
  'images/work-experience/oracle-sql.png',
  'images/work-experience/jenkins.png'
]);
