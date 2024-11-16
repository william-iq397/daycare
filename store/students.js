import { acceptHMRUpdate, defineStore } from "pinia"

export const useStudents = defineStore("useStudents", {
    state: () => ({
        studentsRequests: [],
        students: [],
        student: {
            student_name: "",
            father_name: "",
            mother_name: "",
            student_birthdate: "",
        },
    }),
    getters: {
        getStudentsRequests: (state) => state.studentsRequests,
        getStudents: (state) => state.students,
    },
    actions: {
        async fetchStudentsRequests() {
            const supabase = useSupabaseClient()
            const { data } = await supabase.from("students_request").select("*").order("created_at", { ascending: false });

            this.studentsRequests = data
        },

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
            this.student.student_birthdate = ""
        },

        async deleteStudent(id) {
            const supabase = useSupabaseClient()
            const { error } = await supabase
                .from("students_request")
                .delete()
                .eq("id", id)
                
                this.fetchStudentsRequests()
        },

        async updateStudent(id) {
 
            const { data, error } = await supabase
            .from('students')
            .update(data)
            .eq('id', id)
            .select()

            
            console.log('Row updated successfully:', data);

            this.fetchStudents()
          },

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
        
        
            this.deleteStudent(id)
        
        
            console.log("Student successfully moved to 'students' table");
        
            // Refresh the lists
            this.fetchStudentsRequests();
            this.fetchStudents();
        }
        
    },
})
