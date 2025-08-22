import { useState } from "react";

export function useAuth() {
  // Simulate login status (false = not logged in, true = logged in)
  const [isAuthenticated] = useState(true); 
  return { isAuthenticated };
}