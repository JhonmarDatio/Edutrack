function goBack() {
    window.location.href = 'marking.html';
}

function switchToAccount(button) {
    window.location.href = 'profile.html';
}
function switchToAbout(button) {
    window.location.href = 'about.html';
}
document.getElementById('changePasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const current = document.getElementById('currentPassword').value;
    const newPass = document.getElementById('newPassword').value;
    const confirm = document.getElementById('confirmPassword').value;
    if (newPass !== confirm) {
        alert("New passwords do not match!");
        return;
    }
    alert("Password successfully changed!");
    this.reset();
});