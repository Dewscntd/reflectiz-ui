import{g as i}from"./chunk-YP2F4WY5.js";import{ka as s,ua as n}from"./chunk-MZEAFQHC.js";var u=(()=>{let t=class t{constructor(r){this.router=r,this.mockUser={username:"admin",password:"admin",token:"token-123456789"}}login(r,o){return r===this.mockUser.username&&o===this.mockUser.password?(localStorage.setItem("currentUser",JSON.stringify({username:r,token:this.mockUser.token})),!0):!1}logout(){localStorage.removeItem("currentUser"),this.router.navigate(["/"])}isAuthenticated(){return!!localStorage.getItem("currentUser")}};t.\u0275fac=function(o){return new(o||t)(n(i))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{u as a};
