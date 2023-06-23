import { db } from "./db";

function createComment() {
    return " <script>  alert(document.cookie)  </script>";
}

const comment = createComment();

db.commments.add(comment);