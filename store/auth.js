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
            const { user, error: authError } = await supabase.auth.signUp({
                email: this.email,
                password: this.password,
            })

            if (authError) {
                console.error("Error signing up:", authError.message)
                return
            }

            // Insert the user into the 'users' table
            const { data, error: dbError } = await supabase
                .from("users")
                .insert(
                    {
                        role: "user", // Default role is 'user'; you can make this 'admin' if needed
                        user_name: this.user_name,
                        email: this.email,
                        password: this.password,
                    },
                )

            const toast = useToastr()
            toast.success("تم تسجيل حساب جديد")
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

            let { data, error } = await supabase?.auth?.signInWithPassword({
                email: this.email,
                password: this.password,
            })

            if (error) {
                this.createError = error
                return false
            }

            // toast will pop up
            const toast = useToastr()
            toast.success("تم تسجيل الدخول بنجاح")
            this.fetchUserRole()
        },

        //UPDATE USER DATA
        async updateUser(name) {
            // const client = useSupabaseAuthClient()
            // const user = useSupabaseUser()
            // const supabase = useSupabaseClient()
            const { data, error } = await supabase.auth.updateUser({
                data: {
                    first_name: name,
                },
            })
            if (error) throw error
            //update profiles
            this.updateProfile(name)
            // toast will pop up
            // const toast = useToastr();
            // toast.success("تم التسجيل بنجاح");
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


            
            this.user_name = ""
            this.email = ""
            this.password = ""
            this.role = ""
        },

        // async get_my_claim() {
        //   const supabase = useSupabase();

        //   const { data, error } = await supabase.rpc("get_my_claims");

        //   if (data) this.admin = data?.userlevel == 100;
        //   return { data, error };
        // },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}
