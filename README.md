# Waves Signer implementation for Vue.js

## Helpfull links

* [Waves Signer methods](https://docs.wavesplatform.com/en/building-apps/waves-api-and-sdk/client-libraries/signer#methods)
* [Vue.js Waves Signer example](https://github.com/tltary/waves-signer-vue-example)
* [Vue.js Waves Signer demo](https://github.com/tltary/waves-signer-vue-example-demo)

## How to install

```
$ npm i vue-waves-signer
```

## How to setup

```js
// add to main.js
import VueSigner from 'vue-waves-signer'

// production version
Vue.use(VueSigner)

// debug version
Vue.use(VueSigner, {
  debug: true
})

```

## If you need custom node url or provider 

```js

Vue.use(VueSigner, {
  node: '<custom node>',
  provider: '<custom provider>'
})

```

## How to use

```js

// simple login function

methods: {
  async login() {
    await this.signer
            .login()
            .then((response) => {
              console.log(response)
            },
            (error) => {
              console.log(error)
            })
  }
}

```
