import ProfilePage from "./ProfilePage";
import { MyContext } from "./UserContext";
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
      <MyContext.Provider value={userData} />
       <ProfilePage />
      <MyContext.Provider />
    </>
      
    
  )       
}

export default App;
