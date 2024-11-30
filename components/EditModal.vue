<template>
    <div v-if="isEditModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <OnClickOutside @trigger="closeModal">
            <div class="bg-white rounded-lg shadow-lg p-6 min-w-[700px]">
                <h2 class="text-xl font-semibold mb-4">تعديل بيانات الطالب</h2>

                <form @submit.prevent="submitUpdate()">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">اسم الطالب</label>
                            <input type="text" v-model="student.student_name" class="block w-full p-2 border rounded-lg text-sm" required />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900"> اسم الاب</label>
                            <input type="text" v-model="student.father_name" class="block w-full p-2 border rounded-lg text-sm" required />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">اسم الام</label>
                            <input type="text" v-model="student.mother_name" class="block w-full p-2 border rounded-lg text-sm" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">تاريخ الميلاد</label>
                            <input type="text" v-model="student.student_birthdate" class="block w-full p-2 border rounded-lg text-sm" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">رقم الاب</label>
                            <input type="text" v-model="student.father_number" class="block w-full p-2 border rounded-lg text-sm" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">رقم الام</label>
                            <input type="text" v-model="student.mother_number" class="block w-full p-2 border rounded-lg text-sm" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900"> حالة الطالب</label>
                            <input type="text" v-model="student.study_status" class="block w-full p-2 border rounded-lg text-sm" />
                        </div>

                        <div>
                            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="student.branch">
                                <option value="الجبيلة" class="text-black" selected>الجبيلة</option>
                                <option value="المناوي" class="text-black">المناوي</option>
                                <option value="البراضعية" class="text-black">البراضعية</option>
                            </select>
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
    student: Object,
    isEditModalOpen: Boolean,
});


const emits = defineEmits(["close", "update"]);

function closeModal() {
    emits("update:isEditModalOpen", false);
}

async function submitUpdate() {
    useStudent.updateStudent(props?.student?.id, props.student)
    closeModal();
}


const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        // Convert the file to a data URL
        reader.onload = (e) => {
            props.student.student_id_photo = e.target.result; // Save data URL in the state
        };

        reader.readAsDataURL(file);
    }
}

</script>