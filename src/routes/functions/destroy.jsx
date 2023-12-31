import { redirect } from "react-router-dom";
import { deleteContact } from "../../helpers/contacts";

export async function actionDestroy({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}
