module.exports = {
    apps: [
        {
            name: "ccats",
            script: "npm",
            automation: false,
            args: "run start",
            max_restarts: 3,
            env: {
                NODE_ENV: "development"
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ]
}