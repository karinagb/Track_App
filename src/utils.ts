export function decodeToken(token: string | null) {
    if (!token) return null;
  
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(atob(base64));
    } catch (error) {
      console.error("Invalid token", error);
      return null;
    }
  }