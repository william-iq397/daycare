import { acceptHMRUpdate, defineStore } from "pinia"
import { supabase } from "../supabase/index"
import { useToastr } from "../components/toastr"

export const useAuth = defineStore("authStore", {
    state: () => ({
        user_name: null,
        email: null,
        password: null,
        createError: null,
        role: "",


    }),
    getters: {
        getCreateError: (state) => state.createError,
        isAdmin: () => useSupabaseUser().value?.app_metadata?.userlevel === 100,
    },

    actions: {
        validation(register) {
            if (this.user_name?.length < 3 && register) {
                this.createError = "الاسم يجب ان يكون اكثر من 3 احرف."
            } else if (!this.email?.includes("@")) {
                this.createError = "البريد الالكتروني غير صحيح."
            } else if (this.password?.length < 6) {
                this.createError = "كلمة المرور يجب ان تكون اكثر من 6 احرف."
            } else {
                this.createError = null
            }

            if (this.createError) return false
            else return true
        },

        //Register

        async register() {
            // Sign up the user with Supabase Authentication
            const client = useSupabaseClient()
            const { user: authData, error: authError } = await client.auth.signUp({
                email: this.email,
                password: this.password,
            })

            if (authError) {
                this.createError = "Error signing up:" + authError.message              
                return
            }

                    // Log the authData to verify the user.id
            console.log("authData", authData); // Check if user.id exists

            const userId = authData?.user?.id;
            if (!userId) {
                console.error("User ID is missing. Check if authData is correct.");
                return;
            }



            const toast = useToastr()
            setTimeout(() => {
                toast.info('تم تسجيل حساب جديد بنجاح')                
            }, 500);

            toast.info('يرجى تسجيل الخروج ثم تسجيل الدخول مرة اخرى')
            this.fetchUserRole()
        },

        // fetch weather the user is admin or user
         async  fetchUserRole() {
            const supabase = useSupabaseClient();
            const user = useSupabaseUser();
          
            if (!user.value) return null;
          
            const { data, error } = await supabase
              .from('users')
              .select('role')
              .eq('user_id', user.value.id)
              .single(); // Fetch the user's role
          
            
            if (data?.role !== 'admin') return;
            this.role = data.role
        },

        //login
        async login() {
            if (!this.validation()) return false
            const supabase = useSupabaseClient()
            // const supa = supabase

            const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
                email: this.email,
                password: this.password,
              });


           

            // toast will pop up
            const toast = useToastr()
            toast.success("تم تسجيل الدخول بنجاح")
            this.fetchUserRole()
        },

        //update Profile
        async updateProfile(name) {
            // const user = useSupabaseUser()
            // const supabase = useSupabase()
            const { data, error } = await supabase
                .from("users")
                .update({ user_name: this.user_name })
                .eq("id", user.value?.id)
            console.log(data, error)
            if (error) throw error
        },

        // LogOut
        async logout() {
            const supabase = useSupabaseClient()

            try {
                const { error } = await supabase.auth.signOut()
                const toast = useToastr()
                toast.success("تم التسجيل الخروج بنجاح")
            } catch (error) {
                console.log(error)
            }


            
            this.role = ""
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}
