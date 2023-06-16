const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt
  event.preventDefault();
  
  // Store the event for later use
  deferredPrompt = event;
  
  // Show your custom install button or UI
  butInstall.style.display = 'block';
});

// Event handler for the custom install button click
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the browser prompt to install the PWA
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;
    
    // Reset the deferredPrompt variable
    deferredPrompt = null;
    
    // Hide the custom install button or UI
    butInstall.style.display = 'none';
    
    // Handle the user's choice (result.outcome can be 'accepted' or 'dismissed')
    if (result.outcome === 'accepted') {
      console.log('PWA installation accepted');
    } else {
      console.log('PWA installation dismissed');
    }
  }
});

// Event handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed successfully');
});

