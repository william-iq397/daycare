import { acceptHMRUpdate, defineStore } from "pinia"
export const useStudents = defineStore("useStudents", {
    state: () => ({
        studentsRequests: [],
        students: [],
           student: {
                student_name: '',
                father_name: '',
                mother_name: '',
                father_number: '',
                mother_number: '',
                branch: 'الجبيلة',
                student_birthdate: '',
                student_id_photo: '',
                },
        filter: "",
    }),
    getters: {
        getStudentsRequests: (state) => state.studentsRequests,
        getStudents: (state) => state.students,
    },
    actions: {
    // fetch students requests
        async fetchStudentsRequests() {
            const supabase = useSupabaseClient()
            const { data } = await supabase.from("students_request").select("*").order("created_at", { ascending: false });

            this.studentsRequests = data
        },

    // fetch registered students 

        async fetchStudents() {
            const supabase = useSupabaseClient()
            const { data } = await supabase.from("students").select("*").order("created_at", { ascending: false });
            
            this.students = data
        },

        // add new studnet
        async addStudent() {
            const supabase = useSupabaseClient()
            const { data, error } = await supabase
                .from("students_request")
                .insert({
                    student_name: this.$state.student.student_name,
                    father_name: this.student.father_name,
                    mother_name: this.student.mother_name,
                    father_number: this.student.father_number,
                    mother_number: this.student.mother_number,
                    student_birthdate: this.student.student_birthdate,
                    branch: this.student.branch,
                    student_id_photo: this.student.student_id_photo, 
                })

            this.fetchStudentsRequests()

            console.log(data)
            if (error) {
                console.log("error" + error.message)
                return;
            }
            
            this.student = {
                student_name: "",
                father_name: "",
                mother_name: "",
                father_number: "",
                mother_number: "",
                branch: "الجبيلة",
                student_birthdate: "",
                student_id_photo: "", // Reset the photo
            };
        },

        async deleteStudent(id, table) {
            const supabase = useSupabaseClient()
            const { error } = await supabase
                .from(table)
                .delete()
                .eq("id", id)
                
                this.fetchStudentsRequests()
                this.fetchStudents()
        },

        async updateStudent(id, student) {
            const supabase = useSupabaseClient();
        
            const { data, error } = await supabase
                .from('students')
                .update({
                    id: id,
                    student_name: student.student_name,
                    father_name: student.father_name,
                    mother_name: student.mother_name,
                    branch: student.branch,
                    study_status: student.study_status,
                    father_number: student.father_number,
                    mother_number: student.mother_number,
                    student_birthdate: student.student_birthdate,
                    student_id_photo: student.student_id_photo,
                })
                .eq('id', id)
                .select()

            console.log("Student updated successfully:", data);
        
            this.fetchStudents();
        },
        

            //accept student and delete him and refresh the page   
        async acceptStudent(id) {
            const supabase = useSupabaseClient();
            
            // Fetch the student data from the 'students-requests' table
            const { data: studentData } = await supabase
                .from("students_request")
                .select("*")
                .eq("id", id)
                .single(); // Ensure we get a single record
        
            // Insert the fetched student data into the 'students' table
            const { error: insertError } = await supabase
                .from("students")
                .insert(studentData);
            // delete the student from request to table after inserting to students table
            this.deleteStudent(id, 'students_request')
            // Refresh the lists
            this.fetchStudentsRequests();
            this.fetchStudents();
        }
        
    },
})
