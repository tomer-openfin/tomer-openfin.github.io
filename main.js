(() => {
    if(!window.hasOwnProperty('fin')) {
        console.error('this is supposed to run in OpenFin ecosystem, not in a browser.');
    }
    
    const win = fin.Window.getCurrentSync();
    const onClose = win.close;
    const onMinimize = win.minimize;
    const onMaximize = async () => win.getState().then(state => state === 'maximized'? win.restore() : win.maximize());
    
    const closeButton = document.getElementById('close-button');
    const minimizeButton = document.getElementById('minimize-button');
    const maximizeButton = document.getElementById('maximize-button');
    
    closeButton.addEventListener('click', onClose);
    minimizeButton.addEventListener('click', onMinimize);
    maximizeButton.addEventListener('click', onMaximize);
    
})()



