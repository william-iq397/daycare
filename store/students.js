import { acceptHMRUpdate, defineStore } from "pinia"
export const useStudents = defineStore("useStudents", {
    state: () => ({
        studentsRequests: [],
        students: [],
        student: {
            student_name: "",
            father_name: "",
            mother_name: "",
            father_number: "",
            mother_number: "",
            study_status: "",
            branch: "فرع الجبيلة",
            student_id_photo: "",
            student_birthdate: "",
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
            const { data } = await supabase
                .from("students_request")
                .insert(this.student)
                .select()

            this.fetchStudentsRequests()

            this.student.student_name = ""
            this.student.father_name = ""
            this.student.mother_name = ""
            this.father_number = "",
            this.mother_number = "",
            this.branch = "فرع الجبيلة",
            this.study_status = "فرع الجبيلة",
            this.student_id_photo = "",
            this.student.student_id_photo = ""
            this.student.student_birthdate = ""
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

        async updateStudent(id) {
            const supabase = useSupabaseClient();
        
           
        
            const { data, error } = await supabase
                .from('students')
                .update({
                    id: Math.floor(Math.random() * 1000000000),
                    student_name: this.student.student_name,
                    father_name: this.student.father_name,
                    mother_name: this.student.mother_name,
                    student_id_photo: this.student.student_id_photo,
                    student_birthdate: this.student.student_birthdate,
                })
                .eq('id', id).select("*")
                
        
            if (error) {
                console.error("Error updating student:", error.message);
                return;
            }
        
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
