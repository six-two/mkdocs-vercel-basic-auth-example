<script>
    // Delete credential cookie
    document.cookie = `credentials=; Path=/; Secure; SameSite=Strict`;
    
    // Remove from history, open the main page to confirm (should show login form)
    location.replace("/");
</script>

<h1>Logging out</h1>

If you see this something went wrong. Is JavaScript enabled?
