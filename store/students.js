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
        teachers: [],
        teacher: {
            teacher_name: '',
            teacher_description: '',
            teacher_image: '',
        },
        curriculums: [],
        curriculum: {
            curriculum_name: '',
            curriculum_file: '',
            curriculum_image: '',
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
        const supabase = useSupabaseClient();
    
        try {
            const { data, error } = await supabase
                .from("students_request")
                .select("*")
                .order("created_at", { ascending: false });
    
            if (error) {
                console.error("Error fetching student requests:", error.message);
                this.studentsRequests = []; // Set to empty array if there's an error
            } else if (data) {
                this.studentsRequests = data; // Assign the fetched data
            } else {
                console.warn("No data found in students_request table.");
                this.studentsRequests = []; // Set to empty array if no data
            }
        } catch (err) {
            console.error("Unexpected error:", err.message);
            this.studentsRequests = []; // Handle unexpected errors
        }
    },
    

    // fetch registered students 

    async fetchStudents() {
        const supabase = useSupabaseClient();
    
        try {
            const { data, error } = await supabase
                .from("students")
                .select("*")
                .order("created_at", { ascending: false });
    
            if (error) {
                console.error("Error fetching students:", error.message);
                return;
            }
    
            if (data) {
                this.students = data;
            } else {
                console.warn("No students found.");
            }
        } catch (err) {
            console.error("Unexpected error fetching students:", err);
        }
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
        },

        // teachers functions
        async fetchTeachers() {
            const supabase = useSupabaseClient();
        
            try {
                const { data, error } = await supabase
                    .from('teachers')
                    .select("*")
                    .order('created_at', { ascending: true });
        
                if (error) {
                    console.error("Error fetching teachers:", error.message);
                    return;
                }
        
                // Handle empty data
                if (data && data.length > 0) {
                    this.teachers = data;
                } else {
                    console.warn("No teachers found. Displaying empty state.");
                    this.teachers = []; // Set to an empty array to avoid errors
                }
            } catch (err) {
                console.error("Unexpected error fetching teachers:", err);
            }
        },
        

        async addTeacher() {
            const supabase = useSupabaseClient();
            const { data, error } = await supabase
            .from('teachers')
            .insert({
                teacher_name: this.teacher.teacher_name,
                teacher_description: this.teacher.teacher_description,
                teacher_image: this.teacher.teacher_image,
            })

            if(error) console.log("error" + error)

            this.fetchTeachers()

            this.teacher.teacher_name = ""
            this.teacher.teacher_description = ""
            this.teacher.teacher_image = ""
        },

        async deleteTeacher(id) {
            const supabase = useSupabaseClient();
            const { data, error } = await supabase
            .from('teachers')
            .delete()
            .eq('id', id)


            this.fetchTeachers()

        },

        async updateTeacher(id, teacher) {
            const supabase = useSupabaseClient();
            const { data, error } = await supabase
                .from('teachers')
                .update({
                    id: id,
                    teacher_name: teacher.teacher_name,
                    teacher_description: teacher.teacher_description,
                    teacher_image: teacher.teacher_image,
              
                })
                .eq('id', id)
                .select()

            console.log("Student updated successfully:", data);
        
            this.fetchTeachers();
        },

        // Curriculums functions
        // async fetchCurriculums() {
        //    const supabase = useSupabaseClient()
        //    const { data, error } = await supabase
        //    .from('curriculums')
        //    .select()
        //    .order('created_at', {ascending: true})

        //    this.curriculums = data
        //    console.log("data : " +  data)
        // },

        // async addCurriculum() {
        //     const supabase = useSupabaseClient();
        //     const { data, error } = await supabase
        //     .from('curriculums')
        //     .insert({
        //         curriculum_name: this.curriculum.curriculum_name,
        //         curriculum_file: this.curriculum.curriculum_file,
        //         curriculum_image: this.curriculum.curriculum_image,
        //     })

        //     this.fetchCurriculums()
                    
        //     this.curriculum.curriculum_name = ""
        //     this.curriculum.curriculum_file = ""
        //     this.curriculum.curriculum_image = ""
        // }, 


        // async deleteCurriculum(id) {
        //     const supabase = useSupabaseClient();
        //     const { data, error } = await supabase
        //     .from('curriculums')
        //     .delete()
        //     .eq('id', id)

        //     this.fetchCurriculums()
        // },

        // async updateCurriculum(id, curriculum) {
        //     const supabase = useSupabaseClient();
        //     const { data, error } = await supabase
        //     .from('curriculums')
        //     .update({
        //         id: id,
        //         curriculum_name: curriculum.curriculum_name,
        //         curriculum_file: curriculum.curriculum_file,
        //         curriculum_image: curriculum.curriculum_image,
        //     })
        //     .eq('id', id)

        //     this.fetchCurriculums()
        // } 
    },
})
