function deleteConfirm() {
    var result = confirm("Are you sure to delete this customer ?");
    if (result) {
        return true;
    } else {
        return false;
    }
}