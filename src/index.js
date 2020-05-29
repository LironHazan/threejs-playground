import { SceneOne } from './scenes_from_a_memory/scene-one';

function bootstrap(){
    console.info('app is up and running');
    const firstScene = new SceneOne();
     firstScene.init();

}


bootstrap();
