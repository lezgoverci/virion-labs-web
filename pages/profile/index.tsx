import AuthenticatedTemplate from "../../templates/authenticated";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function ProfilePage() {

  const router = useRouter();
  const [token, setToken] = useState(localStorage.getItem("io.virionlabs.jwt"));


  const handleLogout = () =>{
    localStorage.removeItem("io.virionlabs.jwt");
    setToken(null)
  }


  useEffect(() => {
    //const jwt = localStorage.getItem("io.virionlabs.jwt");

    if (!token) {
      router.push("/home");
    }
  }, [token]);



  return (
    <>
      <AuthenticatedTemplate>
        <div>This is your profile page</div>
        <button onClick={handleLogout}>Logout</button>
      </AuthenticatedTemplate>
    </>
  );
}
