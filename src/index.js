async function bootstrap(){
     const { SceneOne } = await import('./scene-one.js');
     const firstScene = new SceneOne();
     firstScene.init();

}


bootstrap()
    .then((appRef) => {
        console.info('app is up and running');
        //console.log(appRef);
    });
