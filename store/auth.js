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

            const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
                email: this.email,
                password: this.password,
              });

                // fetch logged in user information
                const user = useSupabaseUser() 
                const {data: userData} = await supabase
                .from("users")
                .select("*")
                .eq("user_id", user?.value?.id)

                // toast will pop up
                const toast = useToastr()
                toast.success("تم تسجيل الدخول بنجاح")
                this.fetchUserRole()

                // is the user who is logged in already in public/users then don't insert it
                const userInserted = loginData?.user?.email == userData.email
                if(userInserted) return;

                // otherwise insert him
                const {data} = await supabase
                .from("users")
                .insert([{
                        user_id: loginData.user.id,
                        email: loginData.user.email,
                        role: "user"
                        }])
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


            //update Profile
            // async updateProfile(name) {
            //     // const user = useSupabaseUser()
            //     // const supabase = useSupabase()
            //     const { data, error } = await supabase
            //         .from("users")
            //         .update({ user_name: this.user_name })
            //         .eq("id", user.value?.id)
            //     console.log(data, error)
            //     if (error) throw error
            // },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}
