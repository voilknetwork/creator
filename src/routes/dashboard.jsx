import Welcome from "../views/Welcome/Welcome";
import Register from "../views/Register/Register";
import Faq from "../views/Faq/Faq";
import Prizes from "../views/Prizes/Prizes";
import Projects from "../views/Projects/Projects";
import Tools from "../views/Tools/Tools";
import Packages from "../views/Packages/Packages";
import Login from "../views/Login/Login";
import Referrals from "../views/Referrals/Referrals";
var dashRoutes = [
  {
    path: "/welcome",
    name: "Welcome",
    icon: "fa fa-tachometer-alt",
    component: Welcome
  },
  {
    path: "/register",
    name: "Register",
    icon: "fas fa-user-secret",
    component: Register
  },
  {
    path: "/affiliates",
    name: "Affiliates",
    icon: "fas fa-user-secret",
    component: Referrals
  },
  {
    path: "/login",
    name: "Login",
    icon: "fas fa-user-secret",
    component: Login
  },
  {
    path: "/faq",
    name: "Faq",
    icon: "fas fa-user-secret",
    component: Faq
  },
  {
    path: "/prizes",
    name: "Prizes",
    icon: "fas fa-user-secret",
    component: Prizes
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "fas fa-user-secret",
    component: Projects
  },
  {
    path: "/tools",
    name: "Tools",
    icon: "fas fa-user-secret",
    component: Tools
  },
  {
    path: "/packages",
    name: "Packages",
    icon: "fas fa-user-secret",
    component: Packages
  },
  { redirect: true, path: "/", pathTo: "/welcome", name: "Welcome" }
];
export default dashRoutes;
