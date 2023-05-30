
function confirmDelete(): boolean {
    var result = window.confirm("Are you sure to delete this customer ?");
    if (result) {
        return true;
    } else {
        return false;
    }
}