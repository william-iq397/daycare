<template>
  <dialog ref="dialog" class="rounded-lg shadow-lg p-6">
    <OnClickOutside @trigger="closeDialog">
    <img :src="img" alt="Student ID" class="max-w-full h-full w-full rounded-lg mb-4" />
    <button
      @click="closeDialog"
      class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
    >
      أغلاق
    </button>
  </OnClickOutside>
  </dialog>
</template>

<script setup>
import { OnClickOutside } from "@vueuse/components";
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  img: String, // The image URL to display
  isOpen: Boolean, // Whether the dialog is open
});

const emit = defineEmits(["update:isOpen"]);

const dialog = ref(null);

// Watch the `isOpen` prop to open or close the dialog
watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      dialog.value.showModal();
    } else {
      dialog.value.close();
    }
  }
);

// Close the dialog and update the `isOpen` state
function closeDialog() {
  dialog.value.close();
  emit("update:isOpen", false);
  console.log(props.isOpen)
}


onMounted(() => {
  document.addEventListener('click', closeDialog()) 
})
</script>

<style scoped>
dialog {
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
}
dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}
</style>
