
const routes =  [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/Login.vue'),

    },
    {
        path: '/job-posts',
        name: 'job-posts',
        component: ()=> import('../views/job-posts/JobPosts.vue')
    }
];

export default routes

