export default [
  {
    name: "登录",
    path: "/user/login",
    layout: false,
    hideInMenu: true,
    component: "./user/login"
  },
  {
    name: "应用开发",
    path: "/app",
    hideInBreadcrumb: false,
    routes: [
      {
        name: "应用",
        hideInBreadcrumb: false,
        path: "/app/owner",
        component: "./app/owner"
      }
    ]
  },
  {
    name: "设计器",
    path: "/designer-editor",
    layout: false,
    hideInMenu: true,
    component: "./designer-editor"
  },
  {
    name: "系统设置",
    path: "/settings",
    layout: false,
    hideInMenu: true,
    component: "./settings/layout",
    routes: [
      {
        name: "角色管理",
        menuRender: false,
        path: "/settings/roles",
        component: "./settings/roles"
      }
    ]
  },
  {
    name: "",
    layout: false,
    path: "/design/edit",
    component: "./design/edit"
  },
  {
    component: "./404"
  }
];
