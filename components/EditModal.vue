<template>
    <div v-if="isEditModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <OnClickOutside @trigger="closeModal">
            <div class="bg-white rounded-lg shadow-lg p-6 min-w-[700px]">
                <h2 class="text-xl font-semibold mb-4">تعديل بيانات الطالب</h2>

                <form @submit.prevent="handleEditUpdate">
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
                            <input type="date" v-model="student.student_birthdate" class="block w-full p-2 border rounded-lg text-sm" />
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
                            <label class="block mb-2 text-sm font-medium text-gray-900"> الفرع</label>
                            <input type="text" v-model="student.branch" class="block w-full p-2 border rounded-lg text-sm" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">صورة الهوية</label>
                            <input type="text" v-model="student.student_id_photo" class="block w-full p-2 border rounded-lg text-sm" placeholder="رابط الصورة" />
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

const useStudent = useStudents()

const props = defineProps({
    student: Object,
    isEditModalOpen: Boolean,
    handleEditUpdate: Function,
});


const emits = defineEmits(["close", "update"]);

function closeModal() {
    emits("update:isEditModalOpen", false);
}

async function submitUpdate() {
    useStudent.updateStudent(props?.student?.id)
    closeModal();
}
</script>