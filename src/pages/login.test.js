import React from "react";
import { render, screen , fireEvent} from "@testing-library/react";
import Login from "./login";
import { BrowserRouter } from "react-router-dom";

describe("Login Page", () => {
  const MockLogin = () =>{
    return (
      <BrowserRouter><Login/></BrowserRouter>
    )
  }
  let wrapper;
  beforeEach(()=>{
    wrapper = render(<MockLogin />);
  })

  const localStorageMock = (function () {
    let store = {};
  
    return {
      getItem(key) {
        return store[key];
      },
  
      setItem(key, value) {
        store[key] = value;
      }
    };
  })();
  
  Object.defineProperty(window, "localStorage", { value: localStorageMock });





  describe("rendering all input fields",()=>{
    it("should have username field",()=>{ 
      expect( screen.getByPlaceholderText("Email"));
      wrapper.unmount();
    })
    it("should have password field",()=>{
      expect(screen.getByPlaceholderText("Password"));
      wrapper.unmount();
    })
  })

  describe("login functionality",()=>{
      // it("Login Succesfully",()=>{
      //   const setLocalStorage = (id, data) => {
      //     window.localStorage.setItem(id, JSON.stringify(data));
      //   };
      //   const mockId = "Email";
      //   const mockJson = { data: "abc@gmail.com" };
      //   const userMockedJson = {data : fireEvent.change(screen.getByPlaceholderText("Email"), {target: {value:"abc@gmail.com"}})}
      //   setLocalStorage(mockId, mockJson);
      //   expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(userMockedJson)).toBe(true);
      // });

        it("Login Failed with email/pwd ",()=>{
          const setLocalStorage = (id, data) => {
            window.localStorage.setItem(id, JSON.stringify(data));
          };
          const mockId = "email";
          const mockJson = { data: "abc@gmail.com" };
          const mockedJson={ data : fireEvent.change(screen.getByPlaceholderText("Email"), {target: {value:"ead@gmail.com"}})}
          setLocalStorage(mockId, mockJson);
          expect(localStorage.getItem(mockId)).not.toEqual(JSON.stringify(mockedJson))
        });
      
      it("Field Empty results in Error",()=>{
        fireEvent.change(screen.getByPlaceholderText("Email"), {target: {value:""}})
        fireEvent.change(screen.getByPlaceholderText("Password"), {target: {value:""}})
        const loginButton = screen.getByRole("button",{name:"Login"})
        fireEvent.click(loginButton);
        expect(screen.getByTestId("alert"));
      });
   }
  )



});
