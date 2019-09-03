(async () => {
    if(!window.hasOwnProperty('fin')) {
        console.error('this is supposed to run in OpenFin ecosystem, not in a browser.');
    }
    
    const win = await fin.Window.getCurrent();
    const onClose = win.close.bind(fin);
    const onMinimize = win.minimize.bind(fin);
    const onMaximize = async () => win.getState().then(state => state === 'maximized'? win.restore() : win.maximize());
    
    const closeButton = document.getElementById('close-button');
    const minimizeButton = document.getElementById('minimize-button');
    const maximizeButton = document.getElementById('maximize-button');
    
    closeButton.addEventListener('click', onClose);
    minimizeButton.addEventListener('click', onMinimize);
    maximizeButton.addEventListener('click', onMaximize);
    
})()



