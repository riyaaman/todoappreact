//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
    const [toDos, setToDos] = useState([]); //empty array for storing todos
    const [toDo, setToDo] = useState(""); //empty string for storing todo

    const [removedToDos, setRemovedToDos] = useState([]);

    var length = removedToDos.length;
    return (
        <div className="app">
            <div className="mainHeading">
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
            </div>
            <div className="input">
                <input type="text" value={toDo} placeholder="🖊️ Add item..."                 
                    onChange={(e) => 
                        setToDo(e.target.value)   
                    }                    
                />
                <i className="fas fa-plus" onClick={() => 
                        {
                          setToDos(
                              [...toDos, { id: Date.now(),date: Date().toLocaleString(), text: toDo, status: false }]
                            )
                          setToDo("")
                        }
                      }                   
                ></i>
            </div>
            <div className="todos">
                {toDos.map((obj) => {
                    return (
                        <div className="todo">
                            <div className="left">
                                <input value={obj.status}  type="checkbox" name="" id="" 
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        console.log(obj);
                                        setToDos(
                                            toDos.filter((obj2) => {
                                                if (obj2.id === obj.id) {
                                                    obj2.status = e.target.checked;
                                                }
                                                return obj2;
                                            })
                                        );
                                    }}
                                />
                                <p>{obj.text}</p>
                            </div>
                            <div className="right">
                                <i
                                    onClick={() => {
                                        setRemovedToDos((removedToDos) => [...removedToDos, obj]);
                                        setToDos(
                                            toDos.filter((obj2) => {
                                                if (obj2.id !== obj.id) {
                                                    return obj;
                                                }
                                                return null;
                                            })
                                        );
                                    }}
                                    className="fas fa-times"
                                ></i>
                            </div>
                        </div>
                    );
                })}

                {/* {toDos.map((obj, index) => {
                    if (obj.status) {
                        return (
                          <div>                            
                            <h1>{obj.text}</h1>
                          </div>
                        )
                    }
                    return null;
                })} */}

                
            </div>
             

            


            <div id="container">
              <div id="left">
                Active Items
                {
                toDos.map((obj) => {
                  return (
                    <div>   
                                           
                        <h3>{obj.text}</h3>
                    </div>
                  );
                })
              }

              </div>
              <div id="right">Checked Items
              {toDos.map((obj, index) => {
                    if (obj.status) {
                        return (
                          <div>                            
                            <h3>{obj.text}</h3>
                          </div>
                        )
                    }
                    return null;
                })}
                
              </div>
              <div id="center">Removed Items
              {
                removedToDos.map((obj) => {
                  return (
                    <div>                      
                        <h3>{obj.text}</h3>
                    </div>
                  );
                })
              }
              </div>
          </div>
           
            {/* {
                removedToDos.map((obj) => {
                  return (
                    <div>
                      
                        <h2>{obj.text}</h2>
                    </div>
                );
              })
            } */}
        </div>
    );
}

export default App;
