document.addEventListener('DOMContentLoaded', () => {
  const editProfileBtn = document.getElementById('editProfileBtn');
  const profileEditForm = document.getElementById('profileEditForm');
  const profileDisplay = document.getElementById('profileDisplay');
  const cancelEditBtn = document.getElementById('cancelEditBtn');

  if (editProfileBtn && profileEditForm && profileDisplay && cancelEditBtn) {
    editProfileBtn.addEventListener('click', () => {
      profileDisplay.style.display = 'none';
      profileEditForm.style.display = 'block';
    });

    cancelEditBtn.addEventListener('click', () => {
      profileEditForm.style.display = 'none';
      profileDisplay.style.display = 'block';
    });
  }

  // Function to update statistics dynamically
  // Removed as per user request to not use any API for dynamic updates

  // Removed updateStatistics function and related calls
});
