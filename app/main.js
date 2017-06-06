
"use strict";
(function () {
    /*
    Vue.component("json-text-editor", {
        props: [],
        template: `
            <style>

            </style>
            <div>
                <span>
                    <button v-on:click='handleClick'>Format</button>
                </span>
                <div contenteditable="true">
                </div>
            </div>
        `,
        data: function () {
            return {
                message: "Hello world",
                isClicked: false
            }
        },
        methods: {
            handleClick: function () {
                this.isClicked = !this.isClicked;
            },
            reverse: function () {
                this.message = this.message.split(" ").reverse().join("");
            }
        }
    });
    */
    let app = new Vue({
        el: "#mainApp",
    })
})();
