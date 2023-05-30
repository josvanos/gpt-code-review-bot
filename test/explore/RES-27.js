import { db } from "./db";

const comment = " <script>  alert(document.cookie)  </script>";

db.commments.add(comment);