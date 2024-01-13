import React, { useState } from "react";
import "./App.css";
import { Todo_App_Input_Feild } from "./Components/Todo_App_Input_Feild";
const App = () => {
  
  return (
    <div className="bg-transparent flex justify-center items-center">
      <div className="mt-10 inline-block bg-light rounded-lg backdrop:blur-md h-[90dvh]">
        <Todo_App_Input_Feild
          placeholder="Add Title"
          type="text"
          description='Add description'
          // addItems={addItems}
        />
        
      </div>
    </div>
  );
};

export default App;
