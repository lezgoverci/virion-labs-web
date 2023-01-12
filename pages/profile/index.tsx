import AuthenticatedTemplate from "../../templates/authenticated";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function ProfilePage(props) {

  const router = useRouter();
  const [token, setToken] = useState(props.jwt);
  const [user, setUser] = useState(null);


  const handleLogout = () =>{
    // localStorage.removeItem("io.virionlabs.jwt");
    // localStorage.removeItem("io.virionlabs.user");
    // setToken(null)
  }


  // useEffect(() => {
  //   //const jwt =   localStorage.getItem("io.virionlabs.jwt");
  //   console.log(token)
  //   if (!token) {
  //     router.push("/home");
  //   }
  // }, [token]);



  // useEffect(()=>{


  //    //setToken(jwt)
  //    if(props.user){
  //     setUser(JSON.parse(props.user))
  //    }else{
  //     setUser(null)
  //     router.push("/login");
  //    }

  // },[])

//   useEffect(()=>{
//     console.log(props.user)
//     if(!props.user){
//       router.push("/login");
//     }
//  },[props.user])




  return ( props.jwt &&
    <>
      <AuthenticatedTemplate>
        <div>Hello {}</div>
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



// export async function getServerSideProps(context) {
//   return {props:{
//     jwt: context.req.cookies.jwt ? context.req.cookies.jwt : null
//   }}
// }

export async function getStaticProps(context){
 // const userData = localStorage.getItem('io.virionlabs.user');
  return{ props: {user: null, jwt: null}}
}