<template>
<div class="min-h-screen bg-gray-200 flex flex-col" v-if="state.preview === false">
  <header class="py-1 px-4 text-blue-200 font-semibold bg-blue-700">
      <div class="relative mx-auto flex justify-around items-center">
        <p class="w-1/2 mr-auto">UI Pad</p>
      </div>
  </header>
  <main class="m-4 grid gap-4">
    <textarea name="template" id="" class="sr-only whitespace-pre-wrap" aria-hidden ref="clipboardCode" v-model="state.clipboard" />
    <textarea name="template" id="" class="sr-only whitespace-pre-wrap" aria-hidden ref="clipboardCodePreview" v-model="state.clipboardPreview" />
    <div class="my-2 flex space-x-16 items-center">
      <div class="grid gap-4 grid-flow-col">
        <div class="grid gap-1 justify-center">
          <p class="text-center text-gray-700 font-semibold text-sm tracking-wide">
            Select Component:
          </p>
          <Select 
            :options="state.componentList.map(a => ({label: a.label, value: a.label}))" 
            placeholder="select a component"
            v-model="state.selectedComponent" 
            name="component-select"
          />
        </div>
        <div class="grid gap-1 justify-center">
          <p class="text-center text-gray-700 font-semibold text-sm tracking-wide">
            Copy Component:
          </p>
          <button @click="copy" class="p-1 rounded-full w-min h-min m-auto text-gray-700 bg-white border border-gray-300 transition duration-100 ease-in hover:text-teal-800 hover:bg-teal-200 focus:outline-none focus:shadow-outline">
            <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </button>
        </div>
      </div>
      <div class="grid gap-1 justify-center">
        <p class="text-center text-gray-700 font-semibold text-sm tracking-wide">
          Share:
        </p>
        <button @click="share" class="p-1 rounded-full w-min h-min m-auto text-gray-700 bg-white border border-gray-300 transition duration-100 ease-in hover:text-teal-800 hover:bg-teal-200 focus:outline-none focus:shadow-outline">
          <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      </div>
      <div class="grid gap-1 justify-center">
        <p class="text-center text-gray-700 font-semibold text-sm tracking-wide">
          Preview:
        </p>
        <button @click="preview" class="p-1 rounded-full w-min h-min m-auto text-gray-700 bg-white border border-gray-300 transition duration-100 ease-in hover:text-teal-800 hover:bg-teal-200 focus:outline-none focus:shadow-outline">
          <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
        </button>
      </div>
      <div class="relative z-nav grid gap-1 justify-center">
        <p class="text-center text-gray-700 font-semibold text-sm tracking-wide">
          Sizes:
        </p>
        <button @click="state.editSizes = !state.editSizes" class="p-1 rounded-full w-min h-min m-auto text-gray-700 bg-white border border-gray-300 transition duration-100 ease-in hover:text-teal-800 hover:bg-teal-200 focus:outline-none focus:shadow-outline">
          <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </button>
        <div 
          style="top: 100%; left: calc(50% + 8px)"
          class="absolute transform -translate-x-1/2" 
          v-if="state.editSizes"
        >
          <div class="my-2 rounded-lg shadow-2xl z-nav py-4 pl-4 pr-2 bg-white border-2 border-gray-200 space-y-4 overflow-scroll" style="max-height: 32rem">
            <div v-for="(size, index) in state.sizes" :key="['edit-size', index].join('-')" class="grid grid-flow-col gap-2">
              <TextInput :name="['edit-size-width', index].join('-')" v-model="size.w" type="number" class="w-32">
                <template v-slot:label>
                  <p class="text-gray-700 font-semibold text-sm tracking-wide">
                    Width:
                  </p>
                </template>
              </TextInput>
              <p class="pt-6 text-gray-500 font-semibold text-base tracking-wide">
                &times;
              </p>
              <TextInput :name="['edit-size-height', index].join('-')" v-model="size.h" type="number" class="w-32">
                <template v-slot:label>
                  <p class="text-gray-700 font-semibold text-sm tracking-wide">
                    Height:
                  </p>
                </template>
              </TextInput>
              <div class="mt-1" v-if="state.sizes.length > 1">
                <button 
                  @click="state.sizes.splice(index, 1)"
                  class="mt-6 rounded-full focus:outline-none focus:shadow-outline hover:text-orange-700 transition duration-100 h-min w-min"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
            <button 
              class="font-semibold w-full m-auto px-4 py-1 rounded bg-teal-200 border border-teal-400 text-teal-900 focus:outline-none focus:shadow-outline hover:bg-teal-300 transition-colors duration-200"
              @click="addSize"
            >
              + add size
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex space-x-4 overflow-auto z-page">
      <div class="group" v-for="(size, index) in state.sizes" :key="index">
        <div class="relative z-nav shadow-md group-hover:shadow-lg transition duration-300">
          <div class="flex-shrink-0 bg-white overflow-auto" :style="`width: ${size.w}px; height: ${size.h}px`">
            <I-Frame class="inline-flex h-full w-full">
              <component :is="compiled" />
            </I-Frame>
          </div>
        </div>
        <p>
          <span class="text-sm font-semibold text-gray-500 group-hover:text-gray-800 transition duration-300">
            {{ size.w }}px &times; {{ size.h }}px
          </span>
        </p>
      </div>
    </div>

    <textarea
      class="text-sm font-mono p-2 border-2 border-gray-400 rounded-lg h-64 resize-none focus:outline-none focus:border-blue-500" 
      style="min-height: 8rem"
      v-model="state.content" 
      @keydown.tab.prevent="injectTab"
      @keydown.enter.meta="recompile"
      @input="debounceRecompile"
      spellcheck="false"
    />
    <Notification v-if="shared" class="flex flex-col space-y-1 bg-green-100 border-2 border-green-200">
      <button class="ml-auto" @click="shared = false">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </button>
      <div class="space-y-4">
        <div class="grid gap-1">
          <p class="text-green-800 font-semibold text-sm tracking-wide">
            Copy:
          </p>
          <button 
            @click="copyShared" 
            class="text-green-900 px-4 py-2 grid items-center space-x-4 rounded-lg border-2 border-green-400 bg-green-300 focus:outline-none hover:shadow hover:bg-green-600 hover:border-green-600 hover:text-white focus:shadow-outline focus:border-green-300 transition duration-300"
            style="grid-template: 1fr /1fr auto"
          >
            <div class="text-left font-medium break-all truncate">{{ state.clipboard }}</div>
            <svg class="-mt-px w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </button>
        </div>
        <div class="grid gap-1">
          <p class="text-green-800 font-semibold text-sm tracking-wide">
            Copy Preview:
          </p>
          <button 
            @click="copySharedPreview" 
            class="text-green-900 px-4 py-2 grid items-center space-x-4 rounded-lg border-2 border-green-400 bg-green-300 focus:outline-none hover:shadow hover:bg-green-600 hover:border-green-600 hover:text-white focus:shadow-outline focus:border-green-300 transition duration-300"
            style="grid-template: 1fr /1fr auto"
          >
            <div class="text-left font-medium break-all truncate">{{ state.clipboardPreview }}</div>
            <svg class="-mt-px w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </button>
        </div>
      </div>
    </Notification>
  </main>
