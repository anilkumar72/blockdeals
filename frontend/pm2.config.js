module.exports = {
    apps: [
        {
            name: 'react-app',
            script: 'serve',
            args: ['-s', 'build', '-l', '3000'],
            autorestart: true,
            watch: false,
        },
    ],
};