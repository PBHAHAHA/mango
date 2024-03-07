<template>
  <header class="lg:px-0 px-5 text-primary bg-bg h-[60px] lg:h-[71px] shadow sm:shadow-none">
    <div class="container mx-auto flex justify-between items-center h-full">
      <div class="sm:hidden block">
        <AlignLeftOutlined @click="showDrawer" />
        <a-drawer
          width="300"
          title=""
          placement="left"
          :closable="false"
          :open="open"
          @close="onClose"
        >
          <ClientOnly>
            <div @click="changeTheme" class="cursor-pointer w-8 h-8 rounded-full bg-[#e9e9e9] pdark:bg-[#212121] pdark:color-[#ffc008] text-center">
              <BulbTwoTone v-if="theme === 'pdark'" twoToneColor="#ffc008" />
              <BulbFilled v-else/>
            </div>    
          </ClientOnly>
        </a-drawer>
      </div>
      <div class="flex items-center ">
        <Logo></Logo>
        <div class="ml-2 sm:block hidden">
          <Nav></Nav>
        </div>
      </div>
      <ClientOnly>
        <div @click="changeTheme" class="cursor-pointer w-8 h-8 rounded-full bg-[#e9e9e9] pdark:bg-[#212121] pdark:color-[#ffc008] text-center">
          <BulbTwoTone v-if="theme === 'pdark'" twoToneColor="#ffc008" />
          <BulbFilled v-else/>
        </div>    
      </ClientOnly>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref} from "vue"
import {useStorage} from "@vueuse/core"
const theme = useStorage("theme", "light")
const changeTheme = () => {
  theme.value = theme.value === "light" ? "pdark" : "light"
}
const open = ref<boolean>(false);
const showDrawer = () => {
  open.value = true;
};

const onClose = () => {
  open.value = false;
};
</script>