</div>
<div v-else-if="state.preview === true">
  <component :is="compiled" class="w-full h-full" />
</div>
<div v-else class="w-screen h-screen flex items-center justify-center space-y-4">
  <p class="text-xl">Loading ...</p>
  <Loading />
</div>
</template>

<script>
import { useEndpoint } from '@/composables'
// import { encode, decode } from 'base64-url'
import Vue from 'vue'
import { debounce } from 'lodash'
import { Select, Slider, TextInput, Toggle, Checkbox, Radiogroup } from '@/components/basic'
import { defineComponent, reactive, ref, onMounted, computed, watch } from '@vue/composition-api'
export default defineComponent({
  name: 'Playground',
  components: {
    Select
  },
  setup(_, { root }) {
    const state = reactive({
      preview: null,
      editSizes: false,
      content: '',
      rendered: '',
      editing: true,
      sizes: [
        { w: 300, h: 500 },
        { w: 400, h: 500 },
        { w: 700, h: 500 },
        { w: 1000, h: 500 },
      ],
      componentList: [
        { componentName: 'Select', label: 'Select', value: Select },
        { componentName: 'Slider', label: 'Slider', value: Slider },
        { componentName: 'TextInput', label: 'TextInput', value: TextInput },
        { componentName: 'TextInput', label: 'TextInput:multiline', value: TextInput },
        { componentName: 'TextInput', label: 'TextInput:number', value: TextInput },
        { componentName: 'TextInput', label: 'TextInput:date', value: TextInput },
        { componentName: 'TextInput', label: 'TextInput:password', value: TextInput },
        { componentName: 'TextInput', label: 'TextInput:tel', value: TextInput },
        { componentName: 'Toggle', label: 'Toggle', value: Toggle },
        { componentName: 'Checkbox', label: 'Checkbox', value: Checkbox },
        { componentName: 'Radiogroup', label: 'Radiogroup', value: Radiogroup },
      ],
      selectedComponent: 'Select',
      clipboard: '',
      clipboardPreview: '',
      labelClass: 'text-gray-700 font-semibold text-sm tracking-wide'
    })

    const substate = reactive({
      toggle: true,
      input: '',
      content: '',
    })

    const { post, responseState } = useEndpoint()
    const shared = ref(false)
    const shareClipboard = computed(() => {
      const shortId = responseState?.result?.short_id
      if(shortId) {
        return {
          editor: `${window.location.href.split('playground')[0]}playground/${shortId}`,
          preview: `${window.location.href.split('playground')[0]}playground/preview/${shortId}`,
        }
        // return `https://short.colehollant.com/api/${shortId}`
      } else {
        return ''
      }
    })
    const compiled = ref('')
    const clipboardCode = ref(null)
    const clipboardCodePreview = ref(null)

    function addSize() {
      state.sizes.push({ w: 300, h: 500})
      root.$nextTick(() => {
        document.getElementById(['edit-size-width', state.sizes.length - 1].join('-')).focus()
      })
    }

    const setClipboardTextInput = (type) => {
      const multiline = type === 'multiline'
      state.clipboard =
`<TextInput v-model="title"${multiline ? ' multiline' : ''} type="${type}">
  <template v-slot:label>
    <p class="${state.labelClass}">
      Label:
    </p>
  </template>
</TextInput>`
    }

    function copy() {
      const selected = state.selectedComponent
      switch (selected) {
        case 'Slider':
          state.clipboard = 
`<Slider v-model="slider" value="0" min="0" max="100" step="1">
  <template v-slot:label>
    <p class="${state.labelClass}">
      Label:
    </p>
  </template>
</Slider>`
          break
        case 'TextInput':
          setClipboardTextInput('text')
          break
        case 'TextInput:multiline':
          setClipboardTextInput('multiline')
          break
        case 'TextInput:number':
          setClipboardTextInput('number')
          break
        case 'TextInput:date':
          setClipboardTextInput('date')
          break
        case 'TextInput:password':
          setClipboardTextInput('password')
          break
        case 'TextInput:tel':
          setClipboardTextInput('tel')
          break
        case 'Toggle':
          state.clipboard = 
`<Toggle name="theme" v-model="toggle">
  <template v-slot:label>
    <p class="text-gray-700 font-semibold text-sm tracking-wide">
      Theme:
    </p>
  </template>
</Toggle>`
          break
        case 'Select':
          state.clipboard = 
`<Select id="select" placeholder="" v-model="select" :options="[{ label: 'Pink', value: 'a' }, { label: 'Purple', value: 'b' }]">
  <template v-slot:label>
    <p class="text-gray-700 font-semibold text-sm tracking-wide">
      Label:
    </p>
  </template>
</Select>`
          break
        case 'Checkbox':
          state.clipboard =
`<Checkbox name="agreement" v-model="checkbox">
  <template v-slot:label>
    <p class="text-gray-700 font-semibold text-sm tracking-wide">
      Agreement:
    </p>
  </template>
  <template v-slot:label-right>
    <p class="ml-2 text-sm text-gray-700">
      Is this cool w u?
    </p>
  </template>
</Checkbox>`
          break
        case 'Radiogroup':
          state.clipboard = 
`<Radiogroup :options="[{ label: 'option A', value: 'A' }, { label: 'option B', value: 'B' }]" v-model="radio" class="grid gap-1">
  <template v-slot:label>
    <p class="text-gray-700 font-semibold text-sm tracking-wide">
      Options:
    </p>
  </template>
</Radiogroup>`
          break
        default:
          state.clipboard = `<${selected}></${selected}>`
          break
      }
      setTimeout(() => {
        clipboardCode.value.select()
        document.execCommand('copy')
      });
    }

    const debounceRecompile = debounce(() => {
      recompile()
    }, 1000)

    const st = reactive({
      radio: '',
      select: '',
      title: "I'm live 🥰",
      checkbox: false,
      toggle: false,
      slider: 0,
    })

    function recompile() {
      compiled.value = Vue.component('playground', {
        props: ['state'],
        data: () => st,
        template: [`<div @input="(e) => $emit('input', e)">`, state.content, '</div>'].join('\n')
      })
    }

    function injectTab(event) {
      let text = state.content,
          originalSelectionStart = event.target.selectionStart,
          textStart = text.slice(0, originalSelectionStart),
          textEnd =  text.slice(originalSelectionStart);
      state.content = `${textStart}  ${textEnd}`
      setTimeout(() => {
        event.target.selectionEnd = event.target.selectionStart = originalSelectionStart + 2
      });
    }
    function copyShared() {
      state.clipboard = shareClipboard.value.editor
      state.clipboardPreview = shareClipboard.value.preview
      setTimeout(() => {
        clipboardCode.value.select()
        document.execCommand('copy')
      });
    }
    function copySharedPreview() {
      state.clipboardPreview = shareClipboard.value.preview
      setTimeout(() => {
        clipboardCodePreview.value.select()
        document.execCommand('copy')
      });
    }
    function share() {
      post('api/text/new', {
        text: state.content
      }).then(() => {
        shared.value = true
        copyShared()
      })
    }

    function preview() {
      localStorage.setItem('ui-pad-content', state.content)
      const openLocation = window.location.href.replace('/playground', ['/playground/preview'].join('/'))
      window.open(openLocation, '_blank')
    }

    watch(() => root.$route.path,
      (newVal) => {
        if(newVal.includes('playground/preview')) {
          state.preview = true
        } else {
          state.preview = false
        }
      }
    )

    const updateLocalStorage = debounce(() => {
      localStorage.setItem('component-gallery-playground-sizes', JSON.stringify(state.sizes))
    }, 1000)

    watch(() => JSON.stringify(state.sizes),
      () => {
        updateLocalStorage()
      }
    )

    onMounted(() => {
      const localSizes = localStorage.getItem('component-gallery-playground-sizes')
      if(localSizes) {
        state.sizes = JSON.parse(localSizes)
      }
      if(root.$route.params.code) {
        if(root.$route.params.code === 'preview') {
          state.content = localStorage.getItem('ui-pad-content')
          recompile()
        } else {
          fetch(`https://short.colehollant.com/api/text/${root.$route.params.code}`)
            .then(res => res.text())
            .then(res => {
              if(res != state.content) {
                state.content = res
                recompile()
              }
            })
        }
      }
      state.componentList.forEach(c => Vue.component(c.componentName, c.value))
    })

    return {
      state,
      recompile,
      compiled,
      injectTab,
      copy,
      clipboardCode,
      debounceRecompile,
      substate,
      share,
      shareClipboard,
      responseState,
      shared,
      copyShared,
      preview,
      addSize,
      copySharedPreview,
      clipboardCodePreview,
    }
  }
})
</script>