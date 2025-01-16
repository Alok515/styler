export default defineEventHandler((event) => {
    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    console.log(`New Request %c${event.path} At %c${currentTime.padStart(20, " ")}`, "color: #4CAF50; font-weight: bold", "color: #2196F3; font-weight: bold");
})
