<template>
    <div v-if="isEditModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <OnClickOutside @trigger="closeModal">
            <div class="bg-white rounded-lg shadow-lg p-6 min-w-[700px]">
                <h2 class="text-xl font-semibold mb-4">تعديل بيانات المعلم</h2>

                <form @submit.prevent="submitUpdate()">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">اسم المعلم</label>
                            <input type="text" v-model="teacher.teacher_name" class="block w-full p-2 border rounded-lg text-sm" required />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">وصف المعلم</label>
                            <input type="text" v-model="teacher.teacher_description" class="block w-full p-2 border rounded-lg text-sm" required />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">صورة الهوية</label>
                            <input type="file" @change="onFileChange" class="block w-full p-2 border rounded-lg text-sm" />
                        </div>
                    </div>

                    <div class="mt-6 flex justify-end gap-4">
                        <button type="button" @click="closeModal" class="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg">إلغاء</button>
                        <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded-lg">حفظ التعديلات</button>
                    </div>
                </form>
            </div>
        </OnClickOutside>
    </div>
</template>

<script setup>
import { OnClickOutside } from '@vueuse/components';
import { useStudents } from '../store/students';
// import UploadImageInput from 

const useStudent = useStudents()

const props = defineProps({
    teacher: Object,
    isEditModalOpen: Boolean,
});

const emits = defineEmits(["close", "update"]);

function closeModal() {
    emits("update:isEditModalOpen", false);
}

async function submitUpdate() {
    useStudent.updateTeacher(props?.teacher?.id, props.teacher)
    closeModal();
}


const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        // Convert the file to a data URL
        reader.onload = (e) => {
            props.teacher.teacher_image = e.target.result; // Save data URL in the state
        };

        reader.readAsDataURL(file);
    }
}

</script>