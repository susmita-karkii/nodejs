if pm2 show app >/dev/null; then
    echo "Restarting PM2 process for app.js"
    pm2 stop app.js
    pm2 restart app.js
else
    echo "Starting PM2 process for app.js"
    pm2 start app.js
fi
