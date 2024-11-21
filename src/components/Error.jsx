import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    
    return(
        <>
        <div id="error-container" 
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "auto",
            padding: "20px",
            border: "2px solid black",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            color: "#333",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            rowGap:"4px",
          }}>
            <h2>Oops! something went wrong</h2>
            <h3>Check the URL again</h3>
            <h3>Status:{err.status}-{err.statusText}</h3>
            
        </div>
        
        </>
    )
}
export default Error;