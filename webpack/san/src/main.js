import san from 'san';
import SanFactory from 'san-factory';
import Card from './index.san';

// import '@babel/polyfill';

// route
// import List from './page/list.san'

import {router} from 'san-router'

// router.add({rule: '/', Component: List, target: '#app'});
// start
router.start();

let factory = new SanFactory({
    san: san,
    components: {
        astrologyRoot: {
            template: `
            <div>
                <c-example/>
            </div>`,
            components: {
                'c-example': Card
            }
        }
    },
    initData() {
        return {
        };
    }
});

let main = factory.createInstance({
    component: 'astrologyRoot',
    options: {
        data: {
        }
    }
});
main.attach(document.querySelector('#app'));