<template>
    <div>
        <canvas class="canvas" id="pag"></canvas>
    </div>
</template>

// <script lang="ts">
// import Vue from 'vue';
// import { PAGInit } from "libpag";
// export default Vue.extend({
//     name: 'pag',
//     props: [
//         'url',
//         'autoPlay',
//     ],
//     data() {
//         return {
//             pagView: null
//         }
//     },
//     methods: {
//         async getPag() {
//             return new Promise((resolve) => {
//                 PAGInit({
//                     locateFile: (file) => "./node_modules/libpag/lib/" + file,
//                 }).then((PAG) => {
//                     console.log(PAG, 'PAG')
//                     resolve(PAG);
//                 });
//             });
//         },
//         async pagInit() {
//             if (this.pagView) {
//                 return this.pagView;
//             }
//             this.getPag.then(PAG => {
//                 return new Promise((resolve) => {
//                     const arrayBuffer = fetch(this.url).then((response) =>
//                         response.arrayBuffer()
//                     );
//                     PAG.PAGFile.load(arrayBuffer).then(pagFile => {
//                         document.getElementById("pag").width = pagFile.width();
//                         document.getElementById("pag").height = pagFile.height();
//                         PAG.PAGView.init(pagFile, "#pag").then(pagView => {
//                             this.pagView = pagView;
//                             resolve(this.pagView);
//                         });
//                     });
//                     // pagView.setRepeatCount(0);
//                     // await pagView.play();
//                 });

//             });
//         },
//         play() {
//             this.pagInit(pagView => {
//                 pagView.play();
//             });
//         }
//     },
//     mounted() {
//         console.log(this.url, 'url')
//         this.pagInit(pagView => {
//             if (this.autoPlay) {
//                 pagView.play();
//             }
//         });
//     }
// })
// </script>

<script>
import { PAGInit } from "libpag";
export default {
    name: 'pag',
    props: [
        'url',
        'autoPlay',
    ],
    data() {
        return {
            pagView: null
        }
    },
    methods: {
        getPag() {
            return new Promise((resolve) => {
                console.log('getPag')
                PAGInit({
                    locateFile: (file) => "./node_modules/libpag/lib/" + file,
                }).then((PAG) => {
                    console.log(PAG, 'PAG')
                    resolve(PAG);
                });
            });
        },
        pagInit() {
            if (this.pagView) {
                return this.pagView;
            }
            this.getPag().then(PAG => {
                return new Promise((resolve) => {
                    const arrayBuffer = fetch(this.url).then((response) =>
                        response.arrayBuffer()
                    );
                    PAG.PAGFile.load(arrayBuffer).then(pagFile => {
                        document.getElementById("pag").width = pagFile.width();
                        document.getElementById("pag").height = pagFile.height();
                        PAG.PAGView.init(pagFile, "#pag").then(pagView => {
                            this.pagView = pagView;
                            resolve(this.pagView);
                        });
                    });
                    // pagView.setRepeatCount(0);
                    // await pagView.play();
                });

            });
        },
        play() {
            this.pagInit(pagView => {
                pagView.play();
            });
        }
    },
    mounted() {
        console.log(this.url, 'url')
        this.pagInit(pagView => {
            if (this.autoPlay) {
                pagView.play();
            }
        });
    }
}
</script>