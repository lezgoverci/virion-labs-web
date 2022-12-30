import AuthenticatedTemplate from "../../templates/authenticated";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function ProfilePage({jwt}) {

  const router = useRouter();
  const [token, setToken] = useState(jwt);


  const handleLogout = () =>{
    localStorage.removeItem("io.virionlabs.jwt");
    setToken(null)
  }


  useEffect(() => {
    //const jwt =   localStorage.getItem("io.virionlabs.jwt");
    //console.log(token)
    if (!token) {
      router.push("/home");
    }
  }, [token]);

  useEffect(()=>{
     setToken(jwt)
  },[])



  return ( jwt &&
    <>
      <AuthenticatedTemplate>
        <div>This is your profile page</div>
        <button onClick={handleLogout}>Logout</button>
      </AuthenticatedTemplate>
    </>
  );

}

// export async function getStaticProps(context:GetStaticProps) {
//   const jwt = localStorage.getItem("io.virionlabs.jwt");
//   return {
//     props: {
//       jwt: jwt
//     }, // will be passed to the page component as props
//   }
// }



export async function getServerSideProps(context) {
  return {props:{
    jwt: context.req.cookies.jwt ? context.req.cookies.jwt : null
  }}
}