
function confirmDelete(): boolean {
    let result: boolean = window.confirm("Are you sure to delete this customer ?");
    if (result) {
        return true;
    } else {
        return false;
    }
}