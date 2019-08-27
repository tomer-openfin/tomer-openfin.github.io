const main = document.getElementById('of-frame-main');

if(!fin) {
    fin = {
        close: () => console.log('closed'),
        minimize: () => console.log('minimized'),
        getState: () => 'normal',
        restore: () => console.log('restored'),
        maximize: () => console.log('maximized'),
    };
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



