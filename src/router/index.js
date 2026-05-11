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
import Cookies from "js-cookie";
import Committee1turkish from "@/views/Committee1turkish.vue";
import Committee1arabic from "@/views/Committee1arabic.vue";
import Committee2turkish from "@/views/Committee2turkish.vue";
import Committee1english from "@/views/Committee1english.vue";
import Committee2english from "@/views/Committee2english.vue";

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
      path: "/committees/english-1",
      name: "committee-english-1",
      component: Committee1english,
    },
    {
      path: "/committees/english-2",
      name: "committee-english-2",
      component: Committee2english,
    },
    {
      path: "/committees/turkish-1",
      name: "committee-turkish-1",
      component: Committee1turkish,
    },
    {
      path: "/committees/turkish-2",
      name: "committee-turkish-2",
      component: Committee2turkish,
    },
    {
      path: "/committees/arabic-1",
      name: "committee-arabic-1",
      component: Committee1arabic,
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
      meta: { requiresAdmin: true },
    },
    {
      path: "/adminContact",
      name: "AdminContact",
      component: AdminContact,
      meta: { requiresAdmin: true },
    },
    {
      path: "/adminProgramFlow",
      name: "adminProgramFlow",
      component: AdminProgramFlow,
      meta: { requiresAdmin: true },
    },
    {
      path: "/adminTeam",
      name: "adminTeam",
      component: AdminTeam,
      meta: { requiresAdmin: true },
    },
    {
      path: "/adminContactDetail/:id",
      name: "adminContactDetail",
      component: AdminContactDetail,
      meta: { requiresAdmin: true },
    },
    {
      path: "/ufsm",
      name: "ufsm",
      component: Ufsm,
    },
    {
      path: "/sponsors",
      name: "sponsors",
      component: Sponsors,
    },
    {
      path: "/icyf",
      name: "icyf",
      component: Icyf,
    },
    {
      path: "/rules",
      name: "rules",
      component: Rules,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from) => {
  const adminUser = JSON.parse(localStorage.getItem("adminUser"));
  const adminToken = localStorage.getItem("adminToken");

  if (to.meta.requiresAdmin) {
    if (!adminUser || !adminToken) {
      return { name: "adminLogin" };
    }

    const userRole = adminUser.roles;
    const isAdmin = Array.isArray(userRole)
      ? userRole.includes("Admin")
      : userRole === "Admin";

    if (isAdmin) {
      return true;
    } else {
      alert("Yetkisiz erişim!");
      return { name: "home" };
    }
  }
  return true;
});
export default router;
