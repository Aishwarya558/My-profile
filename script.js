function openModal(title, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close modal if the user clicks outside the modal
window.onclick = function(event) {
    if (event.target === document.getElementById('projectModal')) {
        closeModal();
    }
};



