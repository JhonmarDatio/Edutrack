export async function signIn(email, password, role) {
  // Call the Tauri backend
  try {
    const result = await window.__TAURI__.invoke("tauri_login", {
      payload: { email, password, role }
    });
    // Return user data as object
    return { user: { email, role } };
  } catch (error) {
    throw new Error(error);
  }
}

export async function signUp(email, password, firstname, lastname, role) {
  // Combine first and last name as a future improvement if you store these fields
  try {
    await window.__TAURI__.invoke("tauri_register", {
      payload: { email, password, role }
    });
    return true;
  } catch (error) {
    throw new Error(error);
  }
}