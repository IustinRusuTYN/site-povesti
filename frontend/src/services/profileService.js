import { supabase } from "../utils/supabase";

// ia profilul din tabela profiles
export async function getProfile(userId) {
  return await supabase
    .from("profiles")
    .select("id, full_name, bio, avatar_url, updated_at")
    .eq("id", userId)
    .single();
}

// salvează (update sau create) profilul
export async function upsertProfile(userId, patch) {
  const updates = {
    id: userId,
    ...patch,
    updated_at: new Date().toISOString(),
  };

  return await supabase
    .from("profiles")
    .upsert(updates, { onConflict: "id" })
    .select("id, full_name, bio, avatar_url, updated_at")
    .single();
}
