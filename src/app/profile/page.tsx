import React from "react";
import { createClient } from "../../../utils/supabase/server";

export default async function Profile() {
  const supabase = await createClient();

  const { data: user } = await supabase.auth.getUser();
  return <div>This is profile ID: {user.user?.email}</div>;
}
