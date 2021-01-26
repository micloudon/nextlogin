import { useEffect } from "react";
import Cotter from "cotter"; 
import { useRouter } from "next/router";
import Head from 'next/head'
import Grid from '@material-ui/core/Grid';

console.log(process.env.API_KEY_ID)
export default function Home() {
  const router = useRouter();
  //  2️⃣ Initialize and show the form
  useEffect(() => {
    var cotter = new Cotter(process.env.API_KEY_ID); 
    cotter
      .signInWithLink() 
      .showEmailForm() 
      .then((response) => {
        console.log(response); 
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <div className="mainPage">
        <Head>
          <title>Buddy Tree</title>
          <link rel="shortcut icon" href="/dog.png" />
        </Head>


        <Grid className="box" container justify = "center">

        <div className="form" id="cotter-form-container" style={{ width: 400, height: 425 }}>
        <h1 className="h" align="center">Log in</h1>

        </div> 
        
        </Grid>
  
        
      </div>
  );
}
