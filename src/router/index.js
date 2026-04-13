import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CommitteesView from "@/views/CommitteesView.vue";
import ApplicationView from "@/views/ApplicationView.vue";
import ProgramView from "@/views/ProgramView.vue";
import ContactView from "@/views/ContactView.vue";
import AdminLogin from "@/views/AdminLogin.vue";
import { jwtDecode } from "jwt-decode";
import AdminApplication from "@/views/AdminApplication.vue";
import AdminContact from "@/views/AdminContact.vue";
import AdminProgramFlow from "@/views/AdminProgramFlow.vue";
import AdminTeam from "@/views/AdminTeam.vue";
import AdminContactDetail from "@/views/AdminContactDetail.vue";
import Team from "@/views/Team.vue";
import Ufsm from "@/views/Ufsm.vue";
import Sponsors from "@/views/Sponsors.vue";
import Icyf from "@/views/Icyf.vue";
import Rules from "@/views/Rules.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/committees",
      name: "committees",
      component: CommitteesView,
    },
    {
      path: "/application",
      name: "application",
      component: ApplicationView,
    },
    {
      path: "/program",
      name: "program",
      component: ProgramView,
    },
    {
      path: "/team",
      name: "team",
      component: Team,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/adminLogin",
      name: "adminLogin",
      component: AdminLogin,
    },
    {
      path: "/adminApplication",
      name: "adminApplication",
      component: AdminApplication,
      meta:{requiresAdmin : true}
    },
    {
      path:"/adminContact",
      name:"AdminContact",
      component: AdminContact,
      meta:{requiresAdmin : true}
    },
    {
      path:"/adminProgramFlow",
      name : "adminProgramFlow",
      component : AdminProgramFlow,
      meta:{requiresAdmin : true}
    },
    {
      path: "/adminTeam",
      name:"adminTeam",
      component:AdminTeam,
      meta:{requiresAdmin : true}
    },
    {
      path:"/adminContactDetail/:id",
      name:"adminContactDetail",
      component:AdminContactDetail,
      meta:{requiresAdmin : true}
    },
    {
      path:"/ufsm",
      name:"ufsm",
      component:Ufsm
    },
    {
      path:"/sponsors",
      name:"sponsors",
      component:Sponsors
    },
    {
      path: "/icyf",
      name:"icyf",
      component:Icyf
    },
    {
      path:"/rules",
      name:"rules",
      component:Rules
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from) => {
  const token = localStorage.getItem("adminToken");

  if (to.meta.requiresAdmin) {
    if (!token) return { name: "adminLogin" };

    try {
      const decoded = jwtDecode(token);

      const userRole = decoded["role"]; 
    
      const isAdmin = Array.isArray(userRole) 
        ? userRole.includes("Admin") 
        : userRole === "Admin";

      if (isAdmin) {
        return true; 
      } else {
        alert("Yetkisiz erişim! Sadece Adminler girebilir.");
        return { name: "home" }; 
      }
    } catch (error) {
      console.error("Token hatası:", error);
      localStorage.removeItem("adminToken");
      return { name: "adminLogin" };
    }
  }
  return true;
});
export default router;
