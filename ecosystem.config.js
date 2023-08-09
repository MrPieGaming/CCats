module.exports = {
    apps: [
        {
            name: "ccats",
            script: "npm",
            automation: false,
            args: "run tsstart",
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