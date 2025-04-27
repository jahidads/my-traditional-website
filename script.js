function hideLoader() {
    setTimeout(() => document.getElementById('loader').style.display = 'none', 1500);
  }
  
  function showSection(id) {
    document.querySelectorAll('.content').forEach(div => div.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }
  
  document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('thankYouMessage').style.display = 'block';
    this.reset();
  });
  
  var topBtn = document.getElementById("topBtn");
  window.onscroll = function() {scrollFunction();};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  